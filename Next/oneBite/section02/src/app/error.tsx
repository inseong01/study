'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h3>검색 페이지에 오류가 발생했습니다.</h3>
      <button
        onClick={() => {
          reset();
        }}
      >
        새로고침
      </button>
    </div>
  );
}
