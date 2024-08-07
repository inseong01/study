require('dotenv').config();
/*
  .env
    - npm i dotenv : 적용해야 인식
    - .env 파일 : 키-값 선언, 세미콜론 생략
    - process.env.[지정한 키] : 환경변수 불러오기
*/
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');

const app = express();

// 환경변수
app.set('port', 3001);

// 미들웨어
app.use(morgan('dev'));
/*
  morgan()
    - 'dev'
      개발용, status/ms/byte 간단한 정보
    - 'combined'
      배포용, ip/날짜시간/... 자세한 정보
*/
app.use(cookieParser(process.env.COOKIE_KEY));
/*
  cookieParser()
    문자열이 아닌 객체로 쿠키 조작 가능
*/
app.use('/public', express.static('public'));
app.use(express.json()); // json 데이터
app.use(express.urlencoded({ extended: true })); // form 데이터
/*
  body-parser 
  (express 내장되어 있음, 설치 X)
    - express.static() : 정적파일/폴더 경로 설정, 미들웨어 위치 중요
    - express.json() : json 데이터 파싱
    - express.urlencoded : form 데이터 파싱, extended = qs: true || querystring

    ->> express 내장 객체
    ->> 실행 성공 - next(), 실행 실패 - 404, static은 성공하면 next() 호출 X 
    ->> request에서 데이터 바로 꺼내서 사용 가능
    ->> 미들웨어 순서 따라 결과 다를 수 있음
*/
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_KEY,
  cookie: {
    maxAge: 10000,
    httpOnly: true,
    path: '/',
  },
  name: 'session-cookie'
}));
/*
  express-session
    - 세션 객체 설정
      - resave
      : 요청이 왔을 때 다시 저장 여부
      - saveUnitialized
      : 세션에 저장할 내역이 없어도 저장 여부
    
      - secret
      : 암호화 키
      
      - cookie
        - 암호화 된 값으로 표기
        - 'secret' 옵션 필요
      - name
      : 세션 이름

    - 세션 객체 생성
    : 키-값으로 객체 생성
*/


// 라우터
app.get('/', (req, res) => {
  req.session.nameValue = 'first-session-cookie';
  req.session.idValue = 'first-session-cookie2';

  console.log('process.env.COOKIE_KEY', process.env.COOKIE_KEY)
  res.sendFile(path.join(__dirname, './page/index.html'));
});
app.get('/multer', (req, res) => {
  res.sendFile(path.join(__dirname, './page/multer.html'));
});

// Multer
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
const upload = multer({ storage: storage });
app.post('/upload', upload.array('image', 3), (req, res, next) => {
  let content = req.file; // upload.sigle()
  let contents = req.files; // upload.array() || upload.fields()
  res.send(contents);
  /*
    upload
      .single(fieldname)
        - fieldname: 명시된 단수 파일 전달 받음, req.file
      .array(fieldname[, maxCount: Number])
        - fieldname: 명시된 복수 파일 전달 받음, req.files
          maxCount 초과 시 error 출력
      .fields(fields)
        - fields: 명시된 여러 파일 전달 받음, req.files
          예) [{name: 'image', maxCount: 4}, {name: 'video', maxCount: 3} ...]
    
    https://github.com/expressjs/multer/blob/master/doc/README-ko.md
  */
});

app.post('/about', (req, res) => {
  const id = req.body.id
  const sessionID = req.sessionID;
  const sessionName = req.session.nameValue;

  res.send(`Hi, ${id}. Session name is "${sessionName}". SessionID is "${sessionID}".`);
});

app.listen(app.get('port'), () => console.log('3001 is opened'));
