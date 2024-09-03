import { Book } from '@/type/book';

export default async function fetchBooks(q?: string): Promise<Book[]> {
  let url = `https://onebite-books-server-main-kohl.vercel.app/book`;

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error();
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
