# 알고리즘 패턴 :countUniqueValues - 다중 포인터 패턴
Algorithm Problem : countUniqueValues - Mutiple Pointers Pattern

### 1. 문제 이해하기
`countUniqueValues`    : 정렬되어 있는 `arr` 배열을 받고 중복되지 않은 값의 개수를 반환한다.

배열은 정렬되어 있다.

시간복잡도는 `O(n)`, 공간복잡도는 `O(1)`이어야 한다.

### 2. 구체적 예시
```
countUniqueValues([1, 1, 2, 3, 3, 4]) // 4
countUniqueValues([]) // 0
```
	
### 3. 세분화 - 문제 수행
`arr[i]`와 `arr[j]`를 서로 비교한다.

```javascript
/*  
  1. length가 0이면 0 반환

  2. arr 배열을 순회
      i, j 같다면 j++
      i, j 다르면 arr[i+1] = arr[j], j++
  
  3. j가 arr.length 도달했다면 
      i + 1반환
*/     
```

### 4. 해결 / 단순화
```javascript
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j += 1;
    } else {
      i += 1;
      arr[i] = arr[j];
      j += 1;
    }

    if (j === arr.length) {
      return i + 1;
    }
  }
}
```

### 5. 수정하기
- **코드 수정**   
  `while`문을 `for`문으로 변경하기

  ```javascript
  function anagrams(str1, str2) {
    ...
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i += 1;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }
  ```
  `j`변수를 `for`문으로 바꿈으로써 자동으로 `j` 값이 증가하고 불필요한 코드를 줄였다. 멀티 포인터는 반복문 중첩보다 두 개의 인덱스 변수 값으로 문제를 해결하는 것이 중점이다. 변수 개수를 두 개에서 하나로 줄일 수 있다면 전보다 깔끔한 코드가 된다.  

## 코드
[알고리즘 코드 - multiplePointer.js](../../algorithm/02multiplePointer.js)