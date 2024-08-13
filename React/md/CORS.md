# What is CORS

## 의문점
<p align="center" >
socket.io-client를 사용하면서 왜 오류가 발생했는지 궁금
</p>

## 참고자료

[악명 높은 CORS 에러 메세지 - 인파_](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F)  


## 정리내용

### 1. CORS란 
#### Cross-Origin Resource Sharing  
  - 정의    
   : 브라우저가 자신의 출처가 아닌 다른 출처에서 자원을 로딩하는 것을 허용하도록 서버가 허가 해주는 매커니즘
     
### 2. 매커니즘 종류
  - ### `same-origin`   
	: 동일출처 리소스 공유, 다른 출처 리소스 실행 방지   
  : `<img>` `<video>` `<script>` `<link>`   

    ```
    출처란   
    : 프로토콜, 호스트, 포트로 구성된 URL   
    ```
    ```
    출처 구분 방법     
    : 프로토콜, 호스트, 포트 이 3가지가 모두 동일한지?
    ```
    > *CORS 오류는 브라우저가 판단, 서버는 요청응답만 한다. 주소가 달라도 서버는 리소스를 공유 할 수 있다.*

- ### `cross-origin`    
	: 교차 출처 리소스 공유 허용/비허용 정책    
  : `XMLHttpRequest`, `Fetch API`     

  - 동작과정      
    #### 1. 클라이언트에서 HTTP 요청 헤더에 Origin 전달    
      - 요청 3가지 방법   
      1. 예비요청   
        : 예비 요청을 보내고 본 요청을 보냄   

      2. 단순요청   
        : 예비 요청 생략, 서버 직행 요청    

      3. 인증된 요청    
        : 클라이언트가 자격인증정보 실어 서버에게 요청    

    #### 2. 서버는 응답헤더에 Access-Control Allow-Origin 담아 클라이언트에게 전달   

    #### 3. 클라이언트 Origin과 서버 Access-Control Allow-Origin  비교   

### 3. CORS 해결방법
  - 프록시 서버 사용

  - 서버에서 Access-Control-Allow-Origin 헤더 설정

## 결론

<p align=center>
<br/>
이것도 보안을 위한 브라우저 정책
<br>
저렴하고 간단하게 해결하려면 헤더 설정으로
</p>
