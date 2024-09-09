'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const onClickBack = () => {
    router.back();
  };
  return (
    <>
      <h3 onClick={onClickBack}>this file</h3>
    </>
  );
}
