import Link from 'next/link';
import style from '@/components/bookItem.module.css';
import { Book } from '@/type/book';

export default function BookItem(children: Book) {
  const { id, ...rest } = children;
  return (
    <Link href={`/book/${id}`} className={style.container} {...rest}>
      <img src={rest.coverImgUrl} alt="" />
      <div>
        <div className={style.title}>{rest.title}</div>
        <div className={style.subTitle}>{rest.subTitle}</div>
        <br />
        <div className={style.author}>
          {rest.author} | {rest.publisher}
        </div>
      </div>
    </Link>
  );
}
