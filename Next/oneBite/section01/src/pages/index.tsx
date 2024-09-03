import SearchLayout from '@/components/searchLayout'; // @: src (json에서 시작위치 설정 가능)
import style from './index.module.css';
import BookItem from '@/components/bookItem';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-randomBooks';

import { ReactNode } from 'react';
import { InferGetStaticPropsType } from 'next';
import Header from '@/components/head';

// 컴포넌트가 실행되기 전에 먼저 동작, export 선언, 서버에서 실행됨(window 접근불가)
// export const getServerSideProps = async () => {}
export const getStaticProps = async () => {
  const [allBooks, randomBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);

  return {
    props: {
      allBooks,
      randomBooks,
    },
    revalidate: 5,
  };
};

export default function Home({ allBooks, randomBooks }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header />
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {randomBooks.map((book) => (
            <BookItem key={`추천도서-${book.id}`} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItem key={`모든도서-${book.id}`} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
