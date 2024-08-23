// 접근 제어자
class Person {
  protected name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Man extends Person {
  height: number;

  constructor(name: string, age: number, height: number) {
    super(name, age);
    // protected name 일 때 상속 클래스에서 접근 가능
    this.name = 'Lee';
    this.height = height;
  }
}

let person1: Person = new Person('Wu', 22);
console.log(person1);
// class 인스턴스가 private/protected 일 때 외부 접근 불가
// person1.name = 'Lee';
// person1.age = 12;
// console.log(person1);

/**
 * public : 기본값
 * private : 클래스 내부에서만 접근가능
 * protected : 상속 객체까지 접근가능
 */

// 간추린 형태
class Person1 {
  constructor(protected name: string, private age: number) {}
}
