import { Book } from '@/type/type';

export default async function fetchBooks(q?: string): Promise<Book[]> {
  let url = `${process.env.NEXT_PUBLIC_API_SERVER_URI}/book`;

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
