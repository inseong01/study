import { useRouter } from 'next/router';
import { ChangeEvent, KeyboardEvent, ReactNode, useEffect, useState } from 'react';
import style from './searchLayout.module.css';

export default function SearchLayout({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  let searchQuery = router.query.q as string;

  // 새로고침
  useEffect(() => {
    setSearch(searchQuery || '');
  }, [searchQuery]);

  // input & button Event
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onKeyUpSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!e.code.match(/Enter|NumpadEnter/)) return;
    onClickSearch();
  };
  const onClickSearch = () => {
    if (!search) return;
    if (search === searchQuery) return;
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={search}
          onChange={onChangeSearch}
          onKeyUp={onKeyUpSearch}
        />
        <button onClick={onClickSearch}>검색</button>
      </div>
      <div>{children}</div>
    </div>
  );
}
