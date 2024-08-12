# React.js

### 목표

: 리액트 숙달, 상태관리 능숙

### 공부방법

: 강좌 듣고 개인적으로 사이드, 메인 프로젝트 개발

### 학습내용

- #### 정리

  <details>
  <summary>클린코드 리액트</summary>
    
  <ul> 
    <li style="list-style-type: none;"> 
    <details>
    <summary>State</summary>

  - ### useState()

    : 초기값 설정 -> 예상치 못한 상황 발생 가능

  - ### 상수 값

    : 쓰이지 않으면 함수 밖으로 옮기기

  - ### 플래그

    : useState 대신 조건식으로 플래그 상태 정의 가능

  - ### 불필요한 상태

    : props를 useState가 아닌 const로 선언하는 게 좋을 수 있음

  - ### useRef

    : DOM 외의 곳에서도 사용 가능, 리렌더링되지 않는 상태

  - ### 상태 단순화

    : 연관된 상태가 있다면 묶어서 하나로 만든다, 문자열 또는 나열 구조 또는 객체

  - ### useReducer

    : 상태 구조화 가능, action.type을 왜 상수로 받는 건지.. 에러 확인 용도인가?

  - ### custom hooks

    : 파일을 따로 생성하지 않아도 함수 밖으로 이동시켜서 렌더링 함수 단순화 가능

  - ### update function

    : 값을 덮어씌우려면 직접할당, 이전 값을 변경하려면 함수로 prev 스프레드 사용

      </details>
      </li>

    <li style="list-style-type: none;"> 
    <details>
    <summary>Props</summary>

    - ### props 바로 사용하기

      : 무거운 연산이 있다면 props로 내려오기 전에 실행하기,  
      만약에 props로 내려온 다음에 연산을 해야한다면 useMemo 적용하기

    - ### 중괄호 : curly Brace = {}

      ```javascript
      const a = {a:1};
      { { a: 1 } } = { a }
      ```

    - ### 포맷팅 도구에 규칙을 위임하자

    - ### spread(...) 주의사항

      : 컴포넌트에 어떤 값이 내려왔는지 모를 수 있다.

    - ### props가 많다면

      : 컴포넌트를 분리해보자

    - ### props로 객체 전체를 내린다면

      : 필요한 값만 컴포넌트에서 받자

      ```javascript
      function app(props) {} ❌
      function app({ name, weight }) {} ✅
      ```

        </details>
        </li> 
        <li style="list-style-type: none;"> 
        <details>
        <summary>Component</summary>

      - ### thinking in REACT 읽어보기

        [Thinking in REACT](https://dev.to/jareechang/thinking-in-react-visualized-g4p)

      - ### fragment 사용 지양하기

        : wrap으로 감싸져 있을 때, string/object/array를 반환할 때

      - ### 컴포넌트 네이밍

        : camelCase로 작성

      - ### 함수 return 지양

        : 반환값을 바로 알기 어렵다, props 전달 등 일반적인 패턴이 아니다.

      - ### 컴포넌트 내부에 컴포넌트

        : 결합도가 증가한다. 성능저하. 분리하자

      - ### displayName 설정

        : devTools에서 익명함수 확인가능

      - ### 컴포넌트 구성
        : 변수, 상태, 이벤트 등 놓는 순서/위치 본인만의 규칙을 세우자

      </details>
      </li> 
      <ul>

  </details>

- #### 의문점

  <details>
  <summary>펼치기</summary>

  - ### [CROS 뭔가](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F)
  - ### 클라이언트 알아보기
  - ### 웹 데이터 작동방식


  </details>

### 톺아보기

<!-- []()   -->

### 예제

<!-- []()   -->

### 사이드 프로젝트
[Socket.IO-client 활용 - 채팅창](./socketIO/client/README.md)
<!-- []()   -->
