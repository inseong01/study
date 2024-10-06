// 1. 문제 이해
/*
  모든 배열 요소를 순회
  오름차순으로 정렬 후 배열 반환
  뒤에서부터 정렬됨
*/


// 2. 구체적 예시
/*
  bubbleSort([3, 2, 1]) // 1, 2, 3
*/


// 3. 세분화
/*
  배열 길이 만큼 반복
    모든 배열 요소 순회
      이전값과 이후값 비교하여 이전값이 최소값이면 서로 위치 변환
*/


// 4. 해결 / 단순화
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // -1: j+1 때문에
    for (let j = 0; j < arr.length - 1 - i; j++) { // -i: 뒤는 이미 정렬됨
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([1, 4, 2, 3, 0, 5, 7, 6, 9, 8]))


// 5. 수정하기
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let noSwap = true; // 정렬실행 없으면 반환

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  return arr;
}