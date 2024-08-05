var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
const path = require('path');
var fsPromise = require('fs/promises');

const component = require('./component');
let template;

async function home(request, response, queryData) {
  try {
    const fileList = await fsPromise.readdir('./data', {encoding: 'utf8'});
    const list = component.list('', fileList);

    if (queryData.id === undefined) {
      let data = "Hello, Node.js";
      let title = "Welcome";
      template = component.HTML(title, list, `<h2>${title}</h2>${data}`, '<a href="/create">create</a>');
      response.writeHead(200); // 상태 설정
      response.end(template); // 응답 반환값
    } else {
      let title = queryData.id;
      const filteredId = path.parse(title).base;
      const data = await fsPromise.readFile(`./data/${filteredId}`, {encoding: 'utf8'});
      // 글자와 이미지는 한 번에 불러오기 어려움
      template = component.HTML(title, list,
        `<h2>${title}</h2>${data}`,
        `<p>
        <a href="/create">create</a> <a href="/update?id=${title}">update</a>
        <form action="/delete_process" method="post">
          <input type="hidden" name="id" value=${title}>
          <input type="submit" name="delete" value='delete'>
        </form>
        </p>`);
      response.writeHead(200);
      response.end(template);
    }
  } catch (e) {
    throw e;
  }
}

module.exports = home;
