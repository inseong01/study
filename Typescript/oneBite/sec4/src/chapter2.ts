// 함수 타입 표현식
// 함수 타입을 타입 별칭과 함께 별도 정의
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: (a: number, b: number) => number = (a, b) => a + b;

// 함수 시그니처
type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

const multiply: Operation2 = (a, b) => a + b;
multiply.name; // "multiply" 출력
