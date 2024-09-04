'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import style from './searchbar.module.css';

export default function Searchbar() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const params = useSearchParams();
  let searchQuery = params.get('q') as string;

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
    </div>
  );
}
