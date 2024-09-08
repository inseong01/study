# 알고리즘 문제 : binarySearch - 분할과 정복
Algorithm Problem : binarySearch - Divide And Conquer

### 1. 문제 이해하기
`binarySearch`: 정렬된 배열에서 주어진 숫자의 인덱스 반환, 없으면 -1 반환

배열은 정렬되어 있어야 한다.

시간복잡도는 `O(log n)`이어야 한다.

### 2. 구체적 예시
```
binarySearch([1, 2, 3, 5, 8, 9], 1) // 0
binarySearch([2, 4, 5, 6, 7], 0) // -1
```
	
### 3. 세분화 - 문제 수행
배열을 반으로 나눈 중간 인덱스 값을 이용한다,     
중간값이 찾는 숫자보다 크면 최댓값 내림. 작다면 최소값 올림, 반복

```javascript
/*  
    1. min, max 변수 선언
    2. 반복문, min이 max보다 같거나 작을 때까지
      2.1. 중간인덱스 변수 선언, min+max 반으로 나눈 값
      2.2. 중간값 변수 선언, arr[중간인덱스] 값
      2.3. 만약 arr[중간인덱스] 값이
          2.3.1. 찾는 숫자보다 작으면
                  max = middle - 1  // middle = 3 -> min:0 + max:2, 최대값을 낮춤
          2.3.2. 찾는 숫자보다 크면
                  min = middle + 1 // middle = 3 -> min:3 + max:5, 최소값을 높임
          2.3.3. 아니면 
                  중간인덱스 반환
    3. 못 찾으면 -1 반환
*/     
```

### 4. 해결 / 단순화
```javascript
function binarySearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const middleIdx = Math.floor((min + max) / 2);
    const middleNum = arr[middleIdx];

    if (middleNum < num) {
      min = middleIdx + 1;
    } else if (middleNum > num) {
      max = middleIdx - 1;
    } else {
      return middleIdx
    }
  }
  return -1
}
```

### 5. 다른 접근방법
#### `indexOf()`   

주어진 값과 일치하면 배열의 첫번째 요소를 반환하는 함수로 시간 복잡도는 `O(n)`이다. 배열 요소를 순회하고 일치하는 값이 없으면 `-1`을 반환한다. 배열이 정렬되어 있지 않다면 `indexOf()` 함수 사용을 고려할 수 있다. 정렬되어 있다면 시간복잡도가 낮은 이진탐색을 사용할 수 있다.



## 코드
[알고리즘 코드 - max_sum.js](../../algorithm/03max_sum.js)