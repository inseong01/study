import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout(props: { team: ReactNode; user: ReactNode; children: ReactNode }) {
  return (
    <>
      {props.team}
      {props.user}
      {props.children}

      <Link href={'/parallel/file'}>file</Link>
    </>
  );
}
