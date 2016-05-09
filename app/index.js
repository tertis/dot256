var socket = io.connect()
socket.on('connect', function (data) {
    socket.emit('join', 'Hello World from client');
});

socket.on('messages', function (data) {
    alert(data);
});