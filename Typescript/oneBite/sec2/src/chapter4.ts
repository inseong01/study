// 타입 별칭
// : 타입 중복 생성 방지
type person = {
  name: string;
  age: number;
  birth: string;
};

let person1: person = {
  name: 'Ethan',
  age: 12,
  birth: '2000.01.01',
};
let person2: person = {
  name: 'Evan',
  age: 10,
  birth: '2000.11.21',
};

// 인덱스 시그니처
// : 객체의 key-value 타입 설정, 규칙적인 타입 생성 가능
// 주의 - 객체가 비어있으면 오류 발생 X
type item = {
  [key: string]: string;
  code: string; // 프로퍼티 추가로 빈 객체 경고, value 타입과 같아야 함
};

let item1: item = {
  content: 'row',
  code: '1-234',
};
