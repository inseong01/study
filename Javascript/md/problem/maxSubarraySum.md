maxSubarraySum
# 알고리즘 문제 : MaxSubarraySum

### 1. 문제 이해하기
하나의 배열, 하나의 숫자를 받고 숫자 만큼의 배열 요소를 더해 가장 큰 합을 반환

시간 `O(n)` 공간 `O(1)`


### 2. 구체적 예시
```
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
```

### 3. 세분화 - 문제 수행
```javascript
/*
  배열 정렬, 부여받은 숫자 길이 만큼 배열 요소 합, +1 이후 위치에 있는 요소 합, -1 이전 위치에 있는 요소 빼기

  1. 배열 요소 개수 초기 합 변수 선언 (for)
  2. 반환 합 변수 초기값 변수 할당/선언
  3. 배열 개수 - 부여받은 숫자 만큼 반복 (for)
    2.1. 이전 요소 값 빼고 이후 요소 값 더한 값 변수 선언
    2.2. 초기 합 변수와 이후 합 변수 비교
        이후 값이 크면 반환 합 변수 할당
    2.3. 이후 값은 초기 값에 할당  
  3. 반환 합 변수 반환
*/
```

## 4. 해결 / 단순화
```javascript
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let initialSum = 0;
  for (let i = 0; i < num; i++) {
    initialSum += arr[i];
  }

  let returnSum = initialSum;
  for (let i = 0; i <= arr.length - num; i++) {
    let afterSum = initialSum - arr[i] + arr[i + num];
    if (returnSum < afterSum) {
      returnSum = afterSum;
    }
    initialSum = afterSum;
  }
  return returnSum;
}
```


## 5. 수정하기
**코드 수정**    
```javascript
// Math.max 활용
function maxSubarraySum2(arr, num) {
  if (arr.length < num) return null;

  let returnSum = 0;
  for (let i = 0; i < num; i++) {
    returnSum += arr[i];
  }

  let initialSum = returnSum;
  for (let i = 0; i < arr.length - num; i++) {
    initialSum = initialSum - arr[i] + arr[i + num];
    returnSum = Math.max(returnSum, initialSum);
  }
  return returnSum;
}
```
이전 코드 `initialSum` `returnSum` 변수명 서로 변경. `initialSum`을 계산 기준값으로 사용, 2번째 반복문 `i`를 0부터 시작하여 빼기를 기준으로 계산. `returnSum`이 `initialSum` 보다 크면 값 갱신. 

## 코드
[알고리즘 코드 - maxSubarraySum.js](../../algorithm/problem/maxSubarraySum.js)