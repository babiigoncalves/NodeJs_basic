var http = require('http');
var date = require('./myFirstModule');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Currently date and time: " + date.myDateTime());
    res.end();

}).listen(8080);

console.log('Servidor iniciado em localhost:8080. Ctrl+C para encerrar');