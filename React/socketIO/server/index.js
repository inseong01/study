import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);

const io = new Server(server, {
  // 클라이언트와 서버가 서로 프로토콜, 호스트, 포트가 다르다면 CROS 발생
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {

  socket.on('chat', (id, msg) => {
    socket.emit('foo', { id: id, msg });
  });

  socket.on('announce', (id, msg) => {
    console.log(id, msg);
    if (msg.includes('online')) {
      socket.emit('foo', { id: 'io', msg: `${id}님이 입장하셨습니다.` });
    }
  });

  socket.on('join', async (id, room) => {
    await socket.join(room);
    io.to(room).emit(`foo`, { id: 'io', msg: `${room}번 방에 입장하셨습니다.` });

    const sids = await socket.adapter.sids.get(id);
    // 소켓은 json 전달 불가능
    const sidsArr = Array.from(sids);
    io.emit(`user`, { id: 'io', sids: sidsArr });
  });
  socket.on('leave', async (id, room) => {
    await socket.leave(room);
    socket.to(room).emit(`foo`, { id: 'io', msg: `${id}님이 퇴장했습니다.` });

    const sids = await socket.adapter.sids.get(id);
    const sidsArr = Array.from(sids);
    io.emit(`user`, { id: 'io', sids: sidsArr });
  });
});

io.on('disconnect', () => {
  socket.on('announce', (id, msg) => {
    if (msg.includes('offline')) {
      socket.emit('foo', `${id}님이 퇴장하셨습니다`);
    }
  });
})

server.listen(3000, () => console.log('3000 is opened'));