import { MouseEvent } from 'react';
import { Todo } from '../Todo';
import { DispatchExceptNull } from '../App';

interface ListProps {
  list: Todo;
}

function List({ list }: ListProps) {
  const dispatch = DispatchExceptNull();
  // event 마다 선언 타입 다름
  const onClickInput = (e: MouseEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case 'update':
        dispatch.updateContent(list.id);
        break;
      case 'delete':
        dispatch.deleteContent(list.id);
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
