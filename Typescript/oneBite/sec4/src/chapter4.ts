// 함수 오버로딩
// 함수의 매개변수의 개수나 타입에 따라 다르게 동작 (화살표 함수 지원 X)

// 오버로드 시그니처(여러 버전)
function fn(a: number): void;
function fn(a: number, b: number, c: number): void;

// 구현 시그니처(함수 실행 정의)
function fn(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a);
  }
}
fn(1); // 1
// fn(1, 1); // 매개변수 개수 에러
fn(1, 1, 1); // 3
