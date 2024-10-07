const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const redisAdapter = require('socket.io-redis');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

io.adapter(redisAdapter({ host: 'redis', port: 6379 }));

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.get('/', (req, res) => {
  res.send('Hello from a scalable Socket.io app!');
});

server.listen(8000, () => {
  console.log('Socket.io app is running on port 8000');
});
