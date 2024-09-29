# 알고리즘 문제 : CapitalizeWords

### 1. 문제 이해하기
단어 배열 받음    
각 단어가 대문자로 표시된 새 배열을 반환

### 2. 구체적 예시
```
capitalizeWords(['abc', 'def', 'ghi']) // [ 'ABC', 'DEF', 'GHI' ]
```

### 3. 세분화 - 문제 수행
```javascript
/*
 capitalizeFirst 문제 유사

  1. 내부함수 O
    변형 배열 저장 변수 선언  

    내부함수 선언
      배열 없으면 반환
      문자 변형, 변형 배열 변수에 추가
      내부함수 선언, 인자 배열 줄어듦

    변형 배열 변수 반환

  2. 내부함수 X
    배열 길이 1일 때 변형 문자 반환

    재귀함수 선언, 인자 배열 줄어듦, 배열로 반환, flat() 사용 
*/
```

## 4. 해결 / 단순화
**방법 1**
```javascript
function capitalizeWords(arr) {
  const capitalizeWordsArr = [];

  function getCaptializeWords(arr) {
    if (arr.length < 1) return;
    capitalizeWordsArr.push(arr[0].toUpperCase());
    getCaptializeWords(arr.slice(1));
  }
  getCaptializeWords(arr)

  return capitalizeWordsArr;
}
```
**방법 2**
```javascript
function capitalizeWords(arr) {
  if (arr.length < 2) return arr[0].toUpperCase();
  return [arr[0].toUpperCase(), capitalizeWords(arr.slice(1))].flat();
}
```

## 5. 수정하기
**코드 수정**    
```javascript
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}
```
`capitalizeFirst` 문제에서 문자가 아닌 문자열 전체를 대문자로 변형하고 `res` 변수에 배열 요소로 추가한다.

## 코드
[재귀 함수 - capitalizeWords.js](../../../algorithm/problem/recursion/problem/capitalizeWords.js)