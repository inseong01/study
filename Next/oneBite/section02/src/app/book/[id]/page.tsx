import style from '@/app/book/[id]/[id].module.css';
import { BookReviewForm } from '@/components/bookReviewForm';
import { BookReviewList } from '@/components/bookReviewList';
import { Book } from '@/type/type';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [];
}

async function BookElement({ bookId }: { bookId: string }) {
  const url = `${process.env.NEXT_PUBLIC_API_SERVER_URI}/book/${bookId}`;
  const response = await fetch(url, { cache: 'force-cache' });

  if (response.status === 404) return notFound();
  if (!response.ok) return <div>해당자료가 없습니다.</div>;

  const book: Book = await response.json();
  const { id, title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <section>
      <div className={style.cover_img} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
        <img src={coverImgUrl} alt="" />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className={style.container}>
      <BookElement bookId={params.id} />
      <div>
        <BookReviewForm bookId={params.id} />
        <BookReviewList bookId={params.id} />
      </div>
    </div>
  );
}
