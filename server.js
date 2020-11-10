const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.static('public'));

const PORT = 3000 | process.env.PORT;

io.on('connection', socket => {
    console.log('new Websocket connection');

    socket.on('currentLocation', currentLocation =>{
        io.emit('location', currentLocation)
    })

})



server.listen(PORT, () => {
    console.log(`Server connected at port ${PORT}`);
})

