import { useState } from 'react';
import { socket } from '../socket';

console.log('socket', socket);

function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    console.log('submit');
    setIsLoading(true);

    socket.timeout(1000).emit('create-something', value, () => setIsLoading(false));
  }
  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <input type="submit" disabled={isLoading} value="Submit" />
      </form>
    </>
  );
}

export default MyForm;
