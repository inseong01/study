# 알고리즘 문제 : FindLongestSubstring

### 1. 문제 이해하기
중복되는 문자없이 고유한 문자만 포함되어 있는 문자열 길이 반환

시간 `O(n)`

### 2. 구체적 예시
```
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
```

### 3. 세분화 - 문제 수행
```javascript
/*
  1. 문자열 없다면 0 반환
  2. start, end, obj, maxLen 초기화
  3. start가 str.length 이하면 반복
    3.1. obj[str[end]] 없고 end가 str.length 이하면
      obj 저장, end+=1
    3.2. obj[str[end]] 있고 end가 str.length 이하면 
      maxLen 할당, start+=1, end=start
    3.3. end가 str.length 초과하면
      maxLen 할당, 반복종료
  4. maxLen 반환

  예)  "r i t h m s c h o o l"
        0 1 2 3 4 5 6
          0 1 2 3 4 5 
            0 1 2 3 4 
              0 1 2 3 
                0 1 2 3 4
                  0 1 3 4 
                    0 1 2 
                      0 1
                        0
                          0 1
*/
```

## 4. 해결 / 단순화
```javascript
function findLongestSubstring(str) {
  let start = 0;
  let end = 0;
  let maxLen = 0;
  let obj = {};

  if (str === '') return 0;

  while (start < str.length) {
    if (!obj[str[end]] && end < str.length) {
      obj[str[end]] = 1;
      end += 1;
    } else if (end < str.length) {
      maxLen = Math.max(maxLen, end - start);
      start += 1;
      end = start;
      obj = {};
    } else {
      maxLen = Math.max(maxLen, end - start);
      break;
    }
  }

  return maxLen;
}
```

## 5. 수정하기
**다른 해결방법**
```javascript
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}
```    
```javascript
// 코드 분석
//            'r  i  t  h  m  s  c  h  o  o  l'
//  i          0  1  2  3  4  5  6  7  8  9  10
//  char       r  i  t  h  m  s  c  h  o  o  l
//  start      0  0  0  0  0  0  0  7     9    
//  longest    1  2  3  4  5  6  7  7  7  7  7
//  seen[char] 1  2  3  4  5  6  7  8  9  10 11
```
`for`문으로 배열 한 번만 순회한다. `seen`으로 명명한 `obj`를 사용하여 중복된 키을 확인하면서 값 또한 사용한다. 배열을 순회하면서 새로운 문자면 `seen` 변수에 `key`로 저장하고 `index`를 `value`로 저장한다. 순회할 때마다 고유한 문자열 길이 `longest` 변수를 최신화 한다.    

중복된 문자를 만나면 `seen[char]` 변수에 저장해놓은 값을 `start` 변수에 할당한다. 이후 다시 순회하면서 `Math.max()` 함수가 이전 문자열 길이와 비교하여 가장 긴 문자열을 선별한다.   

이런 생각을 어떻게 하는 지..

## 코드
[알고리즘 코드 - findLongestSubstring.js](../../algorithm/problem/(re)findLongestSubstring.js.js)