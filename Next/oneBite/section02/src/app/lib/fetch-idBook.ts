import { Book } from '@/type/Book';

export default async function fetchIdBook(id: number): Promise<Book | null> {
  let url = `${process.env.NEXT_PUBLIC_API_SERVER_URI}/book`;

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
