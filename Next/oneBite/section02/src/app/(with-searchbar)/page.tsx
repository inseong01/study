import BookItem from '../../components/bookItem';
import style from '@/app/(with-searchbar)/page.module.css';
import LoadingSkeleton from '@/components/loading-skeleton';

import { Book } from '@/type/Book';
import { Suspense } from 'react';
import delay from '../lib/delay';
import Skeleton from 'react-loading-skeleton';
import CreateComponent from '@/components/createComponent';

async function Allbooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URI}/book`, { cache: 'force-cache' });
  const allBooks: Book[] = await response.json();
  await delay(5000);
  if (!allBooks) return <div>해당자료가 없습니다.</div>;
  return allBooks.map((book) => <BookItem key={book.id} {...book} />);
}
async function RandomBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URI}/book/random`, {
    next: { revalidate: 2 },
  });
  const randomBooks: Book[] = await response.json();
  await delay(4000);

  if (!randomBooks) return <div>해당자료가 없습니다.</div>;
  return randomBooks.map((book) => <BookItem key={book.id} {...book} />);
}

export default async function Page() {
  return (
    <>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          <Suspense fallback={<CreateComponent count={3} />}>
            <RandomBooks />
          </Suspense>
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          <Suspense fallback={<CreateComponent count={10} />}>
            <Allbooks />
          </Suspense>
        </section>
      </div>
    </>
  );
}
