# 알고리즘 문제 : Recursion
재귀함수 기초 문제 모음

- 활용 방법   
  
  helper 매소드: 함수 내 내부함수 호출   
  순수재귀: 외부 변수 사용 X, 데이터가 중첩되어 만들어짐

- 유의사항    
  함수 자신을 반복호출    
  호출스택 쌓임   
  종료조건 필요 - 오버플로우 방지

### 1. 문제 이해하기
- **power** : `Math.pow()`의 기능 모방, 재귀함수 사용
- **factorial** :   정수와 그 아래의 모든 정수의 곱, 팩토리얼 `0(0!)`은 1이다.
- **productOfArray** : 숫자 배열을 받아 모든 숫자의 곱을 반환 (빈 배열인 경우 1)
- **recursiveRange** : 0부터 함수에 전달된 숫자까지 모든 숫자의 합 반환
- **fib** : 숫자를 받아 피보나치 수열의 n번째 숫자를 반환, 모든 수는 이전 두 수의 합과 같음



### 2. 구체적 예시
```
power(2,0) // 1
power(2,2) // 4
power(2,4) // 16

factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040

productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60

recursiveRange(6) // 21
recursiveRange(10) // 55 

fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465
```

### 3. 세분화 - 문제 수행
#### power
```javascript
/*
  첫번째 인자는 정수, 두번째 인자는 지수
  1. 두번째 인자가 0이 되면 1 반환
  2. 첫번째 인자와 두번째 인자 -1 감소한 함수 곱 반환
*/
```
#### factorial
```javascript
/*
  1. 첫번째 인자가 0이면 1반환
  2. 첫번째 인자와 -1 된 인자를 가진 함수 반환
*/
```
#### productOfArray
```javascript
/*
  1. 배열이 비었으면 1 반환
  2. 배열 첫번째 요소와 배열 첫번째 요소를 제외한 함수 곱 반환
*/
```
#### recursiveRange
```javascript
/*
  1. 인자가 0이면 0 반환
  2. 인자와 인자에서 -1한 값을 가진 함수 합 반환
*/
```
#### fib
```javascript
/*
  1. 받은 숫자가 2 이하면 1 반환
  2. 인자-2 함수와 인자-1 함수 합 반환

   (1,    1,    2,    3,    5,    8, ...)
    0     1     2     3     4     5
    1     0+1   1+1   1+2   2+3   3+5
*/
```

## 4. 해결 / 단순화
#### power
```javascript
function power(num1, num2) {
  if (num2 === 0) return 1;
  return num1 * power(num1, num2 - 1);
}
```
#### factorial
```javascript
function factorial(num) {
  if (num < 0) return 0;
  if (num === 0) return 1;
  return num * factorial(num - 1)
}
```
#### productOfArray
```javascript
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
```
#### recursiveRange
```javascript
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
```
#### fib
```javascript
function fib(num) {
  if (num === 0 || num === 1) return num;
  return fib(num - 2) + fib(num - 1);
}
```


## 5. 수정하기
**코드 수정 - fib**    
```javascript
function fib2(num) {
  if (num < 3) return 1;
  return fib(num - 2) + fib(num - 1);
}

/*
  fibSum(2) + fibSum(3)
  fibSum(0) + fibSum(1) + fibSum(1) + fibSum(2)
                                      fibSum(0) + fibSum(1)

  1 + 2             // 3
  0 + 1 + 1 + 1     // 1 + 2
              0 + 1 // 1
*/
```

처음 보는 공식이어서 막막했다. 잘 모르는 문제는 제공받은 예시를 가지고 직접 분석하는 것이 규칙을 찾는데 수월했다.     

하지만 피보나치는 어려웠다. 어떻게든 풀어보려 했지만 수가 일정한 수치만큼 증가될 뿐이었다. 규칙을 찾았어도 이게 맞는 방법인지 의아했다. `num`이 `3`이 되기 전에 `1`을 반환하고 3번째 수부터 전전 수와 이전 수를 더하는 규칙이었다. 어떻게 해야 할지 감이 오지 않았다.   

피보나치 수열이 어떤 것인지 찾아봤다. 우연히 파이썬 코드를 봤고 자바스크립트로 구현했다. 예시값과 일치했다. 다만 정답으로 나온 해결방안과 다른 점은 `num`가 `0`이거나 `1`이면 `num`을 반환했다. 

생각한 규칙은 맞았어도 `num` 인자를 어떻게 활용해야 할지 몰랐던 점이 아쉽다.

## 코드
[알고리즘 코드 - power.js](../../algorithm/problem/recursion/power.js)    
[알고리즘 코드 - factorial.js](../../algorithm/problem/recursion/factorial.js)    
[알고리즘 코드 - productOfArray.js](../../algorithm/problem/recursion/productOfArray.js)    
[알고리즘 코드 - recursiveRange.js](../../algorithm/problem/recursion/recursiveRange.js)    
[알고리즘 코드 - fib.js](../../algorithm/problem/recursion/fib.js)    