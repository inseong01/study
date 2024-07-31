var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
const path = require('path');

function update_process(request, response) {
  let body = '';
  let post;
  let id;
  let title;
  let describes;
  request.on('data', function(data) {
    body += data;
  });
  request.on('end', function() {
    post = qs.parse(body);
    id = post.id;
    title = post.title;
    describes = post.describes;
    console.log('id:', id, 'title:', title);
    const firstfilteredId = path.parse(id).base;
    const secondfilteredId = path.parse(title).base;
    fs.rename(`./data/${firstfilteredId}`, `./data/${secondfilteredId}`, (err) => {
      // ('현주소', '변경 주소', 콜백)
      if (err) throw err;
      fs.writeFile(`./data/${secondfilteredId}`, describes, 'utf8', (err) => {
        if (err) throw err;
        response.writeHead(301, {Location: `/?id=${secondfilteredId}`});
        response.end();
      })
    })
  })
}

module.exports = update_process;
