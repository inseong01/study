import './globals.css';
import Link from 'next/link';
import style from '@/app/layout.module.css';
import { Book } from '@/type/Book';

async function footer() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URI}/book`);
  const allBooks: Book[] = await response.json();

  if (!allBooks) return <footer className={style.footer}>@2024.9.4.</footer>;
  return (
    <footer className={style.footer}>
      <div>@2024.9.4.</div>
      <div>{allBooks.length}권의 도서가 등록되어있습니다.</div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header className={style.header}>
            <Link href={'/'}>📚 OneBite Books</Link>
          </header>
          <div className={style.main}>{children}</div>
          {footer()}
        </div>
      </body>
    </html>
  );
}
