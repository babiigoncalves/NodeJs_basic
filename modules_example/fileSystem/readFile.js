var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
    fs.readFile('example.html', function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();    
    });
}).listen(4000);

console.log('Servidor iniciado em localhost:4000. Ctrl+C para encerrar');