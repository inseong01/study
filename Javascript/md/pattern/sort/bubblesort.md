# 알고리즘 패턴 : BubbleSort

### 1. 문제 이해하기
모든 배열 요소를 순회   
오름차순으로 정렬 후 배열 반환    
뒤에서부터 정렬됨   

### 2. 구체적 예시
```
bubbleSort([3, 2, 1]) // 1, 2, 3
```

### 3. 세분화 - 문제 수행
```javascript
/*
  1. 배열 길이 만큼 반복
      1.1. 모든 배열 요소 순회
            이전값과 이후값 비교하여 이전값이 최소값이면 서로 위치 변환
*/
```

## 4. 해결 / 단순화
```javascript
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
```

## 5. 수정하기
**코드 수정**    
```javascript
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
```
수정된 코드는 정렬 실행 여부로 반복을 종료한다. **noSwap** 변수가 두번째 반복문을 거쳐 `false`를 할당 받지 않으면 조건문을 실행한다. **noSwap** 변수를 사용하여 반복문을 일찍 종료할 수 있다.

## 코드
[알고리즘 패턴 - bubbleSort.js](../../../algorithm/sort/bubblesort.js)