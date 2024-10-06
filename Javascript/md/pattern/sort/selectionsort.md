# 알고리즘 패턴 : SelectionSort

### 1. 문제 이해하기
모든 배열 요소를 순회   
오름차순으로 정렬 후 배열 반환    
앞부터 정렬됨   

변환을 한번씩 진행함으로 버블정렬에 비해 메모리 성능면에서 효율적이나 모든 요소를 순회해야 함   

### 2. 구체적 예시
```
selectionSort([3, 2, 1]) // 1, 2, 3
```

### 3. 세분화 - 문제 수행
```javascript
/*
  1. 모든 배열 요소 순회
      1.1. 첫번째 요소 인덱스를 작은 수의 인덱스로 저장
            다음 요소와 비교하며 최소값 인덱스 저장
      1.2. 마지막 요소에 도달하면 최소값과 비교 
            인덱스 변수 이용하여 기준값 위치 변경
*/
```

## 4. 해결 / 단순화
```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // -1: i+1
    let min = i; // 최소값 arr 요소 인덱스 저장

    for (let j = i + 1; j < arr.length; j++) { // j=i+1: 앞부터 정렬됨
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}
```

## 5. 수정하기
**코드 수정**    
```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    if (i !== min) { // 최소값 인덱스가 달라져야 변환
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}
```
수정된 코드는 최소값 인덱스가 변환할 때만 배열 변환이 이뤄진다. 불필요한 배열 변환이 이뤄지지 않는다.

## 코드
[알고리즘 패턴 - selectionsort.js](../../../algorithm/sort/selectionsort.js)