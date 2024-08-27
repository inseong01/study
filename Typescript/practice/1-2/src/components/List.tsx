import { MouseEvent } from 'react';
import { Todo } from '../Todo';

interface ListProps {
  list: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function List({ todoList, setTodoList, list }: ListProps) {
  console.log(todoList);

  // event 마다 선언 타입 다름
  const onClickInput = (e: MouseEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case 'update':
        {
          const newArr = todoList.map((value) => {
            if (value.id === list.id) {
              value.content = '수정';
            }
            return value;
          });
          setTodoList(newArr);
        }
        break;
      case 'delete':
        {
          const newArr = todoList.filter((value) => value.id !== list.id);
          setTodoList(newArr);
        }
        break;
    }
  };

  return (
    <>
      <div>
        {`${list.id}번: ${list.content}`}
        <input type="button" onClick={onClickInput} value="수정" name="update" />
        <input type="button" onClick={onClickInput} value="삭제" name="delete" />
      </div>
    </>
  );
}

export default List;
