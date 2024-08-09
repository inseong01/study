import express from 'express';
import { createServer } from 'node:http';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Server } from 'socket.io';

const room = express();
const server = createServer(room);

const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

// io -> namespace -> room -> socket 
room.get('/', (req, res) => {
  res.sendFile(join(__dirname, './page/room.html'));
});

io.on('connection', (socket) => {
  socket.broadcast.emit('chat message', '', `${socket.id} 님이 입장했습니다.`);

  socket.on('chat message', (room, msg, id) => {
    // 방 입장
    socket.join(room);

    // 해당 방으로 전달(입장하지 않으면 보이지 않음)
    if (room.toString().length === 1) {
      io.to(room).emit('chat message', room, msg);
    } else if (room.toString().length > 1) {
      socket.broadcast.to(room).emit('chat message', room, msg, id);
    } else {
      io.emit('chat message', room, msg);
    }
    console.log(socket.adapter)
  });

  socket.on('leave', (room) => {
    // 방 나가기(string)
    socket.leave(`${room}`);
    io.emit('chat message', '', `${socket.id} 님이 방 ${room} 을 나갔습니다.`);
  });

  /*
    rooms: Map(3) {
      '사용자1' => Set(1) { '사용자1' },
      '사용자2' => Set(1) { '사용자2' },
      '1번방' => Set(1) { '사용자1' }
    },
    sids: Map(2) {
      '사용자1' => Set(1) { '사용자1', '1번방' },
      '사용자2' => Set(1) { '사용자2' }
    },

    rooms
    접속 가능한 방 목록
    기본적으로 접속한 소켓ID가 적혀있음 => 개인 방 
    [set] : 방에 접속되어 있는 소켓ID 배열, Set(0)이면 해당 방 사라짐
    **본인이 나가고 아무도 없으면(Set(0)) 자신의 방도 사라질 수 있음
    
    sids
    소켓ID 목록
    [set] : 각 ID가 접속한 있는 방 배열

    join(), leave()
    방 들어가기(생성) / 나가기

    to(room : String)
    메시지 전달할 방 지정하기

    발신 client ID
    클라이언트의 코드가 있는 곳에서 소켓ID 얻음 (현 html 파일)

  */
});

server.listen(3002, () => console.log('new server 3002'));