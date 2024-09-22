// 1. 문제 이해
/*
  정수와 그 아래의 모든 정수의 곱
  팩토리얼 0(0!)은 1이다.
*/


// 2. 구체적 예시
/*
factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040
*/


// 3. 세분화
/*
  첫번째 인자와 -1 된 인자를 가진 함수 반환
  첫번째 인자가 0이면 1반환
*/


// 4. 해결 / 단순화
function factorial(num) {
  if (num < 0) return 0;
  if (num === 0) return 1;
  return num * factorial(num - 1)
}

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040

// 5. 수정하기
