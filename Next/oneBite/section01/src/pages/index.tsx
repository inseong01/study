import SearchLayout from '@/components/searchLayout';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import style from './index..module.css';
import books from '@/mock/books.json'; // @: src (json에서 시작위치 설정 가능)
import BookItem from '@/components/bookItem';

export default function Home() {
  const router = useRouter();

  const { query } = router.query;

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
