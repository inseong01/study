// 인터페이스 합침
// 인터페이스 중복 선언 가능, 중복된 인터페이스는 합쳐짐

interface Person {
  name: string;
}
interface Person {
  age: number;
}

let person1: Person = {
  name: 'WW',
  age: 29,
};
