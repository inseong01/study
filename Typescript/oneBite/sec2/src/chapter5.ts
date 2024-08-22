// enum 타입
// 여러 가지 값들에 각각의 이름 부여, 열거로 사용
// enum은 컴파일 하면 다른 타입과 다르게 사라지지 않음

enum Number {
  ONE, // 할당하지 않으면 0
  TWO,
  THREE,
}

let number1 = {
  one: Number.ONE,
  two: Number.TWO,
  three: Number.THREE,
};

console.log(number1);
