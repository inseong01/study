// 인터페이스와 클래스
interface Person {
  name: string;
  age: number;
}
class Man implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    // super 못 씀 (class 끼리만 가능)
    this.name = name;
    this.age = age;
  }
}

// 간추린 형태
class Man1 implements Person {
  // interface는 public만 제공
  constructor(public name: string, public age: number) {}
}
