# 네이버 클라우드 콘솔 - 입문: Secret Manager

## 배경
`API key`를 숨기고 싶었음.    
`key` 값이 잘 받아지는지 확인되면 서버를 개설할 계획.

## 참고자료

[1. Secret Manager 개요 - NAVER CLOUD](https://guide.ncloud-docs.com/docs/secretmanager-overview)  
[2. Sub Account 개요 - NAVER CLOUD](https://guide.ncloud-docs.com/release-20240723/docs/subaccount-overview)  
[3. Secret Manager 권한 관리 - NAVER CLOUD](https://guide.ncloud-docs.com/docs/secretmanager-subaccount)  
[4. Secret Manager API 호출 - NAVER CLOUD](https://api.ncloud-docs.com/docs/secretmanager-api-overview)    
[5. Ncloud API - NAVER CLOUD](https://api.ncloud-docs.com/docs/common-ncpapi)

## 주요 내용


네이버 클라우드 콘솔 API는 RESTful 형태로 제공되며    
API 요청 메시지는 아래와 같이 구성된다.

```
> http

Header
  x-ncp-apigw-timestamp:{Timestamp}
  x-ncp-iam-access-key:{Sub Account Access Key}
  x-ncp-apigw-signature-v2:{API Gateway Signature}
  Content-Type:application/json
Body
  fieldName: {Value}
URL
  https://secretmanager.apigw.ntruss.com/api/v1/{api}
```

- ### 용어 설명
    - `x-ncp-apigw-timestamp`   
    : 1970년 1월 1일 00:00:00 협정 세계시(UTC)부터의 경과 시간을 밀리초(Millisecond)로 나타낸 것
      <details>
      <summary>코드</summary>

      ```javascript
      const TimeStamp = date.now().toString();

      // API Gateway 서버와 시간 차가 5분 이상 나는 경우 유효하지 않은 요청으로 간주
      ```   

      </details>    

    - `x-ncp-iam-access-key`    
    : 네이버 클라우드 플랫폼 포털이나 `Sub Account`에서 발급받은 `Access Key ID`
      <details>
      <summary>확인</summary>  
        
        ### 1. Portal Accounts    
        ```
        계정관리 > 비밀번호 입력 > 인증키 관리 > 신규 API 인증키 생성 
        ```

        ### 2. Sub Accounts     
        ```
        서브 계정 > 서브 계정 세부 정보 > Access Key   
        ```

        ```
        Access Key 안 보일 시   
        접근권한 > API Gateway 접근 허용 ✅      
        ```

      </details>

    - `x-ncp-apigw-signature-v2`   
    : Body를 Access Key ID와 맵핑되는 Secret Key로 암호화한 서명값

      <details>
      <summary>코드</summary>   
      
      ``` javascript
      function makeSignature() {
        let space = " ";    
        // one space
        let newLine = "\n";   
        // new line
        let method = "GET";   
        // method
        let url = "/photos/puppy.jpg?query1=&query2";	
        // url (include query string) -> 도메인 이후 값
        let timestamp = `${timestamp}`;			
        // current timestamp (epoch)
        let accessKey = `${accessKey}`;			
        // access key id (from portal or Sub Account)
        let secretKey = `${secretKey}`;			
        // secret key (from portal or Sub Account)
        let message = method + space + url + newLine + timestamp + newLine + accessKey;

        let hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
        hmac.update(message);

        var hash = hmac.finalize();

        return hash.toString(CryptoJS.enc.Base64);
      }

      // npm crypto-js 필요
      ```
    </details>

- ### Secret Manager API 출력값

  ``` javascript
  // 최초 출력 (문의 전)
  {
    error: {
      errorCode: '200',
      message: 'Authentication Failed',
      details: 'Invalid authentication information.'
    }
  }
  // 시그니처의 uri가 잘못됨, 도메인 이후 값을 삽입
  // 전) var url = `/secrets/${secretId}/values`;
  // 후) var url = `/api/v1/secrets/${secretId}/values`;
  ```
  ```javascript
  // 문의 답변 적용 후
  {
  error: {
    errorCode: '300',
    message: 'Not Found Exception',
    details: 'URL not found.'
    }
  }
  // ???
  ```
  ```javascript
  // 다른 유형의 API 활용 블로그 확인, fetch url 수정
  // 최종 출력
  {
    code: 'SUCCESS',
    data: {
      decryptedSecretChain: {
        previous: `{"FIRST_API_KEY":"'This is a previous value'"}`,
        active: '{"FIRST_API_KEY":"1234567890"}',
        pending: `{"FIRST_API_KEY":"'This is a pending value'"}`
      },
      rotationTargets: [ 'FIRST_API_KEY' ]
    }
  }
  // header도 문제였지만 가장 근본적인 원인은 fetch가 받는 url 문제
  // 전)
  // const secretManagerURL = `https://secretmanager.apigw.ntruss.com/`;
  // 후)
  // const secretManagerURL = `https://secretmanager.apigw.ntruss.com/api/v1/secrets/${SECRET_MANAGER_ID}/values`;
  ```

  ### 결과
  [Secret Manager 코드](../CloudTemplete/secretManager.js)
  

  ### 느낀점
  **사수가 있었다면..**

  &nbsp; &nbsp; 첫 날은 익숙치 않아서 문서 적응하는 날이라고 해도 둘째 날에는 해결돼야 하는데 안 된다. 둘째 날은 문서에 익숙해져서 어디가 잘못 됐는지, 어디서 값을 가져와야 하는지 알았는데 오류가 난다. 네이버 클라우드 콘솔 로그내역에는 성공이라 뜬다. 이상하다.    
  
  &nbsp; &nbsp; GPT 한테 물어봐도 해결되지 않는다. 문의를 해봐도 해결되지 않는다. VCP 전용이라해서 VCP 서버를 개설해야 되는지 질문 했는데 `Signature Request Header url` 문제라고 했다. `makeSignature()`의 `url`을 도메인 이후 값으로 했더니 이제는 인증실패가 아니라 주소를 못 찾는다고 나온다. 정신 나갈 거 같다. GPT도 안 되고 문의로 해결 안 되면 도대체 어떻게 하라는 건지. 답이 없다.     

  &nbsp; &nbsp; 알고보니 `fetch`가 받는 `url`문제였다. `url` 전체를 전달했어야 하는데 도메인 주소만 전달하니 요청을 못 보내고 응답을 받을 수 없었던 거다. 어이없다. `socket.io` 서버 연결도 사소한 문제였는데 이번 `url` 문제도 사소한 문제였다. 여기서 드는 의문은 왜 담당자는 알아채지 못했을까? 코드전체를 사진으로 보냈는데.. 의문이다. 사수가 있었다면 금방 해결됐을 텐데. 아쉽다. 
  
  &nbsp; &nbsp; 이번에 유튜브 네이버 클라우드 공식 채널, 관련 블로그 다 찾아봤다. `api` 사용법 정리한 사람들이 적어서 해결하는데 오래 걸렸다. 결국 블로그 글 덕분에 해결했다. 이래서 범용성이 중요했다. 
  
  &nbsp; &nbsp; 해결하는데 오래 걸렸지만 공식문서 입문 신고식이라 해야지. `NAVER CLOUD API`와 `NAVER CLOUD DOC`을 활용할 시간만 남았다. `NAVER` 서버가 1년 서버 무료라 들었는데 더 알아보니 `Oracle` 서버가 평생 무료라고 한다. 이제 서버 증설할 차례다.