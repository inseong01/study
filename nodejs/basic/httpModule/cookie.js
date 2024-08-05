const { readFile } = require('fs/promises');
const http = require('http');
const qs = require('querystring');

// function parseCookies(request) {
//   const list = {};
//   const cookieHeader = request.headers?.cookie;
//   if (!cookieHeader) return list;

//   cookieHeader.split(`;`).forEach(function (cookie) {
//     let [name, ...rest] = cookie.split(`=`);
//     name = name?.trim();
//     if (!name) return;
//     const value = rest.join(`=`).trim();
//     if (!value) return;
//     list[name] = decodeURIComponent(value);
//   });

//   return list;
// }
// 쿠키 받아오기
const server = http.createServer(async (req, res) => { // cookie
  const pathName = req.url;
  const cookie = req.headers.cookie;

  if (pathName === '/') {
    if (cookie) {
      res.writeHead(200);
      res.end(`This is new cookie! ID: ${cookie}`);
    } else {
      res.writeHead(302, { Location: '/login' });
      res.end();
    }
  } else if (pathName === '/login') {
    const content = await readFile('./nodejs/basic/httpModule/page/login.html', { encoding: 'utf8' });
    let cookieId;
    let body = '';

    req.on('data', (data) => {
      body += data;
    });
    req.on('end', () => {
      cookieId = qs.parse(body).id;
    });
    console.log('cookieId', cookieId);

    res.writeHead(200, { 'Set-Cookies': `mycookieId=${cookieId}` });
    res.end(content);
  }

})
server.listen(8000, () => console.log('8000 is opened'));