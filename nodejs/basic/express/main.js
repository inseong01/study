const express = require('express');
const path = require('path');

const app = express();
const port = 1000;

// 환경변수, 미들웨어
app.set('port', port);
app.use((req, res, next) => {
  // console.log('This is middleware');
  next();
}, (req, res, next) => {
  // throw new Error;
  next();
})

// 라우터
app.get('/', (req, res) => {
  console.log('req', req.headers);
  console.log('res', res.getHeaders());
  res.sendFile(path.join(__dirname, './page/index.html'));
});
app.get('/post', (req, res) => {
  res.send('Post express.');
});
app.get('/delete', (req, res) => {
  res.send('Delete express.');
});
app.get('/link', (req, res) => {
  const host = req.headers.host;
  const url = `http://223.130.158.46:3000/`

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Custom-Header': host
    },
  }
  fetch(url, options)
    .then(res => {
      return res.text()
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error('에러', err);
    })
  res.send(`This is link page`);
});
app.use((req, res, next) => {
  res.send('Something is wrong');
})

// 에러처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err, 'Something is wrong');
  res.send('Error');
})

app.listen(app.get('port'), () => console.log(`http://localhost:${port} is opened`));

// nodemon
//  프로젝트 파일 변경 감지
//  실행: npx nodemon <파일명>

/* express 문서
  1. 기초 라우팅
    app.METHOD(PATH, HANDLER)
      METHOOD: get post send put post delete : 소문자 작성
      PATH: 경로
      HANDLER: 경로 도착 시 실행되는 함수 

  2. set(키, 값)
    환경변수 지정
    >> get('키'), 값 불러오기 가능 

  3. HTML 읽기
    sendFile(): 받은 경로 파일로 변환
    path: 파일과 폴더 경로
      .join(): 부여한 인수 순서대로 결합

  4. 미들웨어
    요청-응답 주기 중 접근 권한을 갖는 함수(.use() 미들웨어 X 결합 O)
    - 일반
      .use([path,] (req, res, next) => {})
        - path: 지정한 경로에 적용
        - req: 요청
        - res: 반응
        - next: 다음 라우터
      
    - 에러 처리
      .use([path,] (err, req, res, next) => {})
      매개변수가 4개 있어야 함

  5. 주의사항
    - 한번의 요청은 한번의 반응
    - (req, res) writeHead, end 사용자제
      : 편의를 위해 하나로 만든 .send() 사용

  6. 의문
    - 에러처리, status처리는 서로 다른 건가?
      : 에러처리는 인수를 4개를 갖는다.
      : status처리는 path를 가지고 있지 않는 라우터
*/