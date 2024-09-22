// 1. 문제 이해
/*
  숫자 배열을 받아 모든 숫자의 곱을 반환

  숫자 배열을 받는 경우만 있는 것 같음 (빈 배열인 경우 1)
*/


// 2. 구체적 예시
/*
productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60
*/


// 3. 세분화
/*
  배열 첫번째 요소와 배열 첫번째 요소를 제외한 함수 곱 반환
  배열이 비었으면 1 반환
*/


// 4. 해결 / 단순화
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10])) // 60


// 5. 수정하기
