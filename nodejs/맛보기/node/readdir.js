const testFolder = './data'; // 실행폴더 기준
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach((item, i) => {
    console.log(item);
  });
});
