// https://socket.io/docs/v4/tutorial/introduction

import express from 'express';
import { createServer } from 'node:http';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Server } from 'socket.io';
import squlite3 from 'sqlite3';
import { open } from 'sqlite';

// // database
// const db = await open({
//   filename: 'chat.db',
//   driver: squlite3.Database
// });
// // table 생성
// await db.exec(`
//   CREATE TABLE IF NOT EXISTS messages (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     client_offset TEXT  UNIQUE,
//     content TEXT
//   );
// `);

const app = express();
const server = createServer(app);
// socket.io 선언
const io = new Server(server, {
  pingTimeout: 60000,
  pingInterval: 25000,
  connectionStateRecovery: {},
});

// ESM, __dirname 선언해야 사용가능
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, './page/index.html'));
});

// 소켓 실행
io.on('connection', async (socket) => {
  // 접속된 소켓 id 전송
  socket.broadcast.emit('online', socket.id); // emit('이벤트 이름', '전송 데이터')
  io.emit('chat message', '', '환영합니다.');

  // 소켓 이벤트
  socket.on('chat message', async (nick, msg) => { // 'chat message' event 실행마다
    // // db, messages 삽입
    // let result;
    // try {
    //   result = await db.run('INSERT INTO messages (content) VALUES (?)', msg);
    // } catch (err) {
    //   console.error(err);
    //   return;
    // }
    io.emit('chat message', nick, msg); // emit(key, value)
    // io.emit('chat message', msg, result.lastID); // emit(key, value)
    // io.timeout(1000).emit('hi', 'This is an emit from server'); // timeout은 언제 사용?
    // socket.broadcast.emit('hi', 'This is an emit from server');
  });

  socket.on('typing', nick => {
    io.emit('typing', nick);
  });

  socket.on('disconnecting', () => {
    socket.broadcast.emit('offline', socket.id);
  });
  /*  
      전체 클라이언트
      io.emit('hi', 'This is an emit from server'); 

      현재 클라이언트 제외 전체 클라이언트(창 2개 이상)
      socket.broadcast.emit('hi', 'This is an emit from server');
   */
  // db 불러오기
  // if (!socket.recovered) {
  //   try {
  //     await db.each('SELECT id, content FROM messages WHERE id > ?',
  //       [socket.handshake.auth.serverOffset || 0],
  //       (_err, row) => socket.emit('chat message', row.content, row.id)
  //     )
  //   } catch (e) {
  //     console.err(e);
  //   }
  // }
});

server.listen(3001, () => {
  console.log('server running at 3001');
});

/*
    rooms: Map(2) {
      '2Bcf__4-4ncIfslsAAAN' => [Set],
      '0RLBQGi2jtmLOB2qAAAQ' => [Set]
    },
    sids: Map(2) {
      '2Bcf__4-4ncIfslsAAAN' => [Set],
      '0RLBQGi2jtmLOB2qAAAQ' => [Set]
    },
    
*/