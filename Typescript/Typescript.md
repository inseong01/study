# React.js

### 목표

: 자바스크립트 타입스크립드로 전환

### 공부방법

: 강좌 들으며 실습

### 학습내용

- #### 정리

  <details>
  <summary>타입스크립트란</summary>

    타입스크립트 장단점
    ---
    ### 장점    
    고정적인 변수 유형    
    실행 전 오류 알려줌   
    점진적 타입 시스템 - 자동으로 변수 타입 추론

    ### 단점    
    타이핑 양 많아짐

    타입스크립트 작동원리
    ---
    ```
    Typescript -> AST(추상 문법 트리) -> 성공 -> 타입 검사 -> JavaScript -> AST -> 바이트 코드 -> 실행
    
    Typescript -> AST(추상 문법 트리) -> 실패 -> 컴파일 종료
    ```
    ```
    js 작동원리
    JavaScript -> AST -> 바이트 코드 -> 실행
    ```

  *AST: Abstract Syntax Tree, 소스코드의 문법구조를 트리형태로 표현*

  </details>

  <details>
  <summary>타입스크립트 기본</summary>

    타입
    ---
    `string`, `number`, `array`, `object`, `tuple`, `null`, `undefined`, `boolean` ...
        
    ### 배열과 튜플
    `array` : 배열 필요할 때    
    `tuple` : 고정적인 형태 필요할 때
    
    ### 타입 오류 발생
    ```TypeScript
    // 선언한 타입과 다를 때
    let num1: number = 123;

    num1 = 'Hi'; // 오류, 
    num2.toUpperCase(); // 오류
    ```

    ### Null 예외 사항
    ```TypeScript
    // 선언한 타입과 다른데 null을 사용하고 싶을 때
    let numA: number = null; 
    // tsconfig.json - strictNullChecks: false로 설정
    ```

    ### literal 타입 선언
    ```TypeScript
    // 값을 타입으로 선언
    let strA: 'Hi' = 'Hi'; 
    let bool3: true = false; // 타입과 값이 다르면 오류
    ```

    ### object 타입 선언
    ```TypeScript
    let dog: {
      name: string;
      color: string;
    } = {
      name: '돌돌이',
      color: 'brown',
    };

    // ?
    // 선택적 항목 있으면 해당 타입, 없으면 없음, 오류 X
    let person: {
      id?: number;
      name: string;
    } = {
      name: 'Queen',
    };

    // readonly
    // 객체 값 변경 시 오류 발생
    let config: {
      readonly apiKey: string;
    } = {
      apiKey: '123qweasdzx',
    };
    config.apiKey = 'qweasdzxc123'; // 오류 발생
    ```

    ### 타입 별칭
    ```TypeScript
    // 타입 중복 생성 방지
    type person = {
      name: string;
      age: number;
      birth: string;
    };

    let person1: person = {
      name: 'Ethan',
      age: 12,
      birth: '2000.01.01',
    };
    let person2: person = {
      name: 'Evan',
      age: 10,
      birth: '2000.11.21',
    };
    ```

    ### 인덱스 시그니처
    ```TypeScript
    // 규칙적인 프로퍼티 타입 선언
    // 주의 - 객체가 비어있으면 오류 발생하지 않는다.
    type item = {
      [key: string]: string;
      // 프로퍼티 추가로 객체 비었을 때 경고
      // 선언한 value와 타입이 같아야 함
      code: string; 
    };

    let item1: item = {
      content: 'row',
      code: '1-234',
    };
    ```

  </details>

- #### 의문점
  ...

### 톺아보기
<!-- []()   -->

### 예제
<!-- []()   -->

### 사이드 프로젝트
<!-- []()   -->
