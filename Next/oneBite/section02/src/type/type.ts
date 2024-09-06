export interface Book {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  author: string;
  publisher: string;
  coverImgUrl: string;
}

export interface Review {
  id: number;
  content: string;
  author: string;
  createdAt: string;
  bookId: number;
}
