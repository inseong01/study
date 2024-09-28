# 알고리즘 문제 : IsPalindrome

### 1. 문제 이해하기
앞으로 읽으나 뒤로 읽으나 동일한 문자인 경우 `true` 반환    
아니면 `false` 반환

### 2. 구체적 예시
```
isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false
```

### 3. 세분화 - 문제 수행
```javascript
/*
  문자열을 반으로 나누어 뒷 문자열을 뒤집어 앞 문자열과 비교

  1. 끝나는 지점 인덱스 변수 선언
  2. 뒤집힌 배열 변수 선언

  3. 내부함수 이용
    인덱스 만큼 뒤집힌 문자열 반환

  4. 문자열 길이 비교
    짝수면
      인덱스 포함하지 않고 비교 boolean 반환
    홀수면
      인덱스까지 포함해서 비교 boolean 반환
*/
```

## 4. 해결 / 단순화
```javascript
function isPalindrome(str) {
  const endPoint = parseInt(str.length / 2);
  const reverseArr = [];

  function getReverseArr(str, idx, endPoint) {
    if (endPoint > idx) return;
    reverseArr.push(str[idx]);
    getReverseArr(str, idx - 1, endPoint);
  }

  if (str.length % 2 === 0) {
    getReverseArr(str, str.length - 1, endPoint);
    return str.slice(0, endPoint) === reverseArr.join('') ? true : false;
  } else {
    getReverseArr(str, str.length, endPoint);
    return str.slice(0, endPoint + 1) === reverseArr.join('') ? true : false;
  }
}
```

## 5. 수정하기
**코드 수정**    
```javascript
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false;
}
```
이전 코드는 reverse 문제에서 영감을 받고 설계했다. 비교 문자열을 만들고 원본 문자열을 반으로 나눠 비교한다.

수정된 코드는 문자 홀짝 예외 처리를 선언하고 앞, 뒤 문자가 일치하는 지 문자열을 줄여가며 반복 비교한다. 배열을 생성하는 점과, 문자열을 줄여가며 하나씩 비교하는 점이 이전 코드와 다르다.

`slice()` 음수 처리를 어떻게 하는지 복습해야겠다. 

## 코드
[재귀 함수 - isPalindrome.js](../../../algorithm/problem/recursion/problem/isPalindrome.js)