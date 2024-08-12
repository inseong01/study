import { useState } from 'react';

import './connectionState.css';
import PropType from 'prop-types';
import Stack from 'react-bootstrap/esm/Stack';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

function ConnectionState({ isConnected }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Stack direction="horizontal" gap={3} className="col-md-12 mx-auto mb-2">
      <div className={`isConnected ${isConnected ? '' : 'offline'}`}>
        <span className="status"></span> {isConnected ? '연결됨' : '연결끊김'}
      </div>
      <Button className="ms-auto" variant="primary" onClick={() => setModalShow(true)}>
        채팅방
      </Button>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </Stack>
  );
}

export default ConnectionState;

ConnectionState.propTypes = {
  isConnected: PropType.bool,
};
