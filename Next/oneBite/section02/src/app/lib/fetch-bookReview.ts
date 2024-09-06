'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import delay from './delay';

export default async function createReview(_: any, formData: FormData) {
  try {
    const bookId = formData.get('id')?.toString();
    const author = formData.get('author')?.toString();
    const content = formData.get('content')?.toString();

    if (!bookId || !author || !content) {
      return {
        status: false,
        error: '입력 값이 충족되지 않았습니다.',
      };
    }
    const msg = { bookId, content, author };
    await delay(1000);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URI}/review`, {
      method: 'POST',
      body: JSON.stringify(msg),
      next: { tags: [`review-${bookId}`] },
    });

    if (response.status !== 201) throw new Error();
    // revalidatePath(`/book/${bookId}`);
    revalidateTag(`review-${bookId}`);
    return {
      status: true,
      error: '',
    };
  } catch (err) {
    console.error(err);
    return {
      status: false,
      error: `등록되지 않았습니다 : ${err}`,
    };
  }
}
