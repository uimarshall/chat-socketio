import express from 'express';
require('dotenv').config();
import chat from '../socket/chat';

// app
const app = express();
// Create server instance
const http = require('http').createServer(app);

// socket io
const io = require('socket.io')(http, {
  path: '/socket.io/',
  cors: {
    origin: ['https://localhost:3000'],
    method: ['GET', 'POST'],
    allowedHeaders: ['content-type'],
  },
});

// Middlewares
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

// Test API
app.get('/api/', (req, res) => {
  res.send('Just testing!');
});

// Socket
chat(io);

const port = process.env.PORT || 5000;
http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
