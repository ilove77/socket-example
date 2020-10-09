// 建立服務端
const express = require('express')
const path = require('path')
const app = express()
const io = require('socket.io').listen(30679)
const SocketHander = require('./socketdb');
app.use('/', express.static(__dirname))

io.on('connection', async (socket) => {

    console.log('a user connected');

    socketHander = new SocketHander();

    socketHander.connect();

    const history = await socketHander.getMessages()

    // socket.emit('history', history)
    const socketid = socket.id;
    io.to(socketid).emit('history', history);
});
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.listen(30678)
console.log("成功")
