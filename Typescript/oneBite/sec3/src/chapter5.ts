// 타입 단언
// 조건 - A as B - A가 B의 슈퍼타입, A가 B의 서브타입
type Person = {
  name: string;
  age: number;
};
// 초기 타입 설정
let person1 = {} as Person;
person1.name = 'Ronn';
person1.age = 12;
// 프로퍼티 추가
let person2 = {
  name: 'Lee',
  age: 22,
  country: 'KO',
} as Person;

// 다중 단언
// 실제 타입 변경이 아님으로 권장하지 않음
let num = 10 as unknown as string;

// const 단언
// literal 타입 선언
let num1 = 20 as const; // num1: 20
// readonly 선언
let config = {
  id: 'qwee123',
  pwd: 'qqqwwweee222',
} as const;
// config.id = 'ddddddddd' // 변경불가 오류

// Non Null 단언
type Post = {
  title: string;
  id?: string; // ? = 값이 있을 수도 없을 수도
};
let post1: Post = {
  title: 'Hello',
};

const len: number = post1.id!.length; // ! = undefined/null이 아닐 것
