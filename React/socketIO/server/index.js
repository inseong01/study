import express from 'express';
import cors from 'cors';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);

// cors 문제
// https://url.kr/bw6rs3
app.use(cors({
  origin: "http://localhost:5173",
}));

app.get('/', (req, res) => {
  res.send('?');
})

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('socket is connected');
})

app.listen(3000, () => console.log('3000 is opened'));