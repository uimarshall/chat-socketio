// import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';
// socket server URL -- This will be our server.
// You can use either https or wss (respectively, http or ws).
const URL = 'https://localhost:8000';
const socket = io(URL, {
  path: '/socket.io/',
  reconnection: false,
});
function App() {
  console.log('socket', socket);
  return (
    <div className="App">
      <h1>Socket io</h1>
    </div>
  );
}

export default App;
