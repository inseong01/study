// import http from 'http';

import axios from "axios";
import HOST from "./SERVER/HOST.js";

// const options = {
//   hostname: HOST,
//   port: 3000,
//   path: '/',
//   method: 'GET'
// };

// const req = http.request(options, (res) => {
//   let data = '';

//   res.on('data', (chunk) => {
//     data += chunk;
//   });

//   res.on('end', () => {
//     console.log(data);
//   });
// });

// req.on('error', (e) => {
//   console.error(`Problem with request: ${e.message}`);
// });

// req.end();

// fetch
// const url = `http://${HOST}:1234/`
// fetch(url)
//   .then(res => {
//     return res.text()
//   })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.error('에러', err);
//   })

// axios
const config = {
  proxy: {
    protocol: 'http',
    host: HOST,
    port: 1234,
  },
}
axios.get('/', config)
  .then(res => {
    // const data = parse(res.data);
    console.log(res.data)
  })
  .catch(err => {
    console.error('에러', err);
  })