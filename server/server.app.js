var express = require('express');
var http = require('http');
var path = require('path');

var port = process.env.PORT || 3000;
var rootPath = __dirname + "/..";
var clientDir = rootPath + "/app";

var app = express();

// initialize express
app.use(express.static(clientDir));
app.get('/', function(req, res){
    res.sendFile(clientDir + '/index.html');
});

var httpServer=http.createServer(app).listen(port, function(req,res){
  console.log('Socket IO server has been started');
});

var io = require('socket.io').listen(httpServer);

io.sockets.on('connect', function(client) {  
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
        client.emit('messages', 'Hello from server');
    });
});

console.log('server started.. port:' + port);