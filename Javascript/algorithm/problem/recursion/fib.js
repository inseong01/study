// 1. 문제 이해
/*
  숫자를 받아 피보나치 수열의 n번째 숫자를 반환
  (1, 1, 2, 3, 5, 8, ...)
  모든 수는 이전 두 수의 합과 같음
*/


// 2. 구체적 예시
/*
fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465
*/


// 3. 세분화
/*
  피보나치 수열 변수 선언
  피보나치 수열 생성 함수 선언
    받은 숫자가 0이면 현재 n번째 값 반환

    (1,    1,    2,    3,    5,    8, ...)
     0     1     2     3     4     5
     1     0+1   1+1   1+2   2+3   3+5
*/


// 4. 해결 / 단순화
function fib(num) {
  if (num === 0 || num === 1) return num;
  return fib(num - 2) + fib(num - 1);
}
/*
  fibSum(2) + fibSum(3)
  fibSum(0) + fibSum(1) + fibSum(1) + fibSum(2)
                                      fibSum(0) + fibSum(1)

  1 + 2             // 3
  0 + 1 + 1 + 1     // 1 + 2
              0 + 1 // 1
*/

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465

// 5. 수정하기
function fib2(num) {
  if (num < 3) return 1;
  return fib(num - 2) + fib(num - 1);
}

console.log(fib2(4)) // 3
console.log(fib2(10)) // 55
console.log(fib2(28)) // 317811
console.log(fib2(35)) // 9227465