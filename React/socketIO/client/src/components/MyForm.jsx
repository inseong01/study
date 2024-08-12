import { useRef, useState } from 'react';
import { socket } from '../socket';

import PropsType from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function connect() {
  socket.connect();
  console.log('connect');
}
function disconnect() {
  socket.disconnect();
  console.log('disconnect');
}

function MyForm({ isConnected }) {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    socket.emit('chat', socket.id, value);
    socket.timeout(1000).emit('create-something', value, () => setIsLoading(false));
    inputRef.current.value = '';
  }
  function onChange(e) {
    setValue(e.target.value);
  }
  function onClickInput() {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
  }

  return (
    <Form onSubmit={onSubmit} className="mt-2">
      <Stack direction="horizontal" gap={3} className="col-md-12 mx-auto">
        <Form.Control className="me-auto" onChange={onChange} ref={inputRef} placeholder="메시지 입력..." />
        <Button className="w-25 px-0" variant="secondary" disabled={isLoading} type="submit">
          전송
        </Button>
        <div className="vr" />
        <Button className="w-50 px-0" variant={isConnected ? `warning` : 'success'} onClick={onClickInput}>
          {isConnected ? '연결해제' : '연결'}
        </Button>
      </Stack>
    </Form>
  );
}

export default MyForm;

MyForm.propTypes = {
  isConnected: PropsType.bool,
};
