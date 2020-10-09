// 客戶端
socket = io.connect("http://localhost:30679")
socket.on('history',(obj) => {
    appendData(obj);
})

// socket.emit('message', data);
