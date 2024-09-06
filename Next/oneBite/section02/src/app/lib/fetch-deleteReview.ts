'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export default async function deleteReview(id: number, bookId: number) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URI}/review/${id}`, {
    method: 'DELETE',
    next: { tags: [`review-delete-${id}`] },
  });
  // revalidatePath(`/book/${bookId}`);
  revalidateTag(`review-delete-${id}`);
  if (response.status !== 200) return console.error('삭제되지 않았습니다.');
}
