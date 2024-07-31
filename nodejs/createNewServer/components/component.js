const component = {
  list: function (err, fileList){
    let list = '<ul>';
    if (err) throw err;
    fileList.forEach((file, i) => {
      list += `<li><a href="/?id=${file}">${file}</a></li>`;
    });
    list += '</ul>';
    return list;
  }, HTML: function (title, list, content, controll) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">Node.js</a></h1>
      ${list}
      ${controll}
      ${content}
    </body>
    </html>
    `;
  }
}

module.exports = component;
