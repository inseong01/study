# 알고리즘 패턴 : QuickSort

### 1. 문제 이해하기
  퀵 정렬: `pivot`, `quickSort`
  - `pivot`   
    하나의 요소를 선택, 선택한 요소보다 작은 요소들 개수 만큼 증가한 인덱스 반환    
    인덱스 증가할 때마다 배열 변환 

  - `quickSort`   
    **pivot** 변수를 기준으로 좌, 우측 나눠서 재귀함수 적용   
    배열 반환

### 2. 구체적 예시
```
arr = [ 5, 2, 1, 8, 4, 7, 6, 3 ]

pivot(arr) // 4
quickSort(arr) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
```

### 3. 세분화 - 문제 수행
```javascript
/*
  - pivot
    첫 요소 변수 선언
    반환 인덱스 변수 선언
    하나의 요소 변수 이후 요소 순회, 비교
      작으면 반환 인덱스 증가
      배열 자리바꿈
    첫 요소와 반환 인덱스 요소와 배열 자리바꿈
    반환 인덱스 반환

  - quickSort
    pivot 인덱스 기준 quickSort 함수 실행
      quickSort(arr, 시작 0 끝 pivot) 인자 부여
      quickSort(arr, 시작 pivot 끝 arr.length) 인자 부여
    배열 반환
*/
```

## 4. 해결 / 단순화
**pivot()**
```javascript
function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
  }

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx += 1;
      swap(arr, swapIdx, i)
    }
    console.log(arr)
  }
  swap(arr, start, swapIdx)

  return swapIdx;
}
```
**quickSort()**
```javascript
function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
```

## 5. 수정하기
**코드 해석**    
```javascript
function quickSort(arr, left = 0, right = arr.length) {
//  left가 right보다 작으면 실행 
//    조건문 안에 있는 첫번째 quickSort 함수 실행
//      arr를 반환하기 전까지 두번째 quickSort 함수 대기
//  arr 반환
}

function pivot(arr, start = 0, end = arr.length + 1) {
//  새로운 배열을 반환하지 않고 arr 위치 변환
//    arr 순회 
//      pivot 값이 배열 요소값보다 작으면 
//        swap 인덱스 증가
//        swap함수 실행
//    swap함수 실행 (조건문에 걸치지 않은, 큰 요소와 작은 요소 위치 변경) 
//  swap 인덱스 반환
}
```
`quickSort()`에서 조건문을 적용하지 않으면 무한 반복된다. **right = arr.length** 인자에서 **right**가 최소 1이란 조건을 적용해야 한다.    

퀵 정렬에서 피벗이 중요하다. 피벗은 비교 기준점의 시작 값이다. 피벗을 기준으로 좌측과 우측으로 나눠 비교한다. 나눠진 배열은 독립적으로 정렬된다. 정렬할 때 다시 좌우측 배열을 비교하지 않는다.

## 코드
[알고리즘 패턴 - quickSort.js](../../../algorithm/sort/quickSort.js)