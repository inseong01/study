# 알고리즘 패턴 : RadixSort

### 1. 문제 이해하기
  지수 정렬: `helper`, `radixSort`
  - `helper`    
    **getDigit()**: 지정한 지수자리의 값 반환   
    **digitCount()**: 요소 자릿수 반환    
    **mostDigits()**: 배열 요소들 중에서 최대 자릿수 반환   

  - `radixSort`   
    `helper` 함수를 활용하여 배열 정렬 반환

### 2. 구체적 예시
```
getDigit(23, 0) // 3
getDigit(23, 1) // 2
getDigit(23, 2) // 0

digitCount(1) // 1
digitCount(21) // 2
digitCount(321) // 3

mostDigits([1, 12, 123]) // 3
mostDigits([1, 1, 2]) // 1

radixSort([332, 21, 1, 43]) // [ 1, 21, 43, 332 ]
```

### 3. 세분화 - 문제 수행
```javascript
/*
- getDigit(num, place) : num을 부여하면 num의 place번째 자리 숫자값 반환
  num 문자열화
  num의 길이 -1 -place 값 반환

- digitCount(num) : num의 자릿수 반환
  num 문자열화
  문자열 길이 반환

- mostDigits(nums) : 숫자들의 최대 자릿수 반환
  nums 반복 순회
    digitCount 최댓값 저장
  최댓값 반환

- radixSort(nums)
  mostDigits 만큼 반복
    버킷 배열 생성
    배열 수 만큼 반복
      n번째 자릿수 비교 getDigit()
      자릿수 값이 버킷 인덱스와 같으면
        버킷에 값 삽입
    버킷 배열 원본 배열 덮어씌움
    
  원본 배열 반환
*/
```

## 4. 해결 / 단순화
**getDigit**
```javascript
function getDigit(num, place) {
  const str = String(Math.abs(num));
  const idx = str.length - 1 - place;
  return str[idx] ? str[idx] : 0;
}
```
**digitCount**
```javascript
function digitCount(num) {
  return String(Math.abs(num)).length;
}
```
**mostDigits**
```javascript
function mostDigits(nums) {
  let maxDigitCount = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    maxDigitCount = Math.max(digitCount(nums[i]), maxDigitCount);
  }
  return maxDigitCount
}
```
**radixSort**
```javascript
function radixSort(nums) {
  const maxDigitsCount = mostDigits(nums);

  for (let i = 0; i < maxDigitsCount; i++) {
    // let buckets = Array.from({ length: 10 }, () => [])
    let buckets = Array(10).fill([]).map(() => [])
    for (let j = 0; j < nums.length; j++) {
      let digitValue = getDigit(nums[j], i);
      buckets[digitValue].push(nums[j]);
    }
    nums = [].concat(...buckets)
  }

  return nums;
}
```

## 5. 수정하기
**코드 해석**
```javascript
function radixSort(nums) {
//  최대 자릿수 선언
//
//  최대 자릿수 만큼 반복
//    버킷 배열 생성(10칸)
//    숫자 배열 수 만큼 반복
//      자릿수 계산
//      해당 버킷 인덱스에 자릿수 삽입
//    숫자 배열에 버킷 배열 삽입
//
//  숫자 배열 반환
}
```
지수 정렬은 버킷이 중요하다. 자릿수와 일치하는 버킷 인덱스에 자릿수를 삽입하고 할당된 버킷 배열을 숫자 배열에 적용하는 것이 지수 정렬의 핵심이다.

**버킷 배열 생성 유의사항**
```javascript
let buckets = Array(10).fill([])
```
해당 버킷 배열은 동일 배열을 참고한다. 10개의 배열을 가지고 있지만 하나의 배열이 바뀌면 배열 전부가 동일하게 변경된다.
```javascript
let buckets = Array(10).fill([]).map(() => [])
let buckets = Array.from({ length: 10 }, () => [])
```
위 두 코드로 해당 문제를 해결할 수 있다.    
- `fill()`로 만들어진 배열을 다시 `map()`으로 각각의 배열로 할당하여 독립적인 배열을 생성한다.    
- `Array.from()`을 활용하여 독립적인 배열을 생성한다.

## 코드
[알고리즘 패턴 - radixSort.js](../../../algorithm/sort/radixSort.js)