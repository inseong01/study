import { useState } from 'react';
import { DispatchErrorExcept } from '../App';

function Edit() {
  const [todo, setTodo] = useState('');
  const dispatch = DispatchErrorExcept();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const onClickInput = () => {
    dispatch.createList(todo);
    setTodo('');
  };

  return (
    <div>
      <input type="text" onChange={onChangeInput} value={todo} />
      <input type="button" value={'입력'} onClick={onClickInput} />
    </div>
  );
}

export default Edit;
