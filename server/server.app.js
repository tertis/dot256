var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var rootPath = __dirname + "/..";
var clientDir = rootPath + "/app";

console.log("string server..");

app.use(express.static(clientDir));
app.get('/', function(req, res){
    res.sendFile(clientDir + '/index.html');
});

app.listen(port);
console.log('server started.. port:' + port);