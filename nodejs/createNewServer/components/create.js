var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

const component = require('./component');
let template;

function create(request, response) {
  fs.readdir('./data', (err, fileList) => { // 비동기 실행
    let list = component.list(err, fileList);
    let title = "create";
    template = component.HTML(title, list, `
      <form action="/create_process" method="post">
      <div>
        <input type="text" name="title" placeholder="title">
      </div>
      <div>
        <textarea name="describes" placeholder="describes"></textarea>
      </div>
      <div>
        <input type="submit">
      </div>
    </form>
    `, '');
    response.writeHead(200); // 상태 설정
    response.end(template); // 응답 반환값
  });
}

module.exports = create;
