import Link from 'next/link';
import style from '@/components/bookItem.module.css';
import { Book } from '@/type/Book';

export default function BookItem(children: Book) {
  const { id, title, subTitle, description, author, publisher, coverImgUrl } = children;

  return (
    <Link href={`/book/${id}`} className={style.container}>
      <img src={coverImgUrl} alt="" />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
