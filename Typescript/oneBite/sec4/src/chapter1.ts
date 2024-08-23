// 함수 타입
// 함수 선언식
// 매개변수 기본 타입 설정, 반환타입은 자동추론
function fn1(num1: number, num2: number) {
  return num1 + num2;
}

// 함수 표현식
const fn2 = (num1: number, num2: number) => {};

// 함수 매개변수 나머지
const fn3 = (...rest: number[]) => {}; // 나머지가 전부 같은 타입이면 배열 선언
const fn4 = (...rest: [number, number]) => {}; // 튜플 타입으로 매개변수 개수 제한

// fn3(1, 2, 3, 'string') // 타입 에러
// fn4(1, 2, 3) // 개수 초과 에러

// 함수 선택적 매개변수
// 선택적 매개변수는 끝에 배치
// ?: 선택적 매개변수화
function fn5(str1: string, str3: string, str2?: string) {
  // console.log(str2.toUpperCase); // str2: undefined | string 오류
  if (typeof str2 === 'string') {
    console.log(str2.toUpperCase); // str2: string, 타입 좁히기
  }
}
