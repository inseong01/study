import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname)));


app.get('/', (req, res) => {
  // axios 호출 헤더 설정 값 받아오기
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});