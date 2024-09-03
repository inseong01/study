import { Book } from '@/type/book';

export default async function fetchIdBook(id: number): Promise<Book | null> {
  let url = `https://onebite-books-server-main-kohl.vercel.app/book`;

  if (id) {
    url += `/${id}`;
  }

  try {
    const response = await fetch(url);
    // const res = await response.json();

    if (!response.ok) throw new Error();
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
