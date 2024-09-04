import BookItem from '@/components/bookItem';
import fetchBooks from '@/app/lib/fetch-books';

export default async function Page({ searchParams }: { searchParams: { q: string } }) {
  const params = searchParams.q;
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
