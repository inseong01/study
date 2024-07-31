var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

const component = require('./components/component');
const delete_process = require('./components/delete_process');
const update_process = require('./components/update_process');
const update = require('./components/update');
const create_process = require('./components/create_process');
const create = require('./components/create');
const home = require('./components/home');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; // ?id=HTML
    const pathName = url.parse(_url, true).pathname;

    if(pathName === '/'){
      home(request, response, queryData);
    } else if(pathName === '/create') {
      create(request, response);
    } else if (pathName === '/create_process') {
      create_process(request, response);
    } else if(pathName === '/update') {
      update(request, response, queryData);
    } else if (pathName === '/update_process') {
      update_process(request, response);
    } else if (pathName === '/delete_process') {
      delete_process(request, response);
    } else {
      response.writeHead(404);
      response.end("Not Found");
    }
    // __dirname: 현재 폴더명
    // url: 현재 열린 파일명
});
// 어떤 숫자든 되나보네
app.listen(3000);
