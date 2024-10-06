# 알고리즘 패턴 : maxSum - 슬라이딩 윈도우
Algorithm Problem : maxSum - Sliding Window Pattern

### 1. 문제 이해하기
`maxSum`: 주어진 배열에서 두번째로 주어진 값 만큼 배열 요소 순서대로 계산한 값이 가장 큰 숫자를 구한다.

배열과 숫자, 총 2개의 인자가 주어진다.

시간복잡도는 `O(n)`이어야 한다.

### 2. 구체적 예시
```
getMaxSum([1, 1, 2, 3, 3, 4], 3) // 10
getMaxSum([], 2) // null
```
	
### 3. 세분화 - 문제 수행
첫 번째 합에서 다음 배열 요소를 더하고 이전 요소는 빼면서 비교.

```javascript
/*  
      1. 합, 최댓값 변수 선언
      2. 첫 합 구하기 (반복문)
            2.1. 첫 합, 합 변수에 저장
            2.2. 첫 합, 최댓값 할당
      3. 임시변수 선언
      4. 이전 값과 임시변수 크기 비교 (반복문)
            4.1. 첫번째 이후 제외된 값 빼고 새로운 값 더한 숫자 계산
            4.2. 최댓값과 이후 값 비교, 최댓값 저장

            [1, 2, 3, 4, 5], 2
              -     +
            0+1, 0-(1)+2, 1-(2)+3, 2-(3)+4

      5. 최대값 반환     
*/     
```

### 4. 해결 / 단순화
```javascript
function getMaxSum(arr, number) {
  let sum = 0;
  let max = 0;

  if (arr.length < number) return null;

  for (let i = 0; i < number; i++) {
    sum += arr[i];
    max = sum;
  }
  let temp = sum;
  for (let j = 0; j < arr.length - number; j++) {
    temp = temp - arr[j] + arr[j + number];
    max = Math.max(max, temp)
  }

  return max
}
```

### 5. 수정하기
- **코드 수정**   
  `for문` 인덱스 `number`부터 시작 `+` 우선, 이전 코드는 0부터 시작 `-` 우선

  ```javascript
  function getMaxSumRe(arr, number) {
    let tempSum = 0;
    let maxSum = 0;

    if (arr.length < number) return null;

    for (let i = 0; i < number; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let j = number; j < arr.length; j++) {
      tempSum = tempSum + arr[j] - arr[j - number];
      maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum
  }
  ```
  변수명을 확실하게 하여 어떤 값을 가지고 있는지 알 수 있다. 이전 코드는 변수를 3개를 사용했는데 개선한 코드는 처음부터 첫 합을 계산한 변수를 최댓값으로 지정하여 변수를 2개로 줄였다.    
  
  변수의 초기 값을 다른 변수도 해당 변수의 초기값을 요구할 때 두 변수를 하나로 통합하는 것을 고려할 수 있다.  

- **다른 접근방법**   

  `for문 중첩`    
  : 배열 요소 하나씩 순회, 문제해결 가능하지만 시간복잡도가 좋지 않다. `O(n^2)`

## 코드
[알고리즘 코드 - max_sum.js](../../algorithm/03max_sum.js)