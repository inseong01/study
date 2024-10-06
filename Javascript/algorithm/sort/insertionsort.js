// 1. 문제 이해
/*
  모든 배열 요소를 순회
  오름차순으로 정렬 후 배열 반환
  앞부터 정렬됨
*/


// 2. 구체적 예시
/*
  insertionSort([3, 2, 1]) // 1, 2, 3
*/


// 3. 세분화
/*
  모든 배열 요소 순회
    기준값과 비교값 비교
      기준값보다 작으면 다음 비교값과 비교
      기준값이 비교값보다 크면 비교값 이후 자리에 삽입

  첫번째 배열부터 요소 순회
    첫번째 요소 기준값으로 저장
    기준값 이전 요소 순회 (이전 요소가 기준값보다 클 때까지)
      이전 요소는 기준값 위치에 삽입
      이전 요소보다 기준값이 크면 그 위치에 기준값 삽입

  예)  3,  2,  1

  i j  [j] [j+1]           currentValue = 2 저장 
  1 0   3   3              // 덮어씌움
        2   3              [j] = currentValue // 올바른 위치 삽입

  i j      [j] [j+1]       currentValue = 1 저장
  2 1   2   3   3          // 덮어씌움
      [j] [j+1]            
  2 0   2   2   3          // 덮어씌움
        1   2   3          [j] = currentValue // 올바른 위치 삽입
*/


// 4. 해결 / 단순화
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) { // arr[j] > currentValue: 비교값이 작아야 반복문 실행
      arr[j + 1] = arr[j];
      arr[j] = currentValue;
    }
  }

  return arr;
}

// console.log(insertionSort([3, 2, 1, 9, 4, 7, 6, 5, 8]))


// 5. 수정하기
function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}
// currentValue가 한 번만 삽입되도록 변경

console.log(insertionSort2([3, 2, 1]))