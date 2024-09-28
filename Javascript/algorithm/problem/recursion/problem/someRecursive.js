// 1. 문제 이해
/*
  배열과 콜백을 인자로 받음. 
  배열의 단일 값이 콜백에 전달될 때 true를 반환하면 true를 반환
  하나라도 true면 true, true가 아예 없으면 false
  콜백은 달라질 수 있음
*/


// 2. 구체적 예시
/*
   SAMPLE INPUT / OUTPUT
   const isOdd = val => val % 2 !== 0

   someRecursive([1,2,3,4], isOdd) // true
   someRecursive([4,6,8,9], isOdd) // true
   someRecursive([4,6,8], isOdd) // false
   someRecursive([4,6,8], val => val > 10) // false
*/


// 3. 세분화
/*
  콜백 함수, 배열 요소 하나씩 전달

  하나라도 true가 나오면 반환
  
  배열 길이 만큼 반복
*/


// 4. 해결 / 단순화
function someRecursive(arr, callback) {
  if (arr.length < 1) return false;

  return callback(arr[0]) ? true : someRecursive(arr.slice(1), callback)
}

const isOdd = val => val % 2 !== 0
console.log(someRecursive([1, 2, 3, 4], isOdd)) // true
console.log(someRecursive([4, 6, 8, 9], isOdd)) // true
console.log(someRecursive([4, 6, 8], isOdd)) // false
console.log(someRecursive([4, 6, 8], val => val > 10)) // false

// 5. 수정하기
