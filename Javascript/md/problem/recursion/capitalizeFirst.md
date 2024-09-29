# 알고리즘 문제 : CapitalizeFirst

### 1. 문제 이해하기
문자열 배열이 주어짐    
문자열의 첫글자 대문자 변환   
변환된 문자열 배열 반환

### 2. 구체적 예시
```
capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
```

### 3. 세분화 - 문제 수행
```javascript
/*
  ['car','taco','banana']
    0     1      2

  1. 내장 함수 활용
    변형된 배열 저장 변수 선언

    배열 요소 하나씩 받는 내부 함수
      첫번째 문자 대문자화 + 첫번째 이후 문자열, 배열 변수에 추가

   변형된 배열 저장 변수 반환

  2. 순수 재귀 함수
    배열 첫번째 요소 문자 변형 변수 선언

    문자열 길이가 1이하면 변형 변수 반환

    변형 변수, 재귀 함수 배열로 반환
*/
```

## 4. 해결 / 단순화
**방법 1**
```javascript
function capitalizeFirst1(arr) {
  const upperCaseArr = [];

  function getUpperCaseArr(arr) {
    if (arr.length < 1) return;
    upperCaseArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    getUpperCaseArr(arr.slice(1))
  }
  getUpperCaseArr(arr)

  return upperCaseArr
}
```
**방법 2**
```javascript
function capitalizeFirst2(arr) {
  const upperCaseStr = arr[0][0].toUpperCase() + arr[0].slice(1);
  if (arr.length < 2) return upperCaseStr;
  return [upperCaseStr, capitalizeFirst2(arr.slice(1))].flat(); 
}
```

## 5. 수정하기
**코드 수정**    
```javascript
function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }

  const res = capitalizeFirst(array.slice(0, -1));
  const string = 
    array.slice(array.length - 1)[0][0].toUpperCase() 
    + array.slice(array.length - 1)[0].substr(1);
  res.push(string);

  return res;
}

/*
  ["abc", "def"]

  res = capitalizeFirst(array.slice(0, -1))
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  string = 
    array.slice(array.length - 1)[0][0].toUpperCase() 
    + array.slice(array.length - 1)[0].substr(1);
  res.push(string);

  return res;

  res = capitalizeFirst(["abc"])
      return ["A" + "bc"];
  string = 
    array.slice(2 - 1)[0][0].toUpperCase() 
    + array.slice(2 - 1)[0].substr(1);
  res.push("Def");

  return ["Abc", "Def"]
*/
```
배열 길이가 `1`이 되면 배열의 첫번째 요소를 첫 문자를 대문자로 변형하고 배열 요소로 반환한다. 첫 실행 때 배열 길이가 `1`이 아니면 `capitalizeFirst3` 함수를 실행한다. `capitalizeFirst3` 함수는 부여받은 초기 배열에서 맨 뒤 요소가 사라진 새로운 배열을 인자로 받는다. `res` 변수는 초기 `array`의 첫번째 문자열이 첫글자만 대문자로 변형된 문자열이 할당된다. `string` 변수는 초기 `array` 인자에서 첫번째 이후 요소를 변환시키고 `res` 변수에 배열 요소로 추가된다. 마지막으로 `res` 배열을 반환한다.    

해결방안으로 나온 코드는 해석하기 어렵다. 한 번에 이해하면 좋겠지만 코드가 어렵다.

## 코드
[재귀 함수 - capitalizeFirst.js](../../../algorithm/problem/recursion/problem/capitalizeFirst.js)