import PropType from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './connectionState.css';

import { socket } from '../socket';
import Stack from 'react-bootstrap/esm/Stack';
import { useContext } from 'react';
import { ThemeContext } from '../Chat';

function joinRoom(room) {
  return () => {
    console.log(room);
    socket.emit('join', socket.id, room);
  };
}
function leaveRoom(room) {
  return () => {
    console.log(room);
    socket.emit('leave', socket.id, room);
  };
}

function MyVerticallyCenteredModal({ onHide, show }) {
  const user = useContext(ThemeContext);

  return (
    <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">채팅방</Modal.Title>
      </Modal.Header>

      <Stack direction="horizontal" gap={3} className="col-md-10 mx-auto mt-3">
        <div className="w-50">1번 방</div>
        <div className="vr" />
        <Button className="w-50 px-0" variant="success" type="submit" onClick={joinRoom(1)}>
          연결
        </Button>
        {user.sids?.includes(1) && (
          <Button className="w-50 px-0" variant="warning" onClick={leaveRoom(1)}>
            나가기
          </Button>
        )}
      </Stack>
      <Stack direction="horizontal" gap={3} className="col-md-10 mx-auto mt-3">
        <div className="w-50">2번 방</div>
        <div className="vr" />
        <Button className="w-50 px-0" variant="success" type="submit" onClick={joinRoom(2)}>
          연결
        </Button>
        {user.sids?.includes(2) && (
          <Button className="w-50 px-0" variant="warning" onClick={leaveRoom(2)}>
            나가기
          </Button>
        )}
      </Stack>
      <Stack direction="horizontal" gap={3} className="col-md-10 mx-auto my-3">
        <div className="w-50">3번 방</div>
        <div className="vr" />
        <Button className="w-50 px-0" variant="success" type="submit" onClick={joinRoom(3)}>
          연결
        </Button>
        {user.sids?.includes(3) && (
          <Button className="w-50 px-0" variant="warning" onClick={leaveRoom(3)}>
            나가기
          </Button>
        )}
      </Stack>
      <Modal.Footer>
        <Button onClick={onHide}>닫기</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;

MyVerticallyCenteredModal.propTypes = {
  onHide: PropType.func,
  show: PropType.bool,
  userInfo: PropType.object,
};
