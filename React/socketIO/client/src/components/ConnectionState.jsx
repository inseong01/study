import PropType from 'prop-types';

function ConnectionState({ isConnected }) {
  return <p>State: {'' + isConnected}</p>;
}

export default ConnectionState;

ConnectionState.propTypes = {
  isConnected: PropType.bool,
};
