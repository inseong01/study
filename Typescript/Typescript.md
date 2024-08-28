# TypeScript

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
      컴파일 하면 다른 타입과 다르게 js 파일에 남아있음
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
  <details>
  <summary>함수와 타입</summary>

  함수 타입    
  --
  ### 함수 선언식
  매개변수 기본 타입 설정, 반환타입은 자동추론    
  ```TypeScript
  function fn1(num1: number, num2: number) {
    return num1 + num2; // fn1: number
  }
  ```

  ### 함수 표현식
  ```TypeScript
  const fn2 = (num1: number, num2: number) => {};
  ```

  ### 함수 매개변수 나머지
  ```TypeScript
  // 나머지: 배열 타입
  const fn3 = (...rest: number[]) => {}; 

  // 나머지 개수 제한: 튜플 타입
  const fn4 = (...rest: [number, number]) => {};
  ```

  ### 함수 선택적 매개변수
  선택적 매개변수는 끝에 배치   
  *`?`: 선택적 매개변수화*    
  
  ```TypeScript
  function fn5(str1: string, str3: string, str2?: string) {
    console.log(str2.toUpperCase); // Error, str2: undefined | string

    if (typeof str2 === 'string') {
      console.log(str2.toUpperCase); // str2: string, 타입 좁히기
    }
  }
  ```

  함수 타입 표현식
  --
  함수 타입을 타입 별칭과 함께 별도 정의    
  ```TypeScript
  type Operation = (a: number, b: number) => number;
  const add: Operation = (a, b) => a + b;

  // 함수 타입 표현식 풀어서 표현 ( add와 같음 )
  const sub: (a: number, b: number) => number = (a, b) => a + b;
  ```
  ### 함수 시그니처

  ```TypeScript
  type Operation2 = {
    (a: number, b: number): number;
    name: string;
  };

  const multiply: Operation2 = (a, b) => a + b;
  multiply.name; // "multiply" 출력
  ```

  함수 타입의 호환성
  --
  **기준: `반환값 타입`, `매개변수 타입(개수 같을 때, 다를 때)`**

  ### 반환값 타입
  ```
  - 공변성
    A가 B의 서브타입이면 T<A>는 T<B>의 서브타입이다.
    
    >> 일반적인 타입 변환 상황
    >> 함수 반환값 : 좁은 타입 -> 넓은 타입 | literal -> number
  ```  
  ### 매개변수 타입
  ```
  - 반공변성
    A가 B의 서브타입이면 T<B>는 T<A>의 서브타입이다.

    >> 매개변수로 전달된 경우 반공변성
    >> 매개변수: 넓은 타입 -> 좁은 타입 | number & string -> string
  ```
    1. 타입 개수 같을 때    
      `반공변성` 에러

    2. 타입 개수 다를 때    
      `타입 개수` 에러

  함수 오버로딩
  --
  함수의 매개변수의 개수나 타입에 따라 함수 다르게 동작     
  *화살표 함수 지원 X*

  ### 오버로드 시그니처 : 버전 생성
  ```TypeScript
  function fn(a: number): void;
  function fn(a: number, b: number, c: number): void;
  ```

  ### 구현 시그니처 : 함수 동작 정의
  ```TypeScript
  function fn(a: number, b?: number, c?: number) {
    if (typeof b === 'number' && typeof c === 'number') {
      console.log(a + b + c);
    } else {
      console.log(a);
    }
  }
  fn(1); // 1
  fn(1, 1); // Error, 매개변수 개수 에러
  fn(1, 1, 1); // 3
  ```

  사용자 정의 타입 가드
  --
  ```TypeScript
  // 타입 정의
  type Dog = {
    name: string;
    isBark: boolean;
  };
  type Cat = {
    name: string;
    isScratch: boolean;
  };
  type Animal = Dog | Cat;

  // 사용자 정의 타입 가드 함수 : Dog, Cat
  function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
  }
  function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
  }
  ```
  `animal is Dog`, `animal is Cat` : 사용자 정의 타입 가드, 타입 보장
  </details>
  
  <details>
  <summary>인터페이스</summary>

  인터페이스   
  --

  ### 선언
  `type` 별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법    

  *interface 뒤에 유니온 불가, `type` 선언으로 가능*

  ```TypeScript
  interface Person {
    name: string;
    age?: number;

    // 함수 표현 (1) : 함수 호출 시그니처( 오버로딩 가능 )
    sayHi(): void; 
    sayHi(value: string, num: number): void;
    
    // 함수 표현 (2) : 함수 타입
    sayHi: () => void; 
  } 
  ```

  ### 확장
  `extends` : 자식은 부모의 타입을 상속받는다.    

  *상속받은 타입 변경은 초기 선언된 타입과 같아야 된다.*

  ```TypeScript
  interface Person {
    name: string;
    age: number;
  }
  interface Man extends Person {
    sayHello(): void;
  }
  interface Woman extends Person {
    name: 'Weely';
    sayHi(): void;
  }
  ```

  ### 합침
  인터페이스 중복 선언 가능, 중복된 인터페이스는 합쳐짐

  ```TypeScript
  interface Person {
    name: string;
  }
  interface Person {
    age: number;
  }
  // Person = { nanme: string, age: number }
  ```
  </details>
  
  <details>
  <summary>클래스</summary>

  클래스   
  --
  ### 초기값 선언 있을 때
  ```TypeScript
  class Animal {
    name: string = 'Tiger';
    age: number = 1;
  }
  ```

  ### 초기값 선언 없을 때
  ```TypeScript
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  ```

  ### 상속
  `extends`, `super` 사용
  ```TypeScript
  class Man extends Person {
    height: number;

    constructor(name: string, age: number, height: number) {
      super(name, age);
      this.height = height;
    }
  }
  ```

  접근 제어자
  --
  ```TypeScript
  class Person {
    name: string; // 인스턴스 변수 - public 상태
    ...
  }
  ```
  `public` : 클래스 인스턴스 변수 기본값, 수정/접근 가능   
  
  `private` : 인스턴스 변수가 선언된 클래스 내부에서만 접근가능    

  `protected` : 인스턴스 변수가 상속된 객체까지 접근가능    


  인터페이스와 클래스
  --
  `implements` : 클래스가 특정 `interface`를 구현하고자 사용

  ```TypeScript
  interface Person { // interface 선언
    name: string;
    age: number;
  }
  class Man implements Person { // 클래스 interface 구현 
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  ```
  `implements`에서 `super` 못 씀    
  `implements`에서 접근제어는 `public`만 가능    
  
  *`super`는 `class` 끼리만 가능*   

  </details>
  
  <details>
  <summary>제네릭</summary>

  제네릭 변수   
  --
  매개변수, 반환값 타입 자동 추론   
  *`any` 사용하면 모든 타입이 `any`여서 오류 발생하지 않음*
  ```TypeScript
  // 함수명 뒤에 <> 붙임
  // <> 안의 변수명은 임의 설정, 변수 추가 가능

  function fn<T>(value: T) {
    // 함수반환(:T) 생략가능
    return value;
  }

  let numberFn = fn([1, 2, 3]); // numberFn: number[]

  // <> 안에 매개변수 타입, 반환값 타입 설정 가능
  let stringFn = fn<string>(123); // Error, 매개변수 타입 오류
  ```

  제네릭 변수 응용
  --
  ### 1. 2가지 이상의 매개변수 타입 설정    
  `<>` 안에 제네릭 변수 추가 선언
  ```TypeScript
  function fn1<T, U>(a: T, b: U) {
    return [a, b];
  }

  let firstFn = fn1(1, 'string'); // firstFn: (string | number)[]
  ```


  ### 2. 배열 인덱스 값 타입 추론 방법
  함수 초기 선언에서 매개변수를 튜플로 선언하고 나머지는 배열 선언    
  ```TypeScript
  function fn2<T>(data: [T, ...unknown[]]) {
    return data[0];
  }

  let secondFn = fn2(['A', 1, 2, 3]); // secondFn: string
  ```

  ### 3. 제네릭 타입 변수 확장
  제네릭 타입 변수에 속성, 매서드 부여
  ```TypeScript
  function fn3<T extends { length: number }>(data: T) {
    return data.length;
  }

  let thirdFn1 = fn3('string');
  let thirdFn2 = fn3([1, 2, 3]);
  let thirdFn3 = fn3(12345); // Error, number 타입에 length 할당 불가
  ```

  `map`, `forEach` 함수 구현
  --
  ### map
  : 배열/콜백함수 필요, 배열 반환, 형 변환 가능
  ```TypeScript
  function map<T, U>(arr: T[], callback: (value: T) => U) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  ```
  ### forEach
  : 배열/콜백함수 필요, `undefined` 반환, 형 변환 가능
  ```TypeScript
  function forEach<T>(arr: T[], callback: (value: T) => void) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }
  ```

  제네릭 인터페이스
  --
  제네릭 변수 선언으로 유연하게 인터페이스 활용 가능

  ```TypeScript
  interface KeyPair<K, V> {
    key: K;
    value: V;
  }

  let keyPair1: KeyPair<string, number> = {
    key: 'number',
    value: 111,
  };
  ```

  ### 인덱스 시그니처

  ```TypeScript
  interface Map<V> {
    [key: string]: V;
  }

  let Map1: Map<number> = {
    key: 123,
  };
  let Map2: Map<string> = {
    key: 'qwer',
  };
  ```

  제네릭 타입 별칭
  --
  타입 좁히기 없이 간략하게 작성가능    
  매개변수 대상 설정 가능   
  
  ```TypeScript
  interface Developer {
    type: 'developer';
  }
  interface Student {
    type: 'student';
  }
  interface User<T> {
    name: string;
    profile: T;
  }

  let user1: User<Student> = {
    name: 'Won',
    profile: {
      type: 'student',
    },
  };
  let user2: User<Developer> = {
    name: 'Ann',
    profile: {
      type: 'developer',
    },
  };

  function who(user: User<Student>) {
    console.log(`Hi ${user.name}`);
  }
  who(user1);
  who(user2); // Error, 할당되지 않은 타입
  ```

  제네릭 클래스
  --
  제네릭 변수로 타입 선언 확장성 보장
  ```TypeScript
  class List<T> {
    constructor(private arr: T[]) {}
  }

  let list1 = new List([1, 2, 3]) // list1<number> 
  ```

  프로미스와 제네릭
  --
  점 표기법을 사용하기 위해 타입 선언   
  : `함수 반환` 또는 `프로미스 반환` 타입 설정
  ```TypeScript
  interface Data {
    status: number;
    message: string;
  }

  function fetchData() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          status: 200,
          message: 'status is ok',
        });
      }, 1000);
    });
  }

  let data1 = fetchData();

  data1.then((res) => console.log(res.status)); // Error, res is unknown
  ```

  ### 1) 프로미스 제네릭 변수 선언
  ```TypeScript
  function fetchData1() {
    return new Promise<Data>((res, rej) => { // <Data> 선언
      setTimeout(() => {
        res({
          status: 200,
          message: 'status is ok',
        });
      }, 1000);
    });
  }
  ```

  ### 2) 함수 반환 타입 선언
  ```TypeScript
  function fetchData2(): Promise<Data> { // Promise<Data> 선언
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          status: 200,
          message: 'status is ok',
        });
      }, 1000);
    });
  }

  ```

  </details>

  <details>
  <summary>타입 조작하기</summary>

  인덱스 엑세스 타입
  --
  1\) 대괄호 표기로 프로퍼티 타입 추출   
  2\) 대괄호 표기 중첩 가능
  ### 객체 타입
  ```TypeScript
  interface Type {
    name: string;
    profile: {
      id: number;
      login: boolean;
    };
  }
  
  type Type1 = Type['profile']['login']; // Type1: boolean
  ```

  ### 배열 타입
  ```TypeScript
  type TypeList = {
    name: string;
    profile: {
      id: number;
      login: boolean;
    };
  }[];
  
  type TypeList1 = TypeList[number]['profile']['id']; // TypeList1: number
  ```

  ### 튜플 타입
  ```TypeScript
  type tuple = [number, string, tuple];

  type tuple1 = tuple[0]; // tuple1: number
  type tuple2 = tuple[1]; // tuple2: string
  type tuple3 = tuple[number]; // tuple3: number | string | tuple
  ```

  keyof 연산자
  --
  객체 타입의 모든 key 추출   
  `keyof 타입` / `keyof typeof 변수` 형식으로 사용
  ```TypeScript
  interface person {
    name: string;
    id: number;
  }

  function personInfo(person: person, key: keyof person) {
    // key: name | id
  }
  ```

  맵드 타입(Mapped Type)
  --
  기존 객체 타입을 새로운 객체 타입 생성  
  *`type`으로만 생성 가능*
  ```TypeScript
  interface Person {
    id: number;
    pwd: number;
  }

  type NewPerson = {
    [key in keyof Person]?: Person[key];
    // { id? : number, pwd? : number } -> 선택적 프로퍼티로 변경 
  };
  ```

  템플릿 리터럴 타입
  --
  템플릿 리터럴을 이용해 특정 패턴을 갖는 `string` 타입
  ```TypeScript
  type Color = 'Red' | 'Green' | 'Blue';
  type Animal = 'Dog' | 'Cat';
  type ColoredAnimal = `${Color}-${Animal}`; // 6가지 타입 조합
  ```

  </details>

  <details>
  <summary>조건부 타입</summary>

  조건부 타입
  --
  `extends`와 `삼항연산자` 활용   
  ```TypeScript
  interface Pwd {...}
  interface Id {...}
  
  type Info = Id extends Pwd ? number : string;
  // Id는 Pwd로 확장되지 않음으로 Info는 string이다
  ```
  
  ### 제네릭 사용 (+ 오버로드 활용)
  반환값 타입 설정 가능
  ```TypeScript
  function fn<T>(value: T): T extends string ? string : number;

  function fn(value: any) {
    if (typeof value === 'string') {
      return value; // value: string
    } else {
      return value; // value: any
    }
  }
  ```

  분산적인 조건부 타입
  --
  ```TypeScript
  type SwitchType1<T> = T extends number ? string : number;

  let a: SwitchType1<string>; // a: number
  ```


  ### 특정타입 제거
  `T`가 `U`의 서브타입이면 `never`, 아니면 `T`
  ```TypeScript
  type SwitchType2<T, U> = T extends U ? never : T;

  let a: SwitchType2<string | number | boolean, string>;

  // 1단계
  // SwitchType2<string, string> |
  // SwitchType2<number, string> |
  // SwitchType2<boolean, string>

  // 2단계
  // never |
  // number |
  // boolean
  // ->> a: number | boolean
  ```
  `never`는 공집합으로 사라짐   
  
  *`공집합`: 원소가 하나도 없는 집합*

  특정 타입 추론 문법
  --
  `R`은 `T`의 타입을 추론,    
  `T`가 `R`의 서브타입이면 `R` 아니면 `never`
  ```TypeScript
  type Returntype<T> = T extends () => infer R ? R : never;
  type FunA = () => string;

  let a: Returntype<FunA>; // a: string
  let b: Returntype<number>; // b: never
  ```

  </details>

  <details>
  <summary>유틸리티</summary>

  ```TypeScript
  interface User {
    id: string;
    pwd: number;
    name?: string;
  }
  ```
  유틸리티(1)
  --
  `Partial`, `Required`, `Readonly`   

  ### Partial\<T>
  : 프로퍼티 선택적 타입으로 변경
  ```TypeScript
  let user1: Partial<User> = {
    id: 'qwer',
  };
  ```
  
  ### Required\<T>    
  : 프로퍼티 필수 타입으로 변경   
  ```TypeScript
  let user2: Required<User> = {
    id: 'qwer',
    pwd: 123,
  }; // Error, name is missing
  ```

  ### Readonly\<T>
  : 프로퍼티 수정불가 타입으로 변경
  ```TypeScript
  let user3: Readonly<User> = {
    id: 'qwer',
    pwd: 123,
  };
  user3.id = ''; // Error, id is readonly
  ```

  유틸리티(2)
  --
  `Pick`, `Omit`, `Record`
  ### Pick\<K, V> 
  : 객체 프로퍼티 중에서 입력한 프로퍼티만으로 객체 생성
  ```TypeScript
  let a: Pick<User, 'id'> = {
    id: 'qwer',
  };
  ```

  *K: key, V: value*    
  *`V`를 `K`의 키 값으로 확장 ( +범위 제한 )*

  ### Omit\<K, V> 
  : 객체 프로퍼티 중에서 입력한 프로퍼티만 생략한 객체 생성
  ```TypeScript
  let a: Omit<User, 'id'> = {
    pwd: 123,
  };
  ```
  
  ### Record\<K, V> 
  : 객체 프로퍼티 키-값 반복 생성한 객체 타입 생성
  ```TypeScript
  type makeType = Record<'user1' | 'user2', { id: string; pwd: number }>;
  
  /*
    {
      user1: {
        id: string,
        pwd: number
      },
      user2: {
        id: string,
        pwd: number
      }
    }
  */
  ```
  
  유틸리티(3)
  --
  `Exclude`, `Extract`, `ReturnType`

  ### Exclude\<T, U>
  `T`에서 `U` 제외    
  ```TypeScript
  type ExcludeType = Exclude<string | boolean, string>;
  // ExcludeType: boolean
  ```
  `T`가 `U`의 서브타입이면 `never` 아니면 `T`   

  ### Extract\<T, U>
  `T`에서 `U`만 추출    
  ```TypeScript
  type ExtractType = Extract<string | number, number>;
  // ExtractType: number
  ```
  `T`가 `U`의 서브타입이면 `T` 아니면 `never`   
  
  ### ReturnType\<T, U>
  함수의 반환값 추출    
  ```TypeScript
  function fn() {
    return 'Hi';
  }
  type ReturnTypeType = ReturnType<typeof fn>; 
  // ReturnTypeType: string
  ```
  함수의 `T`가 `U`의 서브타입이면 `T` 아니면 `never`    

  </details>


### 예제
[리액트 - CRUD 문제해결](./md/practice1.md)  
