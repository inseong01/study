import { createContext, useContext, useReducer } from 'react';
import './App.css';

import { Todo } from './Todo';
import List from './components/List';
import Edit from './components/Edit';

type Action =
  | {
      type: 'CREATE';
      id: number;
      content: string;
    }
  | {
      type: 'UPDATE';
      id: number;
      content: string;
    }
  | {
      type: 'DELETE';
      id: number;
    };

function reducer(todoList: Todo[], action: Action) {
  switch (action.type) {
    case 'CREATE':
      return [...todoList, { id: action.id, content: action.content }];
    case 'UPDATE':
      return todoList.map((list) => {
        if (list.id === action.id) {
          return { ...list, content: action.content };
        }
        return list;
      });
    case 'DELETE':
      return todoList.filter((list) => list.id !== action.id);
    default:
      return todoList;
  }
}

export const TodoListContext = createContext<Todo[] | null>(null);
export const DispatchContext = createContext<{
  createContent: (todo: string, id: number) => void;
  updateContent: (id: number) => void;
  deleteContent: (id: number) => void;
} | null>(null);

export const DispatchExceptNull = () => {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw Error;
  return dispatch;
};

function App() {
  const [todoList, dispatch] = useReducer(reducer, []);

  function createContent(todo: string, id: number) {
    dispatch({
      type: 'CREATE',
      id,
      content: todo,
    });
  }
  function updateContent(id: number) {
    dispatch({
      type: 'UPDATE',
      id,
      content: '수정됨',
    });
  }
  function deleteContent(id: number) {
    dispatch({
      type: 'DELETE',
      id,
    });
  }

  return (
    <>
      <TodoListContext.Provider value={todoList}>
        <DispatchContext.Provider value={{ createContent, updateContent, deleteContent }}>
          <Edit />
          <div className="card">
            {todoList.map((list: Todo) => (
              <List key={list.id} list={list} />
            ))}
          </div>
          <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </DispatchContext.Provider>
      </TodoListContext.Provider>
    </>
  );
}

export default App;
