minSubArrayLen
# 알고리즘 문제 : MinSubArrayLen

### 1. 문제 이해하기
배열, 양의 정수 인자를 받음    
배열의 요소 합이 정수보다 크거나 같은 배열 요소의 길이 반환   
배열에서 가장 인접한 요소 합의 길이를 반환   
합이 정수보다 작은 경우 0 반환    

시간 `O(n)` 공간 `O(1)`   

### 2. 구체적 예시
```
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
```

### 3. 세분화 - 문제 수행
```javascript
/*
  1. total, start, end, minLen 변수 초기화.
  2. start 변수가 배열의 길이보다 클 때까지 반복.
      2.1. total 합이 sum보다 작고 end가 배열의 길이보다 작으면, end를 오른쪽으로 이동, total에 값을 더함.
      2.2. total 합이 sum과 같거나 크면, end - start 뺀 minLen을 구하고 start를 오른쪽으로 이동, total에서 값을 뺌.
      2.3. total 합이 sum보다 작고 end가 배열의 끝에 도달하면 반복 종료.
  3. minLen이 Infinity인 경우 0을 반환하고, 그렇지 않으면 minLen을 반환.
*/
```

## 4. 해결 / 단순화
```javascript
function minSubArrayLen(arr, num) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < num && end < arr.length) {
      total += arr[end];
      end += 1;
    } else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start += 1;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
```

## 5. 수정하기
**문제 분석**

```javascript
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2
/*
     ([2, 3, 1, 2, 4, 3], 7)

total  2  5  6  8  6  9  6  9  8  2  5     
start  0  0  0  0  1  1  2  2  3  4  5
end    1  2  3  4  4  5  5  6  6  6  6
minLen          4        3     3  2  
*/
```

```javascript
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 
/*
     ([2, 1, 6, 5, 4], 9)

total  2  3  9  7  12 11 5  9  4
start        0  1  1  2  3  3  4
end    1  2  3  3  4  4  4  5  5
minLen          3     3  2     2
*/
```
"인접한 하위 배열" 의미를 이해하지 못했다. 모든 배열 요소를 더해서 부여받은 정수와 가장 인접한 배열 요소의 합이 되는 요소 개수를 찾는 것으로 이해했다. 그러면 시간복잡도 `O(n)`을 충족할 수 없었다.   

해결방안을 보고 문제를 이해했다. 총합이 부여받은 정수보다 작으면 `end` 인덱스를 증가하고 정수보다 크면 `start` 인덱스를 증가해서 해결하는 방법이었다. `start` `end` 변수는 윈도우의 크기를 유동적으로 조절하여 정수의 크기에 맞춰 움직인다. `minLen` 변수는 `start` 변수가 증가할 때 배열의 최소 길이를 할당 받는다.    

`end` 인덱스 크기가 `arr` 길이보다 크고 `total`이 `num`보다 작다면 반목문은 끝난다. `minLen` 변수가 변하지 않고 계속 `Infinity` 였다면 충족되는 수가 없었음으로 `0`을 반환한다. 한번이라도 충족되었다면 `minLen` 값을 반환한다.

*`Infinity` : `Math.min()` 비교를 위해 최댓값으로 선언*

## 코드
[알고리즘 코드 - minSubArrayLen.js](../../algorithm/problem/(re)minSubArrayLen.js)