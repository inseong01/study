// 1. 문제 이해
/*
  0부터 함수에 전달된 숫자까지 모든 숫자의 합 반환
*/


// 2. 구체적 예시
/*
recursiveRange(6) // 21
recursiveRange(10) // 55 
*/


// 3. 세분화
/*
  인자와 인자에서 -1한 값을 가진 함수 합 반환
  인자가 0이면 0 반환
*/


// 4. 해결 / 단순화
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 


// 5. 수정하기
