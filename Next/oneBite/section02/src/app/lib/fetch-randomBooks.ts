import { Book } from '@/type/Book';

export default async function fetchRandomBooks(): Promise<Book[]> {
  let url = `${process.env.NEXT_PUBLIC_API_SERVER_URI}/book/random`;

  try {
    const response = await fetch(url, { next: { revalidate: 2 } });

    if (!response.ok) throw new Error();
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
