import { ReactNode, Suspense } from 'react';
import Searchbar from '../../components/searchbar';

export default function Layout({ children }: { children: ReactNode }) {
  // children: root page 컴포넌트
  return (
    <div>
      <Suspense fallback={<div>검색 중...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
