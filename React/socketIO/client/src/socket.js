// npm socket.io-client
import { io } from 'socket.io-client';

const URL = 'http://localhost:3000/';

export const socket = io(URL, {
  origin: 'http://localhost:5173',
  autoConnect: true,
  path: '/socket.io',
});