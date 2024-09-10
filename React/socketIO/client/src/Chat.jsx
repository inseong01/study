import { createContext, useState } from 'react';
import { useEffect } from 'react';
// npm socket.io-client
import { socket } from './socket';

import ConnectionState from './components/ConnectionState';
import Events from './components/Events';
import MyForm from './components/MyForm';

import './App.css';
import Stack from 'react-bootstrap/esm/Stack';

export const ThemeContext = createContext();

function Chat() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    function onConnect() {
      socket.emit('announce', socket.id, 'online');
      setIsConnected(true);
    }
    function onDisconnect() {
      socket.emit('announce', socket.id, 'offline');
      setIsConnected(false);
    }
    function onFooEvent(value) {
      // 서버 데이터 받는 곳
      setFooEvents((perv) => [...perv, value]);
    }
    function onUserEvent(value) {
      setUserInfo(value);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);
    socket.on('user', onUserEvent);

    return () => {
      // removeEvent는 off 적용
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
      socket.off('user', onUserEvent);
    };
  }, []);

  return (
    <ThemeContext.Provider value={userInfo}>
      <Stack
        gap={3}
        className="col-md-8 mx-auto h-100 border border-ligth rounded-3 p-3 d-flex justify-content-between"
      >
        <ConnectionState isConnected={isConnected} userInfo={userInfo} />
        <Events events={fooEvents} />
        <MyForm isConnected={isConnected} />
      </Stack>
    </ThemeContext.Provider>
  );
}

export default Chat;
