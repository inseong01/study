import { Review } from '@/type/type';
import ReviewItem from './reviewItem';

export async function BookReviewList({ bookId }: { bookId: string }) {
  const url = `${process.env.NEXT_PUBLIC_API_SERVER_URI}/review/book/${bookId}`;
  const response = await fetch(url);

  if (response.status === 404) return <div>리뷰 조회 오류</div>;
  if (!response.ok) return <div>해당 리뷰가 없습니다.</div>;

  const reviews: Review[] = await response.json();
  return (
    <>
      {reviews.map((review) => (
        <ReviewItem key={review.id} {...review} />
      ))}
    </>
  );
}
