// npm socket.io-client
import { io } from 'socket.io-client';

const REQUEST_URL = import.meta.env.VITE_URI;
console.log(REQUEST_URL)
export const socket = io(REQUEST_URL);