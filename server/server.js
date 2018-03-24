const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require ('./utils/message')
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3001;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newMessage', {
    //     from: 'Admin',
    //     text: 'Welcome to chat app',
    //     createdAt: new Date().getTime()
    // });

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

   // socket.broadcast.emit('newMessage', {
   //     from: 'Admin',
   //     text: 'New user joined',
   //     createdAt: new Date().getTime()
   // });



    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server');
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});


server.listen(port, () => {
   console.log(`Server is up on port ${port}`);
});


