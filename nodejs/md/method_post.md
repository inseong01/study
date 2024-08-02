# How does a POST method work?

## 의문점

<p align="center">
  <img src="./img/post01.png" width="80%" height="auto">
</p>

<p align="center" >
새로운 데이터를 만들었을 때 전송 데이터가 url에 포함되어 있지 않았는데
<br/>
어디에 담겨서 보내졌을까?
</p>

## 참고자료

[HTML \<form> method Attribute - w3schools](https://www.w3schools.com/tags/att_form_method.asp)  
[POST - mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)  
[HTTP Request Methods - w3schools](https://www.w3schools.com/tags/ref_httpmethods.asp)  
[[web] Get과 Post의 차이를 알아보자 - 박수현](https://velog.io/@soopy368/web-Get%EA%B3%BC-Post%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%A5%BC-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90)

## 정리내용

### 1. HTTP 란?

: `HyperText Transfer Protocol`,  
사용자와 서버 사이에서 서로 상호작용 할 수 있게 해주는 프로토콜

- #### Method 종류

  - POST  
    : 데이터를 `발신`할 때 사용

    ##### 개발자도구 > 네트워크 > 요청헤더 원시[v] 확인 가능

    ```
    // 요청헤더
    POST /create_process HTTP/1.1
    Host: localhost:3000
    Content-Type: application/x-www-form-urlencoded
    Content-Length: 35
    ...

    // 페이지로드
    title=Post&describes=This+is+post..
    ```

  - GET  
    : 데이터를 `수신`할 때 사용

    ##### URL, 주소창에서 확인 가능

    ```
    http://localhost:3000/?id=Post
    ```

  - 그외  
    : PUT, HEAD, DELETE, PATCH, OPTIONS, CONNECT, TRACE

### 2. POST / GET 특징

- #### POST

  1. 데이터 값은 HTTP 요청 본문에 저장되어 전송 (글자수 제한 X)
  2. URL, 데이터 값 보이지 않음
  3. 브라우저 기록 남지 않음
  4. `Non-Idempotent`, 멱등하지 않음

     > `Non-Idempotent` : 여러 번 호출해도 결과가 동일하지 않은 메서드를 의미

- #### GET
  1. 사용자가 수신할 데이터 값을 쿼리스트링으로 전송 (글자수 제한 O)
  2. URL, 데이터 값 보임
  3. 브라우저 기록 남음
  4. `Idempotent`, 멱등함

## 결론

<p align=center>
POST는 URL로 데이터를 보내지 않고 HTTP 요청 본문에 저장되어 보내진다.
<br>
개발자도구로 확인할 수 있으므로 민감한 정보는 암호화 되어야 한다.
<br>
HTTP 공부도 해야겠다. 
</p>
