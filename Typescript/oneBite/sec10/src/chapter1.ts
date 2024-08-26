// 유틸리티(1)
// Partial, Required, Readonly
interface User {
  id: string;
  pwd: number;
  name?: string;
}
// Partial<>: 선택적 타입으로 변경
type CopyPartial<T> = {
  [key in keyof T]?: T[key];
};
let user1: CopyPartial<User> = {
  id: 'qwer',
  // pwd 에러 x
};

// Required<>: 필수 타입으로 변경
type CopyRequired<T> = {
  [key in keyof T]-?: T[key];
};
let user2: CopyRequired<User> = {
  id: 'qwer',
  pwd: 123,
  // Error, name is missing
};

// Readonly<>: 수정불가 타입으로 변경
type CopyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};
let user3: CopyReadonly<User> = {
  id: 'qwer',
  pwd: 123,
};
user3.id = ''; // Error, id is readonly
