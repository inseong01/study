import PropType from 'prop-types';

function Events({ events }) {
  return (
    <ul>
      {events.map((event, idx) => {
        <li key={idx}>{event}</li>;
      })}
    </ul>
  );
}

export default Events;

Events.propTypes = {
  events: PropType.array,
};
