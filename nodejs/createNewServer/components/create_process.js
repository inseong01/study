var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
const path = require('path');

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
    fs.writeFile(`./data/${filteredId}`, describes, 'utf8', (err) => {
      // writeFile('저장주소', '저장내용', ['옵션',] '콜백함수')
      if (err) throw err;
      response.writeHead(302, {Location: `/?id=${title}`});
      response.end();
    })
  })
}

module.exports = create_process;
