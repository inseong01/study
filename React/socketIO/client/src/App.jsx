import { useState } from 'react';
import { useEffect } from 'react';
// npm socket.io-client
import io from 'socket.io-client';

import ConnectionManager from './components/ConnectionManager';
import ConnectionState from './components/ConnectionState';
import Events from './components/Events';
import MyForm from './components/MyForm';
import './App.css';

const URL = 'http://localhost:3000/';

const socket = io(URL, {
  origin: 'http://localhost:5173',
  autoConnect: false,
  path: 'http://localhost:3000/socket.io',
});
console.log(socket);

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }
    function onDisconnect() {
      setIsConnected(false);
    }
    function onFooEvent(value) {
      setFooEvents((perv) => [...perv, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      // removeEvent는 off 적용
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  return (
    <div className="app">
      <ConnectionState isConnected={isConnected} />
      <Events events={fooEvents} />
      <ConnectionManager />
      <MyForm />
    </div>
  );
}

export default App;
