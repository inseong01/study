import { DispatchErrorExcept } from '../App';
import { Todo } from '../interface/Todo';

interface ContentProps {
  value: Todo;
}

function Content({ value }: ContentProps) {
  const dispatch = DispatchErrorExcept();

  const onClickDelete = () => {
    dispatch.deleteList(value.id);
  };
  const onClickUpdate = () => {
    dispatch.updateList(value.id);
  };

  return (
    <div>
      {value.content}
      <input type="button" value={'삭제'} onClick={onClickDelete} />
      <input type="button" value={'수정'} onClick={onClickUpdate} />
    </div>
  );
}

export default Content;
