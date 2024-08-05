var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
const path = require('path');
const sanitizeHtml = require('sanitize-html');

function create_process(request, response) {
  let body = '';
  let post;
  let title;
  let describes;
  request.on('data', function(data) { // data = buffer 값
    body += data; // title=1&describes=123 (string)
  })
  request.on('end', function() {
    post = qs.parse(body);
    title = post.title; // 1
    describes = post.describes; // 123
    const filteredId = path.parse(title).base;
    const sanitizedTitle = sanitizeHtml(filteredId);
    const sanitizedDescribes = sanitizeHtml(describes);
    // 폴더명으로 지정할 수 없는 문자는 입력 받으면 오류
    // path.parse(), 첫 부등호를 제거
    // sanitizeHtml 부등호를 유니코드화 한다.
    // <script> 안에 있는 내용은 전부 필터링 됨
    fs.writeFile(`./data/${sanitizedTitle}`, sanitizedDescribes, 'utf8', (err) => {
      // writeFile('저장주소', '저장내용', ['옵션',] '콜백함수')
      if (err) throw err;
      response.writeHead(302, {Location: `/?id=${sanitizedTitle}`});
      response.end();
    })
  })
}

module.exports = create_process;
