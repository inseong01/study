var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
const path = require('path');
var fsPromises = require('fs/promises');
const sanitizeHtml = require('sanitize-html');

function fsRename(firstfilteredId, sanitizedTitle) {
  return fsPromises.rename(`./data/${firstfilteredId}`, `./data/${sanitizedTitle}`)
}
function fsWriteFile(sanitizedTitle, sanitizedDescribes, response) {
  return new Promise((res, rej) => {
    fs.writeFile(`./data/${sanitizedTitle}`, sanitizedDescribes, 'utf8', (err) => {
      if (err) return rej(err);
      response.writeHead(301, { Location: `/?id=${sanitizedTitle}` });
      response.end();
      return res();
    })
  })
}

function update_process(request, response) {
  let body = '';
  let post;
  let id;
  let title;
  let describes;
  request.on('data', function (data) {
    body += data;
  });
  request.on('end', function () {
    post = qs.parse(body);
    id = post.id;
    title = post.title;
    describes = post.describes;

    const firstfilteredId = path.parse(id).base;
    const secondfilteredId = path.parse(title).base;
    const sanitizedTitle = sanitizeHtml(secondfilteredId);
    const sanitizedDescribes = sanitizeHtml(describes);

    (async() => {
      try {
        const fsRenameFn = await fsRename(firstfilteredId, sanitizedTitle);
        const fsWriteFileFn = await fsWriteFile(sanitizedTitle, sanitizedDescribes, response);
      } catch (e) {
        console.error(e);
      }
    })();
  })
}

module.exports = update_process;
