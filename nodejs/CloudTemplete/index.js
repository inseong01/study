import express from 'express';
import cors from 'cors';
import secretManager from './secretManager.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5000'
}))

app.get('/', async (req, res) => {
  // axios 호출 헤더 설정 값 받아오기
  let data = await secretManager();
  // console.log('data1', data);
  // res.send({ data });
  console.log('req', req.hostname);
  res.send('req');
})

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});