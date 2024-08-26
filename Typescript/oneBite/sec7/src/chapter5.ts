// 제네릭 클래스
// 제네릭 변수로 타입 선언 확장성 보장
class List<T> {
  constructor(private arr: T[]) {}

  push(data: T) {
    this.arr.push(data);
  }
  pop() {
    this.arr.pop();
  }
  print() {
    console.log(this.arr);
  }
}

let list1 = new List([1, 2, 3, '2']);
list1.pop();
list1.push('Hi');
list1.print();
