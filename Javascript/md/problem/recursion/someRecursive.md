# 알고리즘 문제 : SomeRecursive

### 1. 문제 이해하기
배열과 콜백을 인자로 받음   
배열의 단일 값이 콜백에 전달될 때 `true`를 반환하면 `true`를 반환   
하나라도 `true`면 `true`, 아니면 `false`    
콜백은 달라질 수 있음   

### 2. 구체적 예시
```
SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0

someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], isOdd) // false
someRecursive([4,6,8], val => val > 10) // false
```

### 3. 세분화 - 문제 수행
```javascript
/*
  1. 콜백 함수, 배열 요소 하나씩 전달 - 하나라도 true가 나오면 반환

  2. 배열 길이 만큼 반복
*/
```

## 4. 해결 / 단순화
```javascript
function someRecursive(arr, callback) {
  if (arr.length < 1) return false;
  return callback(arr[0]) ? true : someRecursive(arr.slice(1), callback)
}
```

## 5. 수정하기
...

## 코드
[재귀 함수 - someRecursive.js](../../../algorithm/problem/recursion/problem/someRecursive.js)