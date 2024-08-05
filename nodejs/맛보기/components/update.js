var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
const path = require('path');
const fsPromise = require('fs/promises');

const component = require('./component');
let template;

async function update(request, response, queryData) {
  try {
    let title = queryData.id;
    const fileList = await fsPromise.readdir('./data');
    const list = component.list('', fileList);
    const filteredId = path.parse(title).base;
    const data = await fsPromise.readFile(`data/${filteredId}`,   {encoding:  'utf8'});
    template = component.HTML(title, list,
      `<form action="/update_process" method="post">
      <div>
        <input type="hidden" name="id" value=${title}>
        <input type="text" name="title" placeholder="title" value=${title}>
      </div>
      <div>
        <textarea name="describes" placeholder="describes">${data}</textarea>
      </div>
      <div>
        <input type="submit">
      </div>
    </form>`,
      `<p>
      <a href="/create">create</a> <a href="/update?id=${title}">update</a>
      <form action="/delete_process" method="post">
        <input type="hidden" name="id" value=${title}>
        <input type="submit" name="delete" value='delete'>
      </form>
      </p>`);
    response.writeHead(200);
    response.end(template);
  } catch (err) {
    console.error(err);
  }
}

module.exports = update;
