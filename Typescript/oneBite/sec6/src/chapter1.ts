// 클래스
// 1. 초기값 선언 있을 때
class Animal {
  name: string = 'Tiger';
  age: number = 1;
}

// 2. 초기값 선언 없을 때
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 3. 상속(확장)
class Man extends Person {
  height: number;

  constructor(name: string, age: number, height: number) {
    super(name, age);
    this.height = height;
  }
}

let animal = new Animal();
let person = new Person('Ree', 11);
let man = new Man('Hyo', 22, 188);

console.log(animal, person, man);
