var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
const path = require('path');

function delete_process(request, response) {
  let body = '';
  let post;
  let id;
  request.on('data', function(data) {
    body += data;
  });
  request.on('end', function() {
    post = qs.parse(body);
    id = post.id;
    const filteredId = path.parse(title).base;
    console.log('filteredId', filteredId, title);
    fs.unlink(`./data/${filteredId}`, (err) => {
      if (err) throw err;
      console.log(`${filteredId} deleted!`);
      response.writeHead(301, {Location: `/`});
      response.end("success");
    });
  });
};

module.exports = delete_process;
