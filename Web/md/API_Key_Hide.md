# 배포할 때 API Key 숨기는 방법 : 자문자답
The Way To Hide An API Key When You Build A Web Application - Q&A   

`.igitignore`, `.env` 같이 코드 관리가 아닌 배포할 때 어떻게 하면 `key`를 숨길 수 있을지 알아보자.

## 질의응답

### 첫번째 의문          
```
클라이언트에서 API key 숨기는 방법
```
- ### 문제    
    클라이언트에서 `api` 요청하면 페이지에 `api key`가 보인다.
  
  - ### 해결      
    클라이언트에서 서버로 `key`를 요청하면        
    클라이언트 리소스에서 `key`가 보이지 않는다.

### 두번째 의문   
```
클라이언트에서 API key 요청 주소 숨기는 방법
```
- ### 문제    
    클라이언트에서 서버 주소가 보인다.    
    *누군가 클라이언트에 남아있는 주소로 요청하면 `key`를 얻을 수 있다.*

  - ### 해결      
    프록시 서버, 엔드포인트 설정해서 원본 출처를 숨길 수 있다.

### - 세번째 의문   
```
클라이언트에서 프록시, 엔드포인트 주소 숨기는 방법
```
- ### 문제    
    클라이언트 리소스에서 프록시 서버, 엔드포인트 주소가 보인다.    
    *누군가 클라이언트에 남아있는 주소를 이용하면 `key`를 얻을 수 있다.*

  - ### 해결    
    **1. 서버리스**    
    서비스를 제공하는 업체에게 `key`와 `API 주소`를 위탁하고 새롭게 받은 API `URI`로 해결가능  
     
    `key`는 숨겼지만 클라이언트에 `URI`가 남아 있어서 다른 사람도 API 주소를 통해 데이터 요청 가능    
    ```
    서버리스 제공 서비스 : Cloudflare Workers, Netilfy
    ```
    **2. JWT 토큰**    
    로그인 정보를 토큰으로 받아 올바른 요청에만 `API` 제공    
    다만 로그인이 필요없는 서비스면 `API` 제공 못 함

    **3. 블랙리스트 IP 작성**   
    `API` 요청이 비정상적으로 많으면 해당 `IP` 블랙리스트에 추가   
    그나마 괜찮은 방법    

## 결론
: **서버리스**와 **블랙리스트 IP 작성** 활용    
```
1. 클라이언트 접속
2. 클라이언트는 데이터서버에 데이터 요청
2. 데이터서버는 요청 uri, cors 확인하고 API 요청.
3. API 응답 오면 데이터서버는 클라이언트에게 API 응답 전달
4. 클라이언트는 응답 수신

서버 필요, 서버주소 숨기고 엔드포인트 설정, 블랙리스트 IP 기록, express의 req.ip 확인 가능   
```

### - 알아볼 것    
1. 서버리스 API 요청주소는 어디까지 설정 가능한지
    ```
    API 남용 방지 : URI 헤드포인트 설정   
    ```

2. 중계서버, 일반서버 중 어떤 서버를 개설할지   
    ```
    확장성 : 개인 웹 사이트 개설 염두       
    ```

3. IP 주소 기록을 위해 `DB`가 필요한지      
    ```
    비용 절감 가능 방법
    ```

4. 프록시, VPN으로 접근하면 어떻게 차단할지
    ```
    해외접속, 악의적 접근 차단 방법
    ```

## 참고자료
#### 블로그    
[프론트엔드 및 브라우저에서 API, 키, 시크릿 숨기는 방법 - toolify](https://www.toolify.ai/ko/ai-news-kr/api-627493)   
[프론트엔드에서 API Key를 숨기는 법 - 권세진](https://velog.io/@0307kwon/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EC%97%90%EC%84%9C-API-Key%EB%A5%BC-%EC%88%A8%EA%B8%B0%EB%8A%94-%EB%B2%95)     
[Netilfy 자바스크립트 프로젝트 배포할 때 API key 숨기기 - Lennon](https://parkparkpark.tistory.com/115)     
[[Next.js] rewrites 를 이용하여 API Key 숨기기 - HYI](https://velog.io/@godud2604/Next.js-rewrites-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-API-Key-%EC%88%A8%EA%B8%B0%EA%B8%B0)    
[JWT란 무엇인가? - 한서연](https://velog.io/@hahan/JWT%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)   

#### 유튜브    
[API 키, 안전하게 숨기기 5분컷! - 노마드코더](https://www.youtube.com/watch?v=wAWOOBUAclc)   
[5 JavaScript API Key Mistakes (and how to fix them) - James Q Quick](https://www.youtube.com/watch?v=7oJgdyMS4rQ)      