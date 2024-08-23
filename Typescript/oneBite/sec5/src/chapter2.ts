// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}
interface Man extends Person {
  // name, age 상속
  sayHello(): void;
}
interface Woman extends Person {
  name: 'she'; // 같은 타입만 변경 가능
  sayHi(): void;
}

let person1: Man = {
  name: 'QQQ',
  age: 11,
  sayHello() {
    console.log('Hello, I am the man');
  },
};
let person2: Woman = {
  name: 'she',
  age: 11,
  sayHi() {
    console.log('Hi, I am the woman');
  },
};
person2.sayHi();
