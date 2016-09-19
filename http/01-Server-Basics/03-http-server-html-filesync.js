var http = require('http'); 
var fs = require('fs'); // leitura e escrita
var index = fs.readFileSync('03-html.html'); //leitura do html

var server = http.createServer(function(request,response){ 
response.writeHead(200, {"Content-Type": "text/html"}); //statuscode 200 e tipo mime html
response.end(index)
});

server.listen(3000, function(){ 
console.log('Server Rodando 3000')}); 
