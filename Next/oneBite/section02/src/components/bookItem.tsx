import Link from 'next/link';
import style from '@/components/bookItem.module.css';
import { Book } from '@/type/type';
import Image from 'next/image';

export default function BookItem(children: Book) {
  const { id, title, subTitle, description, author, publisher, coverImgUrl } = children;

  return (
    <Link href={`/book/${id}`} className={style.container}>
      <Image src={coverImgUrl} width={80} height={105} alt={`${title} 도서 이미지`} priority={true} />
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
