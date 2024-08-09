import { socket } from '../socket';

function connect() {
  socket.connect();
  console.log('connect');
}
function disconnect() {
  socket.disconnect();
  console.log('disconnect');
}

function ConnectionManager() {
  return (
    <>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disonnect</button>
    </>
  );
}

export default ConnectionManager;
