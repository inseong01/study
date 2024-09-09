import './globals.css';
import Link from 'next/link';
import style from '@/app/layout.module.css';
import { ReactNode } from 'react';

async function Footer() {
  return (
    <footer className={style.footer}>
      <div>@2024.9.4.</div>
    </footer>
  );
}

export default function RootLayout(props: { children: ReactNode; modal: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header className={style.header}>
            <Link href={'/'}>📚 OneBite Books</Link>
          </header>
          <div className={style.main}>{props.children}</div>
          {<Footer />}
        </div>
        {props.modal}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
