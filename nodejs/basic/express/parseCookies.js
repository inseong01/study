function parseCookies(cookie) { // cookie 값이 2개 이상이어야 ; 붙음
  let list = {};
  if (!cookie) return;

  cookie.split(`;`).forEach((c) => {
    let [name, ...rest] = c.split(`=`);
    name = name?.trim();
    if (!name) return;
    const value = rest.join(`=`).trim();
    if (!value) return;
    list[name] = decodeURIComponent(value);
  });

  return list;
}

module.exports = parseCookies;