import { Book } from '@/type/book';

export default async function fetchRandomBooks(): Promise<Book[]> {
  let url = `https://onebite-books-server-main-kohl.vercel.app/book/random`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error();
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
