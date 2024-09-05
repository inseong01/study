import LoadingSkeleton from './loading-skeleton';

export default function CreateComponent({ count }: { count: number }) {
  const arr = new Array(count).fill(0);

  return (
    <>
      {arr.map((_, idx) => (
        <LoadingSkeleton key={`skeleton ${idx}`} />
      ))}
    </>
  );
}
