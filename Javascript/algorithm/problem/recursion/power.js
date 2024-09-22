// 1. 문제 이해
/*
  Math.pow()의 기능 모방, 재귀함수 사용
*/


// 2. 구체적 예시
/*
power(2,0) // 1
power(2,2) // 4
power(2,4) // 16
*/


// 3. 세분화
/*
  첫번째 인자는 정수, 두번째 인자는 지수
  1. 두번째 인자가 0이 되면 1 반환
  2. 첫번째 인자와 두번째 인자 -1 감소한 함수 곱 반환
*/


// 4. 해결 / 단순화
function power(num1, num2) {
  if (num2 === 0) return 1;
  return num1 * power(num1, num2 - 1);
}

console.log(power(2, 0)) // 1
console.log(power(2, 2)) // 4
console.log(power(2, 4)) // 16

// 5. 수정하기
