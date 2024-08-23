// 인터페이스
// 타입 별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법
interface Person {
  name: string;
  age?: number;
  sayHi(): void; // 함수 호출 시그니처( 오버로딩 가능 )
  sayHi(value: string, num: number): void;
  // sayHi: () => void; // 함수 타입
} // 유니온 불가 | string | number

let person1: Person = {
  name: 'Queen',
  sayHi: (value?, num?) => {
    if (value && num) {
      console.log(value, num);
    } else {
      console.log('Hi');
    }
  },
};

person1.sayHi();
