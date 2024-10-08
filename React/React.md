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

    : `useState` 대신 조건식으로 플래그 상태 정의 가능

  - ### 불필요한 상태

    : `props`를 `useState`가 아닌 `const`로 선언하는 게 좋을 수 있음

  - ### useRef

    : `DOM` 외의 곳에서도 사용 가능, 리렌더링되지 않는 상태

  - ### 상태 단순화

    : 연관된 상태가 있다면 묶어서 하나로 만든다, 문자열 또는 나열 구조 또는 객체

  - ### useReducer

    : 상태 구조화 가능, `action.type`을 왜 상수로 받는 건지.. 에러 확인 용도인가?

  - ### custom hooks

    : 파일을 따로 생성하지 않아도 함수 밖으로 이동시켜서 렌더링 함수 단순화 가능

  - ### update function

    : 값을 덮어씌우려면 직접할당, 이전 값을 변경하려면 함수로 `prev` 스프레드 사용

    </details>
    </li>

    <li style="list-style-type: none;"> 
    <details>
    <summary>Props</summary>

    - ### props 바로 사용하기

      : 무거운 연산이 있다면 `props`로 내려오기 전에 실행하기,  
      만약에 `props`로 내려온 다음에 연산을 해야한다면 `useMemo` 적용하기

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

        : `wrap`으로 감싸져 있을 때, `string/object/array`를 반환할 때

      - ### 컴포넌트 네이밍

        : `camelCase`로 작성

      - ### 함수 return 지양

        : 반환값을 바로 알기 어렵다, `props` 전달 등 일반적인 패턴이 아니다.

      - ### 컴포넌트 내부에 컴포넌트

        : 결합도가 증가한다. 성능저하. 분리하자

      - ### displayName 설정

        : `devTools`에서 익명함수 확인가능

      - ### 컴포넌트 구성
        : 변수, 상태, 이벤트 등 놓는 순서/위치 본인만의 규칙을 세우자

    </details>
    </li> 

    <li style="list-style-type: none;"> 
    <details>
    <summary>Render</summary>

      - ### 공백
        : `{' '}`으로 빈 공간을 넣을 수 있다.

      - ### JSX 유효값
        : `0`은 `JSX`에서 렌더림 됨, `Boolean`으로 조건을 넣어야 함

      - ### key
        : key 값은 리스트 항목 고유화/성능 최적화 중요 요인,  
        고유값을 넣어야 함. 고유값 라이브러리 사용 필요 `crypto.randomUUID`

      - ### Raw HTML 다루기
        : `COMPurify`, `eslint-plugin-risxx`사용으로 `XSS` 공격 위험 감소.
      
    </details>
    </li> 

    <li style="list-style-type: none;"> 
    <details>
    <summary>Hooks</summary>

      - ### useEffect() 기명함수
        : 기명함수를 사용하면 어떤 useEffect인지, 어디서 에러가 발생했는지 알 수 있다.

      - ### 하나의 dependency
          : useEffect()는 한가지 역할만 하도록 분리

      - ### 커스텀훅의 반환 형태
          : 배열 뿐만 아니라 객체, 변수, 배열로 반환 가능
      
    </details>
    </li> 

    <li style="list-style-type: none;"> 
    <details>
    <summary>Ect</summary>
    
      - ### import react 
        : `v17` 이상부터 `React`를 가져오지 않아도 된다.

      - ### 디렉터리 구조
        : 정답은 없다.    
        결합도가 높다면 결합도 대로 묶는 것도 방법    
        ```
        components    
        ㄴ TodoList.jsx   
        ㄴ TodoListItem.jsx   
        ㄴ TodoListItemButton.jsx   
        ```
      - ### SPA
        : Single Page Application   
        ```
        window.location.reload() - 페이지 새로고침    
        ```
        `SPA`에서 새로고침은 새롭게 모든 리소스를 다시 가져온다.    
        로그인 구현을 위해서는 세션 스토리지 추가 활용

      - ### Primitive UI
        : Semantic HTML, Primitive UI를 준수하자    
        *`React`에서는 지키기 어렵지만*

    </details>
    </li> 

    <li style="list-style-type: none;"> 
    <details>
    <summary>리액트 생태계</summary>

      - ### 2016
        : `IE` 대응하기 위해 `jQuery`, `AngularJS` 사용   
        `React` 관련 국내 자료 전무
      - ### 2017
        : 학습 자료가 없고 많은 학습량 때문에 `Angular`보다 `React`로 전환
      - ### 2018
        : 다양한 라이브러리 탄생, 프론트엔드 직군 서서히 드러남
      - ### 2019
        : `React Hook`, `TypeScript` 도입
      - ### 2020
        : `Axios` 도입, 성능최적화 요구, `Next.js`와 컴포넌트 관심 증가
      - ### 2021
        : 개발자 호황기, `Svelte`/`Recoil` 도입 시도
      - ### 2022
        : 개발자 불황기, `IE` 서비스 종료, `React v18` 배포, `Vercel` 성장, `Vite` 도입
      - ### 2023
        : `AI` 등장, `Svelte`에서 `TS` 걷어냄,  `Next.js` 진보한 렌더링 기법: `ISR`(주기), `Streaming SSR`(배포)

    </details>
    </li> 
  <ul>
  </details>

- #### 의문점

  <details>
  <summary>펼치기</summary>

  - ### [CROS 뭔가](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F)
  - ### 클라이언트 알아보기
    <details>
    <summary>펼치기</summary>

    - 서버   
    : 네트워크 상에서 클라이언트에게 서비스를 제공하는 컴퓨터 시스템

    - 클라이언트   
    : 네트워크 상에서 서버로부터 서비스를 요청하고, 그에 대한 응답을 받는 역할

    - 웹 서버   
    : 웹서버는 서버의 한 종류로, 주로 HTTP를 통해 웹 페이지를 제공하는 역할   

    - 웹 애플리케이션 서버   
    : 동적인 콘텐츠를 생성하고, 웹 애플리케이션의 비즈니스 로직을 처리(미들웨어)

    - 웹 클라이언트   
    : 웹 서버로부터 HTTP 요청을 통해 웹 콘텐츠를 요청하고, 그 응답을 받아 사용자에게 표시

    </details>
    
  - ### 웹 데이터 작동방식


  </details>

### 톺아보기

[CORS는 뭔가](./md/CORS.md)  
[웹은 어떻게 동작하는가](./md/webWorks.md)  

### 예제

<!-- []()   -->

### 사이드 프로젝트
[Socket.IO-client 활용 - 채팅창](./socketIO/client/README.md)
<!-- []()   -->
