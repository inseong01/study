import express from 'express';
import path, { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { readFile } from 'fs/promises';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname)));


app.get('/', async (req, res) => {
  // axios 호출 헤더 설정 값 받아오기
  const conent = await readFile(resolve('./secretManager.js'));
  console.log('conent', conent);
  res.send('hi');
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});