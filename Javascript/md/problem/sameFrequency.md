# 알고리즘 문제 : SameFrequency

### 1. 문제 이해하기
두 개의 양의 정수가 서로 같은 자릿수 인지 참/거짓 반환

### 2. 구체적 예시
```
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
```

### 3. 세분화 - 문제 수행
```javascript
/*
  1. length가 다르면 false 반환
  2. 객체 생성, 자릿수 프로퍼티 빈도수 계산 (반복문)
  3. 객체 프로퍼티 서로 비교 (반복문)
    3.1 서로 길이 다르면 false 반환
  4. true 반환
*/
```

## 4. 해결 / 단순화
```javascript
function sameFrequency(num1, num2) {
  const firstNum = String(num1);
  const secondNum = String(num2);

  const firstObj = {};
  const secondObj = {};

  for (let key of firstNum) {
    firstObj[key] = ++firstObj[key] || 1;
  }
  for (let key of secondNum) {
    secondObj[key] = ++secondObj[key] || 1;
  }

  for (let key in firstObj) {
    if (firstObj[key] !== secondObj[key]) return false;
  }
  return true;
}
```

## 5. 수정하기
**알게 된 점**    

`for of`: 배열, 문자, 반복가능한 객체에 사용 가능   

*object는 `for in`으로 반복 가능, `for of` 불가*

## 코드
[알고리즘 코드 - sameFrequency.js](../../algorithm/problem/sameFrequency.js)