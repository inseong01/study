# 알고리즘 문제 : CollectStrings

### 1. 문제 이해하기
객체 받음   
문자열에 해당하는 객체의 모든 값을 배열로 반환

### 2. 구체적 예시
```
const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

collectStrings(obj) // (["foo", "bar", "baz"])
```

### 3. 세분화 - 문제 수행
```javascript
/*
  1. 빈 배열 선언

  2. 내부 함수 선언
    obj의 key 배열 keys 변수 선언

    keys 순회
      obj[key]가 문자열이면
        빈 배열에 추가
      객체면
        내부 함수 실행
      아니면
        순회
  
  3. 배열 변수 반환
*/
```

## 4. 해결 / 단순화
```javascript
function collectStrings(obj) {
  const strArr = [];

  function addString(obj) {
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
      if (typeof obj[keys[i]] === 'string') {
        strArr.push(obj[keys[i]]);
      } else if (typeof obj[keys[i]] === 'object') {
        addString(obj[keys[i]]);
      }
    }
  }
  addString(obj);

  return strArr;
}
```


## 5. 수정하기
**코드 수정**    
```javascript
function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}
```
순수 재귀 함수 코드다. 순회, 조건문 일치하지만 하나의 배열을 사용하는 점에서 다르다. 객체 값이 문자열이면 배열에 추가한다. 객체 타입이면 배열과 합치는데 합쳐지는 요소가 재귀함수다. 

어떤 메소드든 반환값이 있는 함수면 함수도 인자로 할당할 수 있다.

## 코드
[재귀 함수 - collectStrings.js](../../../algorithm/problem/recursion/problem/collectStrings.js)