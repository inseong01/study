import style from '@/app/book/[id]/[id].module.css';
import { Book } from '@/type/Book';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [];
}

export default async function Page({ params }: { params: { id: string | string[] } }) {
  const url = `${process.env.NEXT_PUBLIC_API_SERVER_URI}/book/${params.id}`;
  const response = await fetch(url, { cache: 'force-cache' });

  if (response.status === 404) return notFound();
  if (!response.ok) return <div>해당자료가 없습니다.</div>;
  const book: Book = await response.json();

  const { id, title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <>
      <div className={style.container}>
        <div className={style.cover_img} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
          <img src={coverImgUrl} alt="" />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
}
