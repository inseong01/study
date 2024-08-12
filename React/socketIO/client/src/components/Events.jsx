import PropType from 'prop-types';
import './event.css';

import { socket } from '../socket';
import { useEffect, useRef } from 'react';

function Events({ events }) {
  const msgRef = useRef(null);

  useEffect(() => {
    if (!msgRef.current) return;
    const scrollHeight = msgRef.current?.scrollHeight;
    msgRef.current.scrollTop = scrollHeight;
  }, [events]);

  return (
    <div className="msg_wrap" ref={msgRef}>
      {events.map((event, idx) => {
        let idClassName;

        if (event.id === 'io') {
          idClassName = 'system';
        } else if (event.id === socket.id) {
          idClassName = 'myId';
        } else {
          idClassName = 'otherId';
        }

        return (
          <div className={`msg ${idClassName}`} key={idx}>
            <div className="content">{event.msg}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Events;

Events.propTypes = {
  events: PropType.array,
};
