'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  console.error('에러러러ㅓ', error);
  const router = useRouter();
  return (
    <div>
      {' '}
      <h3>메인페이지에 오류가 발생했습니다.</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        새로고침
      </button>
    </div>
  );
}
