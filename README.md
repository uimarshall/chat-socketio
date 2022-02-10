# chat-socketio

[ReadMe formatting](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

[SocketIO Cheatsheet](https://socket.io/docs/v3/emit-cheatsheet/)

## What Socket.IO is

Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. It consists of:

> a Node.js server: Source | API
> a Javascript client library for the browser (which can be also run from Node.js):

> `socket.io` uses `websockets` behind the scene to make real time communications.
> `websockets` is available in the window global object.

## How it works

The bidirectional channel between the `Socket.IO server` (Node.js) and the `Socket.IO client` (browser, Node.js, or another programming language) is established with a WebSocket connection whenever possible, and will use HTTP long-polling as fallback.

Whenever a user connects to our application, he will connect to the socket server and each user will have a `socketId`. The `socket.IO server` is not performing any `CRUD operations` but is just connected to our computer through `TCP/IP` Protocol.

For instance if computer A(user) is sending event(a sendMessage event) or data to computer B(a user), it sends it to the socket server, the server then takes the event and sees that it is coming from `socketId:1` and the `receiver` is `socketId:2` then it sends the data to the receiver and vice versa.

## A typical code looks like this:

### Sender (Sender sends to server)

_The server socket listens to a `sendMessage` event_

```
socket.on("sendMessage", {
  receiver: socketId:2
  text: "Hey id:2, I am socketId:1?";
})
```

### Receiver (Server sends to receiver)

```
io.to(socketId:2, {
  sender: socketId:1
  text: "Hey id:1, I am id:2 i received your message";
})
```

## WHEN YOU'RE ON THE SOCKET SERVER

### To Send Event To Client

> use `io`

- to send every client
  > use `io.emit`
- to send one client
  > use `io.to(socketID).emit`

### Take Event From Client

> use `socket.on`

## WHEN YOU'RE ON THE CLIENT

### To Send Event To Server

> use `socket.emit`

### Take Event From Server

> use `socket.on`
