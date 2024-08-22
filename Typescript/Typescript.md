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

  *`AST`: Abstract Syntax Tree, 소스코드의 문법구조를 트리형태로 표현*

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

    ### 여러 타입
    - ### enum
      컴파일 하면 다른 타입과 다르게 사라지지 않음
      ```TypeScript
      enum Number {
        ONE, // 할당하지 않으면 0
        TWO,
        THREE,
      }

      let number1 = {
        one: Number.ONE, // 0
        two: Number.TWO, // 1
        three: Number.THREE, // 2
      };
      ```

    - ### any
      특정 변수의 타입을 모를 때    
      *주의 - 런타임으로만 오류확인 가능*
      ```TypeScript
      let anyVar: any = 15;
      anyVar = 'Hi';
      anyVar = () => {};
      // anyVar.toUpperCase(); // 런타임 에러
      ```
    
    - ### unknown
      값 형태를 사용하고자 할 때
      ```TypeScript
      let unknownVar: unknown;
      unknownVar = 'abc';
      // unknownVar.toUpperCase(); // 값 변환 에러

      let num1: number = 2;
      unknownVar = 5;
      // num1 = unknownVar; // 할당 에러
      ```

    - ### void
      반환 값 없음(= undefined)
      ```TypeScript
      function func1(): void {
        console.log('void');
        // return 1; // 반환값이 있을 때 오류
      }
      ```

    - ### never
      값을 반환하지 않거나 예외를 던짐
      ```TypeScript
      let a: never;
      
      /* 에러 */
      // a = 1;
      // a = '';
      // a = () => {};
      // a = undefined;
      ```
  </details>

  <details>
  <summary>타입스크립트 이해</summary>

    타입스크립트 계층
    ---
    ![](./md/img/타입계층도.png)
    ### 타입
    슈퍼타입: 자식 기준 상위 - 부모    

    서브타입: 부모 기준 하위 - 자식    

    ### 캐스팅
    `업캐스팅`: 하위 타입을 상위 타입으로 변환, 자식 > 부모    
    `다운캐스팅`: 상위 타입을 하위 타입으로 변환, 부모 > 자식   

    *다운캐스팅 - 대부분 상황에 타입 변환 안 됨*   
    *업캐스팅 - 대부분 상황 타입 변환 됨*
    ### 
    ```TypeScript
    function Fn() {
      let a: unknown = 1;
      let child_a: number = 2;

      a = child_a; // 자식 -> 부모, 업캐스팅
      // child_a = a; // number -> unknown 타입 변환 오류
    }
    ```
    *`void`, `any` 타입은 다운 캐스팅 가능하다*

    객체 타입 호환
    --
    조건, 프로퍼티가 적은 객체가 슈퍼타입
    ```TypeScript
    type Book = { // 슈퍼타입
      name: string;
      price: number;
    };
    type SmallBook = { // 서브타입
      name: string;
      price: number;
      page: number;
    };

    let book1: Book;
    let book2: SmallBook = {
      name: 'QQQ',
      price: 10000,
      page: 200,
    };

    book1 = book2;
    // book2 = book1; // 부모 -> 자식 타입 변환 오류
    ```

    ### 프로퍼티 초과 검사
    정의된 객체 타입에서 프로퍼티가 추가되면 오류 발생
    ```TypeScript
    let book3: Book = {
      name: 'TQQQ',
      price: 3000,
      // page: 100 // Book의 프로퍼티 초과 오류
    };
    ```

    대수
    --
    ```TypeScript
    type Animal = {...};
    type Food = {...};
    
    // 합집합
    type Or = Animal | Food; // 둘 중 한 객체타입 이상 만족
    // 교집합
    type Both = Animal & Food; // 모든 객체타입 만족
    ```

    객체타입 추론
    --
    ### let
    할당한 값의 타입으로 추론된다.
    ```TypeScript
    let a = 1; // a: number
    let b = 'b'; // b: string
    ```
    ### any
    할당하지 않으면 `any`, 값의 타입이 바뀔 때마다 변경된다.
    ```TypeScript
    let e; // e: any
    e = 7;
    e.toFixed(); // e: number
    e = 'string';
    e.toUpperCase(); // e: string
    ```
    ### const
    `literal` 타입으로 추론되는 경우 있음
    ```TypeScript    
    const c = 2; // c: 2
    const d = 'd'; // d: "d"
    const isTrue = true; // isTrue: true
    ```
    그 외 경우
    ```TypeScript
    const arr = [1, 'string']; // arr: (number | string)[]
    const obj = { key: 'value' }; // obj: { key: "value" }
    const fn = () => {}; // fn: void
    ```

    타입 단언
    --
    `A as B` : A가 B의 슈퍼타입 또는 A가 B의 서브타입
    ```TypeScript
    type Person = {
      name: string;
      age: number;
    };

    // 초기 타입 설정1 (프로퍼티 추가 X)
    let person1 = {} as Person;
    person1.name = 'Ronn';
    person1.age = 12;

    // 초기 타입 설정2 (프로퍼티 추가 O)
    let person2 = {
      name: 'Lee',
      age: 22,
      country: 'KO',
    } as Person;
    ```

    ### const 단언
    ```TypeScript
    // literal 타입 선언
    let num1 = 20 as const; // num1: 20

    // readonly 선언
    let config = {
      id: 'qwee123',
      pwd: 'qqqwwweee222',
    } as const;
    // config.id = 'ddddddddd' // 값 변경불가 오류
    ```
    ### Non Null 단언
    `!`를 사용하여 `undefined`, `null`이 아님을 의미    
    *`?`: 값 유무 미정을 의미*

    타입 좁히기
    --
    조건을 이용하여 타입 선택
    ```TypeScript
    type Person = {
      name: string;
      age: number;
    };

    function func(value: number | string | Person) {
      if (typeof value === 'number') {
        console.log(value.toFixed()); // value: number
      } else if (typeof value === 'string') {
        console.log(value.toUpperCase()); // value: string
      } else if (value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`); // value: Person
      }
    }
    ```

    서로소 유니온 타입
    --
    교집합 타입 없음, 특정 속성 기준으로 구분    
    `?`, `!` 연산자를 사용하지 않게 해줌으로써 타입 좁히기 수월
    ```TypeScript
    type Admin = {
      tag: 'ADMIN';
      name: string;
      kickout: number;
    };
    type Member = {
      tag: 'MEMBER';
      name: string;
      point: number;
    };
    type Guest = {
      tag: 'GUEST';
      name: string;
      visitCount: number;
    };
    type User = Admin | Member | Guest;

    function login(value: User) {
      switch (value.tag) {
        case 'ADMIN':
          console.log(`현재까지 ${value.kickout}명 추방했습니다.`); 
          // value: Admin
          break;
        case 'MEMBER':
          console.log(`현재까지 ${value.point}포인트를 모았습니다.`); 
          // value: Member
          break;
        case 'GUEST':
          console.log(`현재까지 ${value.visitCount}번 방문했습니다.`); 
          // value: Guest
          break;
      }
    }

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
