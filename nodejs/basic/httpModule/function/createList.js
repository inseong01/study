module.exports = function createList(files) {
  let dir = '';
  for (let file of files) {
    dir += `<a href=/${file.split('.')[0]}>${file.split('.')[0]}</a> `
  }

  return dir;
}
