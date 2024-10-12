// 1. 문제 이해
/*
  합병정렬
   - 배열분할: 하나의 배열을 여러 개의 배열로 분할
   - 배열합병: 두 개 이상의 배열을 받아 배열의 각 요소를 정렬 반환
*/


// 2. 구체적 예시
/*
  배열분할: mergeSort([1, 11, 10, 6, 9, 7, 4, 5, 3, 2]) // [ 1, 2, 3, 4, 5, 6, 7, 9, 10, 11 ]
  배열합병: mergeSort([1, 3, 5], [2, 4, 6]) // [ 1, 2, 3, 4, 5, 6 ]
*/


// 3. 세분화
/*
  - 배열분할
    하나의 배열을 분할 (재귀함수)
      반으로 분할 : 배열 합병 함수 반복 적용
        배열을 나눌 수 없으면 반환

  - 배열합병
    배열 수 만큼 인덱스 변수들 선언
    반환할 새로운 배열 변수 선언

    변수들이 배열 길이 만큼이 될 때까지 반복 (while)
      a 인덱스의 배열 요소가 b 인덱스 배열 요소보다 작으면
        배열 변수에 a 인덱스 배열 요소 삽입
        a 증가
      그렇지 않으면
        배열 변수에 b 인덱스 배열 요소 삽입
        b 증가

    배열 반환
*/


// 4. 해결 / 단순화
// 배열분할
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = parseInt(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
console.log(mergeSort([1, 4, 5, 3, 2, 0]))

// 배열합병 while
function merge(arr1, arr2) {
  let idx_1 = 0;
  let idx_2 = 0;
  let sortedArr = [];

  while (idx_1 <= arr1?.length && idx_2 <= arr2?.length) {
    if (!arr1[idx_1] && !arr2[idx_2]) break;
    if (arr1.length <= idx_1) {
      sortedArr.push(arr2[idx_2])
      idx_2 += 1
    } else if (arr2.length <= idx_2) {
      sortedArr.push(arr1[idx_1])
      idx_1 += 1
    }

    if (arr1[idx_1] < arr2[idx_2]) {
      sortedArr.push(arr1[idx_1])
      idx_1 += 1;
    } else if (arr2[idx_2] < arr1[idx_1]) {
      sortedArr.push(arr2[idx_2])
      idx_2 += 1;
    }
  }
  return sortedArr;
}

// console.log(mergeSort([1, 3, 5, 9], [2, 4, 6]))

// 배열합병 재귀
function merge2(arr1, arr2) {
  let sortedArr = [];

  function compareArr(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0) return;

    if (arr1.length === 0) {
      sortedArr.push(arr2[0])
      return compareArr(arr1, arr2.slice(1))
    } else if (arr2.length === 0) {
      sortedArr.push(arr1[0])
      return compareArr(arr1.slice(1), arr2)
    }

    if (arr1[0] < arr2[0]) {
      sortedArr.push(arr1[0])
      return compareArr(arr1.slice(1), arr2)
    } else if (arr2[0] < arr1[0]) {
      sortedArr.push(arr2[0])
      return compareArr(arr1, arr2.slice(1));
    }
  }
  compareArr(arr1, arr2)

  return sortedArr;
}


// 5. 수정하기
// 배열합병
function merge3(arr1, arr2) {
  let idx_1 = 0;
  let idx_2 = 0;
  let sortedArr = [];

  while (idx_1 < arr1.length && idx_2 < arr2.length) {
    if (arr1[idx_1] < arr2[idx_2]) {
      sortedArr.push(arr1[idx_1])
      idx_1 += 1;
    } else if (arr1[idx_1] > arr2[idx_2]) {
      sortedArr.push(arr2[idx_2])
      idx_2 += 1;
    }
  }
  while (idx_1 < arr1.length) {
    sortedArr.push(arr1[idx_1])
    idx_1 += 1;
  }
  while (idx_2 < arr2.length) {
    sortedArr.push(arr2[idx_2])
    idx_2 += 1;
  }

  return sortedArr;
}

/*
  두 배열 중 한 배열의 길이가 다를 때
  또 다른 while 문을 추가하여 나머지 요소를 배열에 삽입
*/