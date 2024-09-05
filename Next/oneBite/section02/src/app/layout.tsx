import './globals.css';
import Link from 'next/link';
import style from '@/app/layout.module.css';

async function Footer() {
  return (
    <footer className={style.footer}>
      <div>@2024.9.4.</div>
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
          {<Footer />}
        </div>
      </body>
    </html>
  );
}
