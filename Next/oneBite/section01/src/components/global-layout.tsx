import { ReactNode } from 'react';
import style from './global-layout.module.css';
import Link from 'next/link';

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={'/'}>📚 OneBite Books</Link>
      </header>
      <div className={style.main}>{children}</div>
      <footer className={style.footer}>@2024.9.2.</footer>
    </div>
  );
}
