import { createContext, useContext, useReducer, useRef } from 'react';
import { Todo } from './interface/Todo';
import './App.css';

import Edit from './components/Edit';
import Content from './components/Content';

type Action =
  | {
      type: 'CREATE';
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: 'DELETE';
      data: {
        id: number;
      };
    }
  | {
      type: 'UPDATE';
      data: {
        id: number;
      };
    };

function reducer(todoList: Todo[], action: Action) {
  switch (action.type) {
    case 'CREATE':
      return [...todoList, action.data];
    case 'DELETE':
      return todoList.filter((arr: Todo) => arr.id !== action.data.id);
    case 'UPDATE':
      return todoList.map((list: Todo) => {
        if (list.id === action.data.id) {
          return { ...list, content: 'Update' };
        }
        return list;
      });
  }
}
const initState: Todo[] = [];

// createContext 안에는 하나의 인자가 필요
export const TodoStateContext = createContext<Todo[] | null>(null);
export const DispatchContext = createContext<{
  createList: (text: string) => void;
  deleteList: (id: number) => void;
  updateList: (id: number) => void;
} | null>(null);

// null 예외처리
export const DispatchErrorExcept = () => {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw Error('Dispatch is null');
  return dispatch;
};

function App() {
  const [todos, dispatch] = useReducer(reducer, initState);
  const idRef = useRef(0);

  function createList(text: string) {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  }
  function deleteList(id: number) {
    dispatch({
      type: 'DELETE',
      data: { id },
    });
  }
  function updateList(id: number) {
    dispatch({
      type: 'UPDATE',
      data: { id },
    });
  }

  return (
    <>
      <TodoStateContext.Provider value={todos}>
        <DispatchContext.Provider
          value={{
            createList,
            deleteList,
            updateList,
          }}
        >
          <Edit />
          {todos.map((list: Todo) => (
            <Content key={list.id} value={list} />
          ))}
        </DispatchContext.Provider>
      </TodoStateContext.Provider>
    </>
  );
}

export default App;
