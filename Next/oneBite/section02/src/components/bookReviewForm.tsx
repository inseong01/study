'use client';

import createReview from '@/app/lib/fetch-bookReview';
import style from './bookReviewForm.module.css';
import { useActionState, useEffect } from 'react';

export function BookReviewForm({ bookId }: { bookId: string }) {
  const [state, formAction, isPending] = useActionState(createReview, null);

  useEffect(() => {
    if (state && state.status === false) {
      alert(state.error);
    }
  }, [state]);
  return (
    <section>
      <form action={formAction} className={style.form_container}>
        <input readOnly name="id" type="text" value={bookId} hidden />
        <textarea required disabled={isPending} name="content" placeholder="리뷰내용" />
        <div className={style.submit_container}>
          <input required disabled={isPending} name="author" type="text" placeholder="작성자" />
          <button disabled={isPending} type="submit">
            {isPending ? '...' : '작성하기'}
          </button>
        </div>
      </form>
    </section>
  );
}
