'use client';

import deleteReview from '@/app/lib/fetch-deleteReview';
import style from './reviewItem.module.css';

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  bookId,
}: {
  id: number;
  content: string;
  author: string;
  createdAt: string;
  bookId: number;
}) {
  const onClickDelete = () => {
    deleteReview(id, bookId);
  };
  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.bottom_container}>
        <div className={style.date}>{new Date(createdAt).toLocaleString()}</div>
        <div className={style.delete_button} onClick={onClickDelete}>
          삭제하기
        </div>
      </div>
    </div>
  );
}
