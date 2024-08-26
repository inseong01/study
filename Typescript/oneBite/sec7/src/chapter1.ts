// 제네릭
// 매개변수, 반환값 타입 자동 추론
// any를 사용하면 any 타입으로 추론돼서 오류 찾기 어려움

// 함수명 뒤에 <T>를 붙임
// <> 안의 문자는 임의 설정
function fn<T>(value: T) {
  // :T 생략가능
  return value;
}

let numberFn = fn([1, 2, 3]); // numberFn: number[]

// <> 안에 매개변수 타입, 반환값 타입 설정 가능
// let stringFn = fn<string>(123); // Error, 매개변수 타입 오류
