// 1. 이진검색, 정렬된 배열을 반으로 나누어 값의 인덱스를 반환한다.
// 2.
//    [[1, 2, 4, 5, 6, 7], 2] // 1
//    [[1, 2, 3], 0] // -1
// 3.
//    1. indexOf() 시간복잡도는 어느정도일까?
//    2.
//      배열을 반으로 나눠, 찾는 숫자보다 크면 이후 배열 버려, 작으면 이전 배열 버려, 반복
//      min, max 변수 선언
//      반복문
//        중간인덱스 변수 선언, min+max 반으로 나눈 값
//        중간값 변수 선언, arr[중간인덱스] 값
//
//        만약 arr[중간인덱스] 값이
//          찾는 숫자보다 작으면
//             max = middle - 1  // middle = 3 -> min:0 + max:2
//          찾는 숫자보다 크면
//             min = middle + 1 // middle = 3 -> min:3 + max:5
//          아니면 
//             중간인덱스 반환
//
//      못 찾으면 -1 반환

// 4. 해결 / 단순화
function binarySearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const middleIdx = Math.floor((min + max) / 2);
    const middleNum = arr[middleIdx];

    if (middleNum < num) {
      min = middleIdx + 1;
    } else if (middleNum > num) {
      max = middleIdx - 1;
    } else {
      return middleIdx
    }
  }
  return -1
}

const arr = new Array(10).fill(0).map((v, i) => v += i + 1);
console.log(binarySearch(arr, 0))
// console.log(arr.indexOf(1))

// 5. 수정하기
