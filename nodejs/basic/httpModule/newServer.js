const http = require('node:http');
const server = http.createServer((req, res) => { // new server
  // 1번째 인자, http 정보 - req로 정보 받음
  // 2번째 인자, http 반응 - res로 요청 보냄
  res.writeHead(200, { 'Content-Type': 'text/plain' }) // text/plain 일반 문자, text/html html
  res.end('Hi');
})

server.listen(8080);