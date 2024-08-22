// 타입 좁히기
// 조건문을 이용하여 타입 선택

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Person | null | Date) {
  if (typeof value === 'number') {
    console.log(value.toFixed()); // value: number
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase()); // value: string
  } else if (value && 'age' in value) {
    // &&, in 활용
    console.log(`${value.name}은 ${value.age}살 입니다.`); // value: Person
  } else if (value instanceof Date) {
    // instanceof 활용
    console.log(value); // value: Date
  }
}
