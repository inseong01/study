# 알고리즘 문제 : NestedEvenSum

### 1. 문제 이해하기
객체에서 모든 짝수의 합계를 반환

### 2. 구체적 예시
```
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
```

### 3. 세분화 - 문제 수행
```javascript
/*
  1. 합 변수 선언

  2. 내장 함수 선언
      obj keys 변수 선언

      keys 순회
        obj[keys[i]]가 짝수면
          obj[keys[i]] 반환
        object면
          내장 함수 실행
        아니면
          배열 계속 순회
  
  3. 합 반환
*/
```

## 4. 해결 / 단순화
```javascript
function nestedEvenSum(obj) {
  let num = 0;

  function addNumber(obj) {
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
      console.log(keys, keys[i])
      if (typeof obj[keys[i]] === 'number' && obj[keys[i]] % 2 === 0) {
        num += obj[keys[i]];
      } else if (typeof obj[keys[i]] === 'object') {
        addNumber(obj[keys[i]])
      }
    }
  }
  addNumber(obj);

  return num
}
```

## 5. 수정하기
**코드 수정**    
```javascript
function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

/*
  1. 객체 순회
    객체면
      합 변수에 재귀함수 할당
    짝수면
      값을 합 변수에 할당
      
  2. 합 변수 반환
*/
```
수정된 함수는 인자로 `sum` 기본값을 `0`으로 받는다. `sum` 변수를 외부 변수로 선언하지 않아도 된다. `sum` 변수는 재귀함수를 복합 대입 연산자로 할당 받고 있다. 객체 값이 조건에 일치하면 짝수는 `sum` 변수로 대입된다. 

대입 연산자로 함수를 할당할 수 있다.

## 코드
[재귀 함수 - nestedEvenSum.js](../../../algorithm/problem/recursion/problem/nestedEvenSum.js)