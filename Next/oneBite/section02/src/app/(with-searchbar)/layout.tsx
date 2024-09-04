import { ReactNode, Suspense } from 'react';
import Searchbar from '../../components/searchbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <Searchbar />
      {children}
    </Suspense>
  );
}
