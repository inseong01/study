import { ChangeEvent, useRef, useState } from 'react';
import './App.css';

import { Todo } from './Todo';
import List from './components/List';

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todo, setTodo] = useState('');
  const idRef = useRef(0);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const onClickInput = () => {
    setTodoList([
      ...todoList,
      {
        id: idRef.current++,
        content: todo,
      },
    ]);
    setTodo('');
  };

  return (
    <>
      <div>
        <input type="text" placeholder="입력해주세요" onChange={onChangeInput} value={todo} />
        <input type="button" value="입력" onClick={onClickInput} />
      </div>
      <h1>{todo}</h1>
      <div className="card">
        {todoList.map((list: Todo) => (
          <List key={list.id} setTodoList={setTodoList} todoList={todoList} list={list} />
        ))}
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
