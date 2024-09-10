// npm socket.io-client
import { io } from 'socket.io-client';

const URL = process.env.REACT_APP_URL;

export const socket = io(URL, {
  origin: process.env.REACT_APP_ORIGIN_URL,
  autoConnect: true,
  path: '/socket.io',
});