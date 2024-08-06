const { readFile } = require('fs/promises');
const http = require('http');

function parseCookies(cookie) { // cookie 값이 2개 이상이어야 ; 붙음
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

const server = http.createServer(async (req, res) => { // cookie
  const pathName = req.url;
  const cookie = parseCookies(req.headers.cookie);
  console.log('cookies', cookies);

  if (pathName.startsWith('/login')) {
    const url = new URL(pathName, 'http://localhost:8000/');
    let cookieId = url.searchParams.get('id');
    let expires = new Date();
    expires.setMinutes(expires.getMinutes() + 1);

    res.writeHead(302, { // 여러 개의 쿠키는 배열로 생성가능
      Location: '/', 'Set-Cookie': [`name=${encodeURIComponent(cookieId)}; Expires=${expires.toUTCString()}; HttpOnly`, `id=asdfdsddwde;`]
    });
    res.end();
  } else if (cookie?.name) {
    res.writeHead(200, { Location: '/' });
    res.end(`Hi ${cookie.name}`);
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
server.listen(8002, () => console.log('8002 is opened'));