# 알고리즘 문제 : StringifyNumbers

### 1. 문제 이해하기
객체를 받아 숫자인 모든 값을 문자열로 변환

### 2. 구체적 예시
```
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj)

{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
```

### 3. 세분화 - 문제 수행
```javascript
/*
  1. obj의 keys 선언 (num, test, data)

  2. keys 순회
    obj[keys]가 숫자면 문자화
    오브젝트면 재귀함수 실행
    아니면 다음 요소 순회

  3. obj 반환
*/
```

## 4. 해결 / 단순화
```javascript
function stringifyNumbers(obj) {
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === 'number') {
      obj[keys[i]] = String(obj[keys[i]]);
    } else if (typeof obj[keys[i]] === 'object') {
      stringifyNumbers(obj[keys[i]]);
    }
  }

  return obj
}
```


## 5. 수정하기
**코드 수정**    
```javascript
function stringifyNumbers2(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers2(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
```
계속 하나의 테스트에서 실패가 떴다. `Expected ‘1’ to be 1.` 문자열이 숫자가 되어야 했다. 말도 안 되는 소리인줄 알았지만 이전 코드는 배열 요소도 숫자면 문자열로 변환했다. 객체일 때 배열인지도 확인하는 조건을 추가했다. 

그래도 실패가 떴다. 새로운 객체로 반환하지 않아서 인지, 변환된 원래 객체를 반환하면 실패였다. 문제 조건을 자세하게 덧붙여 줬으면 좋겠다.

## 코드
[재귀 함수 - stringifyNumbers.js](../../../algorithm/problem/recursion/problem/stringifyNumbers.js)