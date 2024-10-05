# 알고리즘 문제 : SearchAlgorithm

### 1. 문제 이해하기

값이 몇 번째에 위치하는지 인덱스 반환   
값이 배열 안에 존재하지 않으면 -1을 반환

  - **linearSearch**     
  배열과 값을 받음
  `indexOf()` 사용제한

  - **binarySearch**    
  정렬된 배열과 값을 받음

**naiveSearch**   
  두 개의 문자열 받음
  첫번째 문자열에서 두번째 문자열이 포함된 만큼의 개수 반환 

### 2. 구체적 예시
```
linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
linearSearch([100], 100) // 0
linearSearch([1,2,3,4,5], 6) // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
linearSearch([100], 200) // -1

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1

naiveSearch('abcde', 'bc') // 1
```

### 3. 세분화 - 문제 수행
```javascript
/*
  - linearSearch
  1. 배열 요소 하나씩 반복 확인
      없으면 -1
      있으면 반복한 순서 반환

  - binarySearch
  1. 배열 길이의 중간 반복 확인
    1.1.  값이 배열 요소보다 작으면 시작지점 이동
          값이 배열 요소보다 크면 끝지점 이동
    1.2.  값이 있으면 반복 횟수 반환
  2. 반복 끝나면 -1

  - naiveSearch
  'a  b  c  d  e', 'bc'
   0  1  2  3  4
   b  b  c  b  b
   x  o  o  x  x  >> 1

  1. 문자열 서로 비교
    1.1. 첫번째 문자열 요소와 두번째 문자열 첫 요소 비교
        동일하면 
          첫번째 문자열 다음 요소와 두번째 문자열 다음 요소 비교
        그렇지 않으면
          첫번째 문자열 다음 요소와 두번째 문자열 첫 요소 비교
    1.2. 두번째 문자열이 있다면 count 증가
  2. 반복문 끝나면 count 반환
*/
```

## 4. 해결 / 단순화
- **linearSearch**

    ```javascript
    function linearSearch(arr, value) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i
      }
      return -1
    }
    ```

- **binarySearch**    

  ```javascript
  function binarySearch(arr, value) {
    let i = 0;
    let start = 0;
    let end = arr.length; // index 중앙 위치를 위해 배열 길이 할당

    while (i < arr.length) {
      let idx = parseInt((start + end) / 2);

      if (arr[idx] > value) {
        end = idx;
      } else if (arr[idx] < value) {
        start = idx;
      }
      if (arr[idx] === value) return idx;
      i += 1;
    }
    return -1;
  }
  ```

- **naiveSearch**   

    ```javascript
    function naiveSearch(str1, str2) {
      let start = 0;
      let count = 0;

      for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[start]) start += 1;
        else start = 0;
        if (start === str2.length) count += 1;
      }
      return count
    }
    ```

## 5. 수정하기
**코드 수정 - naiveSearch**    
```javascript
function naiveSearch(str1, str2) {
  let count = 0;

  for (let i = 0; i <= str1.length - str2.length; i++) {
    let match = true;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        match = false;
        break;
      }
    }
    if (match) count += 1;
  }
  return count
}
```

**첫번째 for문 "<="**    

`str1`의 전체 길이가 아닌 `str2` 길이를 제외한 길이까지만 반복한다. `str1` 마지막 위치에 `str2` 문자열이 있다면 두번째 반복문에서 `str1`의 이후 길이까지 검사를 실시한다. 부등호를 할당하지 않으면 마지막 글자는 확인하지 않고 첫번째 반복문이 종료된다. 마지막 문자를 검사 허용해야 올바른 결과값을 도출할 수 있다.

**두번째 for문의 조건문 "!== {}"**    

두번째 반복문을 통과해야 온전한 `ture`를 반환한다. 변수의 의미를 지키기 위해 **math** 변수를 `false`로 선언하고 두번째 반복문의 조건문 이후에 `true`를 반환한다면 결과값은 달라진다. 두번째 반복문의 조건문 이후는 첫글자가 일치하면 실행되는 부분이다. 첫 글자만 일치하면 **count** 변수는 계속 증가한다.    

그러므로 **match** 변수는 `true`로 선언하고 두번째 반복문을 온전히 끝냈을 때 `true`를 반환하도록 한다.

**원본 코드**    

수정된 코드와 동일하게 시간복잡도는 `O(n^2)`이다. 원본 코드는 반복을 한 번만 수행 하지만 `str2` 문자열 요소를 하나씩 확인함으로 for문 중첩과 동일한 시간복잡도를 가진다.  

## 코드
[알고리즘 코드 - SearchAlgorithm.js](../../algorithm/problem/SearchAlgorithm.js)