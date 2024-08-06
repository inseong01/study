const { writeFile, readdir, readFile, unlink } = require('node:fs/promises');
const http = require('node:http');
const qs = require('querystring');

const server = http.createServer(async (req, res) => { // CRD
  const pathName = req.url;

  if (pathName === '/') {
    const content = await readFile('./nodejs/basic/httpModule/page/hello.html', { encoding: 'utf-8' });
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // 응답헤더 설정
    res.end(content);
  } else if (pathName === '/add') {
    const content = await readFile('./nodejs/basic/httpModule/page/add.html', { encoding: 'utf-8' });
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(content);
  } else if (pathName === "/add_process") {
    let body = '';
    req.on('data', async function (data) { // data로 request 받고
      body += data;
    });
    req.on('end', async function () { // end로 data 출력
      const parsedData = qs.parse(body);
      await writeFile(`./nodejs/basic/httpModule/data/${parsedData.id}`, `${parsedData.subscription}`);
    })
    res.writeHead(302, { Location: `/` });
    res.end();
  } else if (pathName === "/delete_process") {
    const files = await readdir('./nodejs/basic/httpModule/data');
    await unlink(`./nodejs/basic/httpModule/data/${files[0]}`);
    res.writeHead(302, { Location: `/` });
    res.end();
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
})

server.listen(8001, () => console.log('8001 is opened'));