# 알고리즘 문제 : Reverse

### 1. 문제 이해하기
역순 문자열을 반환

### 2. 구체적 예시
```
reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'
```

### 3. 세분화 - 문제 수행
```javascript
/*
  helper 함수 사용

  0. 반환 배열 변수 선언

  1. 내부 함수 사용
    문자열 길이 만큼 반복
    반복 횟수 0이면 반환
    외부 변수에 뒷글자 push

  2. 변수 문자열화 후 반환

*/
```

## 4. 해결 / 단순화
```javascript
function reverse(str) {
  const reverseArr = []

  function getReverseArr(str, count) {
    if (count < 0) return;
    reverseArr.push(str[count]);
    getReverseArr(str, count - 1);
  }

  getReverseArr(str, str.length - 1);

  return reverseArr.join('');
}
```

## 5. 수정하기
**코드 수정**    
```javascript
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

/*
  reverse('awesome') // 'emosewa'

  return 'wesome' + 'a'
    return 'esome' + 'w'
      return 'some' + 'e'
        return 'ome' + 's'
          return 'me' + 'o'
            return 'e' + 'm'
              return '' + 'e'

*/
```
재귀함수의 본질을 어느정도 알고 있다고 생각했다. 재귀함수는 `for문`과 다르게 반복횟수가 아닌 조건에 따라 반복을 종료한다. 종료된 시점부터 반환이 시작된다. 반복이란 개념은 알고 있었지만 종료된 시점으로부터 반환된다는 재귀함수의 본질은 모르고 있었다.

재귀함수는 `후입선출(LIFO)` 방식이었다.

## 코드
[재귀 함수 - reverse.js](../../../algorithm/problem/recursion/problem/reverse.js)