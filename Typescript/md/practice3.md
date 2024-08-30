# JS 함수 -> TS 전환
JS function -> TS Migration

## 문제해결
### 1. its value is never read.
```TypeScript
const numbers = Array(45).fill(0).map((e, i) => i + 1); // Error, 'e' value is never read.
```
`_` 컴파일 할 때 사용하지 않는 인자로 식별한다. 다음 인자를 사용하고 그 전 인자는 사용하지 않을 때 오류를 방지하기 위해 매개변수명을 `_`로 변경한다.

### 2. `void` 함수 뒤에는 `Element` 타입을 선언할 수 없다.
```TypeScript
document.querySelector('#num-1').addEventListener('click', onClickNumber) as HTMLButtonElement; 
// Error, Conversion of type 'void' to type 'HTMLButtonElement' may be a mistake
```
`querySelector`를 변수로 선언하고 함수를 추가해서 사용하거나 `querySelector`가 빈 값이 아니란 것을 보장하면 오류 없이 사용할 수 있다.

*`!` 사용 시 주의사항 - 해당 값이 실제로 `null` `undefined`가 아니어야 한다*

### 3. `parseInt()` `Number()` 차이점
- `Number()`    
  소수점 17자리 이하까지 숫자형으로 표현한다. 

- `parseInt()`   
  parseInt는 정수 값을 반환한다. 

  첫번째 인자는 변형할 값이고 두번째 인자는 변형을 적용할 값의 진수다. 두번째 인자는  첫번째 인자 값에 따라 기본값이 결정된다. 

  *두번째 인자 기본값, 10진수 아님*

  참고자료: [Number - mozilla](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number), [ParseInt - mozilla](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

### 4. 구조분해할당은 값 추출이 중점이다.
```TypeScript
let state = { num: 0 } 
let { num } = state;
```
`state` 생략해서 프로퍼티 값 `num`을 읽을 수 있지만 `num1=10`을 바로 할당할 수 없다.  

```TypeScript
num = 10; // num은 10이지만 state.num: 0이다
state = { num }; // state.num = 10
```
새롭게 할당한 값을 `state` 객체한테 덮어 씌워야 값이 변경된다. 처음에 `state` 객체를 `const`로 선언한 경우는 값을 할당할 수 없는 방법이다. 구조분해할당은 데이터 갱신 수단으로 까다롭다.

## 코드
[1. 로또 추첨기 - app.ts](../practice/jsMigration/3/src/app.ts)    
[2. 계산기 - app.ts](../practice/jsMigration/4/src/app.ts)   
[3. 쿵쿵따 - app.ts](../practice/jsMigration/5/src/app.ts)   
[4. 반응속도 - app.ts](../practice/jsMigration/6/src/app.ts)   