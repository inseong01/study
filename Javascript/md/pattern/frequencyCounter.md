# 알고리즘 패턴 : Anagrams - 빈도수 세기 패턴
Algorithm Problem : Anagrams - Frequency Counter Pattern

### 1. 문제 이해하기
`anagrams`    : 2개 이상의 문자열 변수를 비교하여 서로 해당하는 문자 개수 일치하는지 여부를 반환   

입력값은 소문자만 받는다.

반복문이 중접되지 않고 `O(n)`으로 동작해야 된다.

### 2. 구체적 예시
```
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
```
	
### 3. 세분화 - 문제 수행
각 변수, 더해서 구한 빈도수와 일치 비교
```javascript
/*  
  1. 문자열 길이 다르면 거짓 반환
  
  2. 문자 개수 센 객체 두 개 생성(str1, str2)
  
  3. 문자로 된 객체 키 배열 생성
  
  4. 문자 객체 비교 반복문
    4.1. str1이 str2의 문자를 포함하고 있나
    4.2. str1과 str2의 객체 키-값이 맞나

  5. 반복문 끝나면 참
*/     
```

### 4. 해결 / 단순화
```javascript
function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let char of str1) {
    const c = char.toLowerCase();
    obj1[c] = ++obj1[c] || 1; // 전위연산자로 적용해야 됨
  }
  for (let char of str2) {
    const c = char.toLowerCase();
    obj2[c] = ++obj2[c] || 1;
  }

  const obj1Arr = Object.keys(obj1);
  const obj2Arr = Object.keys(obj2);

  for (let i = 0; i < obj1Arr.length; i++) {
    if (!obj1Arr.includes(obj2Arr[i])) return false;
    if (obj1[obj1Arr[i]] !== obj2[obj1Arr[i]]) return false;
  }

  return true;
}
```

### 5. 수정하기
- **코드 수정**   
   삼항연산자로 명확한 연산으로 수정
  ```javascript
  function anagrams(str1, str2) {
    ...
    for (let char of str1) {
      obj1[char] ? obj1[char] += 1 : obj1[char] = 1;
    }
    for (let char of str2) {
      obj2[char] ? obj2[char] += 1 : obj2[char] = 1;
    }
    ...
  }
  ```

- **다른 접근 방법**    
  하나의 문자열만 빈도수 구함, 다른 문자열과 문자가 해당되면 숫자 빼서 0인지 비교
  ```javascript
  /*
    1. 문자열 길이 다르면 반환
  
    2. 문자 개수 센 객체 하나 생성(str1)
  
    3. 문자 객체 비교 반복문(str2)
      3.1. str1[str2] 값이 없으면 거짓 : undefined || 0
      3.2. str1이 str2 값의 키가 있다면 1 빼기
  
    4. 반복문 끝나면 참
  */
  ```
  ```javascript
  function anagrams2(str1, str2) {
    if (str1.length !== str2.length) return false;
  
    const obj1 = {};
  
    for (let char of str1) {
      obj1[char] ? obj1[char] += 1 : obj1[char] = 1;
    }
  
    for (let char of str2) {
      if (!obj1[char]) return false;
      obj1[char] -= 1;
    }
  
    return true;
  }
  ```

- **느낀점**    
  ```javascript
  for (let i = 0; i < obj1Arr.length; i++) {
    if (!obj1Arr.includes(obj2Arr[i])) return false;
    if (obj1[obj1Arr[i]] !== obj2[obj1Arr[i]]) return false;
  }
  ```
  조건문 안에 매서드를 적용을 했다. 다행히 `O(n^2)`은 아니고 `O(n + k^2)`이었다. 고유 문자 비교를 하면 `n^2` 아닌 `n+k^2`이었다. 상수항을 무시하는 특징으로 `O(n)`으로 통과했다. 

## 코드
[알고리즘 코드 - Anagrams.js](../../algorithm/01anagrams.js)