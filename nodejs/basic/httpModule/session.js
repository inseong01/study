const { readFile } = require('fs/promises');
const http = require('http');

function parseCookies(cookie) {
  let list = {};
  if (!cookie) return;

  cookie.split(`;`).forEach((c) => {
    let [name, ...rest] = c.split(`=`);
    name = name?.trim();
    if (!name) return;
    const value = rest.join(`=`).trim();
    if (!value) return;
    list[name] = decodeURIComponent(value);
  });

  return list;
}

const session = {}; // 1. 중요한 정보 모음 객체 생성

const server = http.createServer(async (req, res) => {
  const pathName = req.url;
  const cookies = parseCookies(req.headers.cookie);
  console.log('cookies', cookies);

  if (pathName.startsWith('/login')) {
    const url = new URL(pathName, 'http://localhost:8000/');
    let cookieId = url.searchParams.get('id');
    let expires = new Date();
    expires.setMinutes(expires.getMinutes() + 1);

    const uniqueCode = Date.now();
    session[uniqueCode] = { // 2. 특정 값으로 보호
      cookieId, expires
    };

    res.writeHead(302, { // 3. 중요한 정보를 직접 올리지 않음
      Location: '/', 'Set-Cookie': [`session=${uniqueCode}; Expires=${expires.toUTCString()}; HttpOnly`, `term=20;`]
    });
    res.end();
  } else if (cookies?.session && session[cookies.session].expires > Date.now()) {
    res.writeHead(200, { Location: '/' });
    res.end(`Hi ${session[cookies.session].cookieId}`); // 4. 저장되어 있는 객체에서 값 불러옴
  } else {
    try {
      const content = await readFile('./nodejs/basic/httpModule/page/login.html');
      res.writeHead(200);
      res.end(content);
    } catch (error) {
      res.writeHead(500);
      res.end(error);
    }
  }
})
server.listen(8003, () => console.log('8003 is opened'));