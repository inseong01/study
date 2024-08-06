const http = require('http');
const https = require('https');
const http2 = require('http2');
const fs = require('node:fs');

// http
http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end('This is the first HTTP');
  })
  .listen(8004, () => console.log('8004 is opened'));

// https
const opts = {
  key: fs.readFileSync('C:/Windows/System32/localhost-key.pem'),
  cert: fs.readFileSync('C:/Windows/System32/localhost.pem'),
}
https
  .createServer(opts, (req, res) => {
    res.writeHead(200);
    res.end('This is an HTTPS');
  })
  .listen(8005, () => console.log('8005 is opened'));

// http2
const server = http2.createSecureServer(opts);
server
  .on('stream', (stream, headers) => {
    stream.respond({
      'content-type': 'text/plain; charset=utf-8',
      ':status': 200,
    });
    stream.end('This is the second HTTP2');
  })
  .listen(8006, () => console.log('8006 is opened'));

// https, http2는 opt 필요. 인증서 발급 해야됨. 왜 안 됨?