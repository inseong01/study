import { ChangeEvent, useRef, useState } from 'react';
import '../App.css';
import { DispatchExceptNull } from '../App';

function Edit() {
  const [todo, setTodo] = useState('');
  const idRef = useRef(0);
  const dispatch = DispatchExceptNull();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const onClickInput = () => {
    dispatch.createContent(todo, idRef.current++);
    setTodo('');
  };

  return (
    <>
      <div>
        <input type="text" placeholder="입력해주세요" onChange={onChangeInput} value={todo} />
        <input type="button" value="입력" onClick={onClickInput} />
      </div>
      <h1>{todo}</h1>
    </>
  );
}

export default Edit;
