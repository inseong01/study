/**
 * 1. 2가지 이상의 매개변수 타입
 */
// <> 안에 제네릭 타입 매개변수 추가 선언
function fn1<T, U>(a: T, b: U) {
  return [a, b];
}

let firstFn = fn1(1, 'string'); // firstFn: (string | number) []

/**
 * 2. 배열 인덱스 값 타입 추론
 */
// 튜플 타입으로 선언하고 나머지는 배열 타입 선언
function fn2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let secondFn = fn2(['A', 1, 2, 3]); // secondFn: string

/**
 * 3. 제네릭 타입 변수 확장
 */
// 제네릭 타입 변수에 속성, 매서드 부여
function fn3<T extends { length: number }>(data: T) {
  return data.length;
}

let thirdFn1 = fn3('string');
let thirdFn2 = fn3([1, 2, 3]);
// let thirdFn3 = fn3(12345); // Error, number 타입에 length 할당 불가
