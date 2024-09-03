import SearchLayout from '@/components/searchLayout';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import BookItem from '@/components/bookItem';
import fetchBooks from '@/lib/fetch-books';
import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from 'next';
import { Book } from '@/type/book';
import Head from 'next/head';
import Header from '@/components/head';

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   const q = context.query.q as string;
//   const searchedBooks = await fetchBooks(q);
//   return {
//     props: {
//       searchedBooks,
//     },
//   };
// };
// { searchedBooks }: InferGetStaticPropsType<typeof getStaticProps>

export default function Page() {
  const [books, setBooks] = useState<Book[]>([]);
  const router = useRouter();
  const searchQuery = router.query.q as string;

  const fetchSearchedBooks = async () => {
    const data = await fetchBooks(searchQuery);
    setBooks(data);
  };

  useEffect(() => {
    if (!searchQuery) return;
    fetchSearchedBooks();
  }, [searchQuery]);

  return (
    <>
      <Header subTitle="검색" />
      <div>
        <h1>Search {searchQuery}</h1>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
