# 알고리즘 패턴 : InsertionSort

### 1. 문제 이해하기
모든 배열 요소를 순회   
오름차순으로 정렬 후 배열 반환    
앞부터 정렬됨     

삽입정렬은 기준값을 올바른 부분에 바로 삽입하는 것이 아님   
`비교값`을 `비교값+1` 위치에 덮어씌우다가 올바른 위치에 기준값을 삽입하는 것 

### 2. 구체적 예시
```
insertionSort([3, 2, 1]) // 1, 2, 3
```

### 3. 세분화 - 문제 수행
```javascript
/*
  1. 첫번째 배열부터 요소 순회
      1.1. 첫번째 요소 기준값으로 저장
            1.1.1 기준값 이전 요소 순회 (이전 요소가 기준값보다 클 때까지)
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
```

## 4. 해결 / 단순화
```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) { 
      // arr[j] > currentValue: 비교값이 작아야 반복문 실행
      arr[j + 1] = arr[j];
      arr[j] = currentValue;
    }
  }
  return arr;
}
```

## 5. 수정하기
**코드 수정**    
```javascript
function insertionSort(arr) {
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
```
수정된 코드는 **currentValue** 변수가 한 번만 삽입된다. 이전 코드는 반복마다 **currentValue** 변수가 삽입되었다.  

## 코드
[알고리즘 패턴 - insertionsort.js](../../../algorithm/sort/insertionsort.js)