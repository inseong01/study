import BookItem from '@/components/bookItem';
import fetchBooks from '@/app/lib/fetch-books';
import { Metadata } from 'next';

export function generateMetadata({ searchParams }: { searchParams: { q: string } }): Metadata {
  return {
    title: `${searchParams.q} : 한입북스 도서 검색`,
    description: `${searchParams.q} : 한입북스 도서 검색 결과입니다`,
    openGraph: {
      title: `${searchParams.q} : 한입북스 도서 검색`,
      description: `${searchParams.q} : 한입북스 도서 검색 결과입니다`,
      images: ['/thumnail.png'],
    },
  };
}

export default async function Page(props: { searchParams: { q: string } }) {
  console.log(props);
  const params = props.searchParams.q;
  const books = await fetchBooks(params);

  return (
    <div>
      <h1>Search {params}</h1>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
