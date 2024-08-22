# Node.js

### 목표

: 서버 구축, 실시간 데이터 이동 구현, 인터넷 동작 원리, 보안 지식 습득

### 공부방법

: 인터넷 강의로 입문하고 공식 문서 보기   

*" 기본만 배우고 만들고 싶은 거 만들기 "*

### 학습내용

- 정리

  <details>
  <summary>맛보기 내용</summary>

  - 응답 반환 설정  
    `response.end();`  
    : if else 문에서 중복 생략하기 위해 아래에 두었더니 한 박자 늦은 값 출력

  - 패키지매니저 - pm2

    `pm2 start main.js --watch` : 파일 수정하면 자동 갱신  
    `pm2 logs` : 실시간 로그 확인 (ctrl + c : 나가기)

  - form method="post"  
    : 발신 내용을 숨겨서 전송, 주소창에 드러나지 않음

  - node에서 파일 추출/내보내기  
    : module.exports, require

  - 링크 이동  
    : `{Location: ...}` 설정할 때 한글 주소 인식 오류

  - 삽입공격 방지  
    : `path.parse().base`, `sanitize-html API`
  </details>

  <details>
  <summary>노드 기본 기능</summary>

  - ### 환경변수

    `process.env` : 비밀키를 보관하는 용도

  - ### 노드 이벤트 루프 우선순위

    : `nextTick` -> `promise` -> `timeout` -> `immediate`

  - ### path

    : `\`, `/` 자동 처리

    ```javascript
    path.join(**dirname, '..', '/var.js');
    // C:\\user\\var.js (주소 결합 역할)
    path.resolve(**dirname, '..', /var.js);
    // C:\\var.js (절대경로 탐색)

    // 상대경로: 현재폴더에서 시작 / 절대경로: 루트폴더에서 시작
    ```

  - ### 노드 주소 체계

    : `new URL('주소')` -> URL 객체 값 반환

    ![주소체계](./md/img/주소체계.jpg)

  - ### crypto

    1. **해쉬화**  
       : 암호화 O - 복호화 X, 알고리즘 다양

    2. **대칭형 암호화**  
       : key 사용됨 (서버 - 프론트 사용 불가: 프론트에서 key 드러남)

    3. **비대칭형 암호화**  
       : 서로 다른 key 사용 (서버 - 프론트 사용)

  - ### util
    : 각종 편의 기능 모듈  
    `deprecated`, `promisify` 자주 사용
    ```
    // deprecated
    // 변경될 코드 사용자에게 경고 알림, 예시) 라이브러리 관리
    ```
    ```
    // promisify
    // 프로미스 패턴화(async/await 가능)
    ```
  - ### worker_thread

    : 멀티스레드는 다른 언어 추천

  - ### child_process

    : 다른 언어 가져오기, `호출` 역할

    ```javascript
    const spawn = require('child_process');
    const process = spawn('python', ['test.py']);

    process.stdout.on('data', function (data) {
      console.log(data.toString());
    });
    ```

  - ### 동기/비동기

    - **동기**
      - 순서대로 실행
      - 한번에 하나 처리
    - **비동기**
      - 순서대로 실행 X
      - 한번에 여러 개 처리  
        : `then`, `await` 사용하여 순서대로 처리 가능

  - ### 버퍼/스트림

    - **버퍼**  
      : 일정한 크기로 모아두는 데이터 - 일정 크기가 되면 한 번에 처리
    - **스트림**  
      : 데이터 흐름 - 일정한 크기로 나눠서 여러 번 처리 (대용량 처리 유리)

  - ### 에러 처리

    - 콜백 에러는 노드 프로세스를 멈추게 하지 않는다.
    - `promise` 사용할 때 `catch` 붙여야 한다.

      ```javascript
      process.on('uncaughtException', (err) => console.error(err));

      // 모든 에러 기록하지만 복구 작업 부적합
      ```
    </details>

    <details>
    <summary>Express</summary>

    - ## nodemon

      : 프로젝트 파일 변경 감지

      - 실행  
        : npx nodemon `<파일명>`

    - ## 문서

      ### 1. 기본 라우팅

      - app.`METHOD`( `PATH` , `HANDLER` )
        - `METHOOD`  
          : get post send put post delete : 소문자 작성
        - `PATH`  
          : 경로
        - `HANDLER`  
          : 경로 도착 시 실행되는 함수

      ### 2. set(키, 값)

      : 환경변수 지정

      - `get('키')` 값 불러오기 가능

      ### 3. HTML 읽기

      : `sendFile()`, 받은 경로 파일로 변환

      - path: 파일과 폴더 경로  
        `.join()`: 부여한 인수 순서대로 결합

      ### 4. 미들웨어요청

      : 응답 주기 중 접근 권한을 갖는 함수  
      `use()` = 미들웨어 X, 미들웨어 함수를 결합 O

      ```javascript
      app.use([path,] (req, res, next) => {});

      /*
        path: 지정한 경로에 적용
        req: 요청
        res: 반응
        next: 다음 라우터
      */

      // 에러 처리 (매개변수 4개)
      app.use([path,] (err, req, res, next) => {});
      ```

      ### 5. Express 주의사항

      - 한번의 요청은 하나의 반응을 반환.
      - `writeHead()`, `end()` 사용자제  
        : 편의를 위해 하나로 만든 `send()` 사용 권장
    </details>

    <details>
    <summary>Express Middleware</summary>

    - ### morgan

      : HTTP 요청에 대한 로그 출력

      - `'dev'` : 개발용  
        : _status / ms / byte_

      - `'combined'` : 배포용  
        : _ip / 날짜시간 / 브라우저 ..._

    - ### cookieParser

      : 문자열이 아닌 객체로 쿠키 조작 가능

    - ### body-parser

      : express 내장되어 있음, 설치 X

      - `express.static()`  
        : 정적파일/폴더 경로 설정, 미들웨어 위치 중요

      - `express.json()`  
        : json 데이터 파싱

      - `express.urlencoded()`  
        : form 데이터 파싱, extended = qs: true || querystring

        ```javascript
        app.use('/public', express.static('public'));
        app.use(express.json()); // json 데이터
        app.use(express.urlencoded({ extended: true })); // form 데이터

        /*  body-parser 특징
            1. 실행 성공 - next() / 실행 실패 - 404, 
            2. static은 실행 성공하면 next() 호출 X 
            3. request에서 데이터 바로 꺼내서 사용 가능
            4. 미들웨어 순서 따라 결과 다를 수 있음
        */
        ```
    - ### express-session

      #### 1. 세션 객체 설정

      ```javascript
      app.use(
        session({
          resave: false,
          saveUninitialized: false,
          secret: process.env.COOKIE_KEY,
          cookie: {
            maxAge: 10000,
            httpOnly: true,
            path: '/',
          },
          name: 'session-cookie',
        })
      );

      /*
          resave
          : 요청이 왔을 때 다시 저장 여부
          saveUnitialized
          : 세션에 저장할 내역이 없어도 저장 여부
          secret
          : 암호화 키
          cookie
          : 암호화 된 값으로 표기, 'secret' 옵션 필요
          name
          : 세션 이름
      */
      ```

      #### 2. 세션 객체 생성

      ```javascript
      app.get('/', (req, res) => {
        // 키-값 선언
        req.session.nameValue = 'first-session-cookie';
        req.session.idValue = 'first-session-cookie2';
        ...
      });
      ```

    - ### Multer

      : [Multer](https://github.com/expressjs/multer/blob/master/doc/README-ko.md) 파일 업로드 처리

      #### 1. 파일 저장 방법 선언

      ```javascript
      const multer = require('multer');

      const storage = multer.diskStorage({
        // 경로지정
        destination: function (req, file, done) {
          done(null, __dirname + '/uploads'); // done(실패, 성공)
        },
        // 파일 이름지정
        filename: function (req, file, done) {
          done(null, file.fieldname + Date.now());
        },
      });
      ```

      #### 2. 라우터에서 파일 업로드

      ```javascript
      const upload = multer({ storage: storage });

      app.post('/upload', upload.array('image', 3), (req, res, next) => {
        let content = req.file;
        // upload.sigle()은 req.file로 접근
        let contents = req.files;
        // upload.array() || .fields()은 req.files로 접근
        res.send(contents);
      });
      /*
          .single(fieldname)
            - fieldname: 명시된 단수 파일 전달 받음, req.file
            
          .array(fieldname[, maxCount: Number])
            - fieldname: 명시된 복수 파일 전달 받음, req.files
              maxCount 초과 시 error 출력
              
          .fields(fields)
            - fields: 명시된 여러 파일 전달 받음, req.files
            예) [{name: 'image', maxCount: 4}, {name: 'video', maxCount: 3} ...]
          
        */
      ```

    - ### .env
      - `npm i dotenv` : 설치해야 인식
      - `.env` : 키-값 선언, 세미콜론 생략
      - `process.env.[지정한 키]` : 환경변수 불러오기
    </details>

    <details>
    <summary>socket.IO</summary>

    - ## 공식문서
      [soket.IO](https://socket.io/docs/v4/tutorial/introduction)

    - ### ESM import/export 사용방법
        - package.json : `"type": "module"` 추가
        - .js : `.mjs` 파일명 변경

    - ### socket 이벤트
        - #### 접속
          ```javascript
          io.on('connection', (socket) => {});
          ```

        - #### 발생
          - 전체 클라이언트에게 전달 
            ```javascript
            // emit('이벤트 이름', '전송 데이터')
            io.emit('chat message', '안녕하세요');
            ```
          - 현재 클라이언트 제외 전체 클라이언트에게 전달 

            ```javascript
            socket.broadcast.emit('chat message', '현재 창에서는 안 보입니다.'); // 윈도우 창 2개로 확인
            ```

        - #### 처리
          ```javascript
          socket.on('chat message', (msg) => {
            console.log(msg); // msg(전송데이터) 반환
          });
          ```

    - ### 방
       **Io -> NameSpace -> Room -> Socket**

        ```javascript
        console.log(socket.adapter);

        { 
          ...,
          rooms: Map(3) {
            '사용자1' => Set(1) { '사용자1' },
            '사용자2' => Set(1) { '사용자2' },
            '1번방' => Set(1) { '사용자1' }
          },
          sids: Map(2) {
            '사용자1' => Set(1) { '사용자1', '1번방' },
            '사용자2' => Set(1) { '사용자2' }
          },
        }
        ```
        - ### rooms   
          : 접속 가능한 방 목록   
          - `[set]` : 방에 접속되어 있는 소켓ID 배열, `Set(0)`이면 해당 방 사라짐   

          - 기본적으로 접속한 소켓ID가 적혀있음 => 개인 방    
          
            **본인이 나가고 아무도 없으면(`Set(0)`) 자신의 방도 사라짐*
        
        - ### sids
          : 소켓ID 목록
          - `[set]` : 각 ID가 접속되어 있는 방 배열

        - ### `join()`, `leave()`
          : 방 들어가기(생성) / 나가기    

          **join() 해야 메시지 전달/확인 할 수 있음*
          ```javascript
          socket.join(room); // room : String
          socket.leave(room); 
          ```

        - ### `to()`
          : 메시지 전달할 방 지정하기

          **to('room' : String) 문자열로 전달해야 동작*
          ```javascript
          // 1번방에 본인 포함 전체에게 전달
          io.to('1번방').emit('cheat message', 'Hi');
          
          // 사용자1에게 전달 (본인 볼 수 없음 : broadcast)
          socket.broadcast.to('사용자1').emit('cheat message', 'Hi');
          ```

        - ### 발신 client ID
          : 클라이언트의 코드가 있는 곳에서 소켓ID 얻음 (현 html 파일)
       
    - ### 과제
      ```
      ✅  1. Broadcast a message to connected users when someone connects or disconnects. 
      ✅  2. Add support for nicknames.
      ✅  3. Don’t send the same message to the user that sent it. Instead, append the message directly as soon as they press enter.
      ✅  4. Add “{user} is typing” functionality.
      ✅  5. Show who’s online. 
      ✅  6. Add private messaging.
      🔃  7. Share your improvements!
      ```
</details>
    
- 의문점

  <details>
  <summary>펼치기</summary>

  - #### fs 함수 중첩

    : 콜백지옥 되는 거 아닌 가?

  - #### 파일 추출/내보내기

    : es6/node `import`, `require` 차이점

  - #### 에러처리, status처리는 서로 다른 건가?

    ```
    에러처리는 매개변수를 4개를 갖는 미들웨어
    status처리는 path를 가지고 있지 않는 라우터
    ```
  </details>

### 톺아보기

- [fs 함수 중첩 - 콜백지옥 되는 거 아닌 가?](./md/fsCallbackHell.md)
- [파일 추출/내보내기 - ESM, CommonJS 차이점](./md/importExportDiff.md)
- [Method="post" - 어떻게 전송되는 가?](./md/method_post.md)
- [삽입공격 - 어떻게 막아야 할까?](./md/injectionAtt.md)

### 예제

[예제 1 - CRUD 구현(리팩토링)](./맛보기/main.js)   
[예제 2 - SocketIO 튜토리얼](./socketIO/app.js)   
[예제 3 - SocketIO 방 구현](./socketIO/room.js)   

### API
#### 네이버 클라우드 콘솔

  - [네이버 클라우드 콘솔 - 입문 : Secret Manager](./md/NCC_secretManager.md)   
