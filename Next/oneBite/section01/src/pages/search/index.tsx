import SearchLayout from '@/components/searchLayout';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import books from '@/mock/books.json';
import BookItem from '@/components/bookItem';

export default function Page() {
  const router = useRouter();
  const searchQuery = router.query.q as string;

  const filteredBooks = books.filter((book) => book.title.includes(searchQuery));

  return (
    <div>
      <h1>Search {searchQuery}</h1>
      {filteredBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
