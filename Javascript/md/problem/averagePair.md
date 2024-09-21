# 알고리즘 문제 : AveragePair

### 1. 문제 이해하기
  배열의 쌍(2개 값)의 평균이 목표 평균과 같은 값이 있는지 `boolean` 반환    

  시간 `O(n)` 공간 `O(1)`

### 2. 구체적 예시
```
averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false
```

### 3. 세분화 - 문제 수행
```javascript
/*
  평균값 x2 한 값으로 배열의 쌍 더한 값 확인

  1. 빈 값이면 false 반환

  2. 평균값 x2 변수 선언
  3. 기준값 선언
  4. 변동값 선언

  5. 배열 순회, 기준이 배열 길이 초과 전까지(while)
    5.1. 합 일치하는 값 있으면 true 반환
    5.2. 변동값++
    5.3. 변동값이 배열길이 초과하면 기준값+=1, 변동값=기준값+1

  6. false 반환
*/
```

## 4. 해결 / 단순화
```javascript
function averagePair(arr, avg) {
  if (arr.length === 0) return false;

  const avgSum = avg * 2;
  let standardIdx = 0;
  let i = 1;

  while (standardIdx < arr.length - 1) {
    if (arr[standardIdx] + arr[i] === avgSum) return true;
    i += 1;
    if (i > arr.length) {
      standardIdx += 1;
      i = standardIdx + 1
    }
  }
  return false
}
```

## 5. 수정하기
**코드 수정**    
```javascript
function averagePair3(arr, avg) {
  if (arr.length === 0) return false;

  const avgSum = avg * 2;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum === avgSum) return true;
    else if (sum > avgSum) end -= 1;
    else start += 1;
  }
  return false
}
```
- **1번째 수정 - 조건문 이어가기**    

  어떤 조건일 때 해당 구문을 실행하는지 명시 가능   
  의도하지 않은 부분에서 구문 동작 방지 가능

- **2번째 수정 - 시간 복잡도 `O(n)`으로 변경**    

  문제에서 주어진 배열은 `정렬된 배열` 임을 인지하지 못함       
  첫 코드는 배열 요소를 여러 번 순회함으로 `O(n^2)`의 시간복잡도를 가지고 있었음   
  배열의 시작과 끝 값을 이용하여 `sum` 변수와 `avgSum`의 크기 비교를 통해 시작, 끝 변수 크기 증가/감소 설정   
  배열의 요소 순회를 각각 한 번만 하도록 변경


## 코드
[알고리즘 코드 - averagePair.js](../../algorithm/problem/averagePair.js)