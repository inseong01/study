# 알고리즘 문제 : isSubsequence

### 1. 문제 이해하기
두 문자열을 받아 첫 번째 문자열이 두 번째 문자열의 일부에 포함되어 있는지 `boolean` 반환    
첫 번째 문자열 요소는 두 번째 문자열에 순서대로 포함되어야 함

시간 `O(n + m)` 공간 `O(1)`

### 2. 구체적 예시
```
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
```

### 3. 세분화 - 문제 수행
```javascript
/*
  1. 기준값 선언
  2. 변동값 선언

  3. 기준값이 두 번째 문자열 - 첫 번째 문자열 길이 만큼 순회(while)
      sing  string
      0     0      
       1     123   
        2       4 
         3       5

    3.1. 첫 번째 문자열 요소와 두 번째 문자열 소요가 같으면 기준값++, 변동값++
    3.2. 첫 번째 문자열 요소와 두 번째 문자열 소요가 다르면 변동값++
    3.3. 기준값이 첫 번째 문자열 순회 완료하면 true 반환
    3.4. 변동값이 두 번째 문자열 길이를 초과하면 false 반환

  4. true 반환
*/
```

## 4. 해결 / 단순화
```javascript
function isSubsequence(str_1, str_2) {
  let standardIdx = 0;
  let idx = 0;

  while (standardIdx <= str_2.length) {
    if (str_1[standardIdx] === str_2[idx]) {
      standardIdx += 1;
      idx += 1;
    } else {
      idx += 1;
    }

    if (standardIdx === str_1.length) return true;
    if (idx > str_2.length) return false;
  }
  return false;
}
```

## 5. 수정하기
**코드 수정 1**    
```javascript
function isSubsequence2(str_1, str_2) {
  let standardIdx = 0;
  let idx = 0;

  while (idx <= str_2.length) {
    if (standardIdx === str_1.length) return true;
    if (str_1[standardIdx] === str_2[idx]) standardIdx += 1;
    idx += 1;
  }
  return false;
}
```
- **조건문 간략화**   

  `str_1` 길이와 `standardIdx` 값이 일치하지 않아 반복문 순회가 완료되었을 때 `false`를 반환   
  `str_1` `str_2` 일치하는 요소가 있다면 기준 값 증가 그렇지 않으면 변동값만 증가하도록 수정    
  조건문 `else`는 예외 조건을 설정 가능 하지만 생략함으로써 코드를 최소화.   

  처음에 `false` 조기 반환 조건을 고민하면서 문제를 간단하게 접근하는 방법을 떠올리지 못했다. 접근법을 단순하게 구상할수록 문제를 수월하게 해결할 수 있다.  

**코드 수정 2**
```javascript
function isSubsequence3(str_1, str_2) {
  if (str_1.length === 0) return true;
  if (str_2.length === 0) return false;
  if (str_1[0] === str_2[0]) {
    return isSubsequence3(str_1.slice(1), str_2.slice(1))
  }
  return isSubsequence3(str_1, str_2.slice(1))
}
```
- **재귀함수 이용**

  ```javascript
  /*
    1. 첫번째 요소 비교 같으면 str_1, str_2 잘라서 다음 요소 확인
    2. 다르면 str_2 잘라서 반환
    3. str_1 길이가 0이면 true
    4. str_2 길이가 0이면 false
  */
  ```

  첫번째 요소를 비교하는 함수 반복, 공간복잡도는 `O(n)`   
  반복이 필요하면 함수 자체를 반복 함으로써 반복문을 대체할 수 있다.

## 코드
[알고리즘 코드 - isSubsequence.js](../../algorithm/problem/isSubsequence.js)