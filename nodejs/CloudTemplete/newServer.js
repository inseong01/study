import express from 'express';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);
const port = 1234;

app.get('/', (req, res) => {
  res.send('Hello world');
})

server.listen(port, `0.0.0.0`, () => console.log(`Server is running on port ${port}`))