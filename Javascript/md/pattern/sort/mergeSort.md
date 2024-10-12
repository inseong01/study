# 알고리즘 패턴 : MergeSort

### 1. 문제 이해하기
합병정렬은 `배열분할`, `배열합병`으로 구성    
모든 시간복잡도 **O(n log n)**, 공간복잡도 **O(n)**

  - 배열분할: 정렬되지 않은 하나의 배열을 인자로 받음, 여러 개의 배열로 분할
  - 배열합병: 두 개의 배열을 인자로 받아 배열의 각 요소를 정렬한 배열로 반환

### 2. 구체적 예시
```
배열분할: mergeSort([7, 4, 5, 3, 2]) // [ 2, 3, 4, 5, 7 ]
배열합병: merge([1], [2, 4]) // [ 1, 2, 4 ]
```

### 3. 세분화 - 문제 수행
```javascript
/*
  - 배열분할
    하나의 배열을 분할 (재귀함수)
      배열을 2개의 배열로 분할 : 배열 합병 적용
        배열을 나눌 수 없으면 배열 반환

  - 배열합병
    배열 인덱스 변수 2개 선언 (a, b)
    반환할 새로운 배열 변수 선언

    변수 값이 배열 길이 수가 될 때까지 반복 (while)
      a, b 인덱스 배열 요소가 없을 때 예외처리
    
      a 인덱스의 배열 요소가 b 인덱스 배열 요소보다 작으면
        배열 변수에 a 인덱스 배열 요소 삽입
        a 증가
      그렇지 않으면
        배열 변수에 b 인덱스 배열 요소 삽입
        b 증가

    배열 반환
*/
```

## 4. 해결 / 단순화
**배열분할**
```javascript
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = parseInt(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
```
**1) 배열합병 - while**
```javascript
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
```
**2) 배열합병 - 재귀**
```javascript
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
```

## 5. 수정하기
**코드 수정 - 배열합병** 
```javascript
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
```
배열합병 함수에서 `while` 문을 추가하여 가독성을 높였다. 첫번째 `while` 문에서 **false**일 때, 그 다음 `while` 문에서 삽입되지 않은 배열의 나머지 요소를 처리한다. 이미 삽입된 배열은 **false**로 처리되어 다음 `while` 문으로 넘어간다. **1) 배열합병 - while** 코드와 동일한 결과를 반환한다.


## 코드
[알고리즘 패턴 - mergeSort.js](../../../algorithm/sort/mergeSort.js)