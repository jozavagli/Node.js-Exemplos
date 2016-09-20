
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
	console.log(`${req.method} request para ${req.url}`);
	//Exibe no console cada requisição ao servidor

	if (req.url === '/') {
		fs.readFile('./http-fileServer/index.html', 'UTF-8', function(err, html){
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write(html);
			res.end();
		});
	}
	//Utiliza o readfile para ler o index.html no formato utf8, depois armazena a saída na variavel html
	//Escreve o header statuscode 200, passa o content type html, depois renderiza a index.
	
	else if (req.url.match(/.css$/)) {
		var cssPath = path.join(__dirname, 'http-fileServer', req.url);
		var fileStream = fs.createReadStream(cssPath, 'UTF-8');
		res.writeHead(200, {'Content-Type':'text/css'});
		fileStream.pipe(res);
	} 
	//Utilizamos o metodo match com uma regEx para verificar se o final é .css
	//Criamos uma variave path que recebe o caminho do css
	//https://nodejs.org/dist/latest-v6.x/docs/api/stream.html#stream_readable_pipe_destination_options

	else if (req.url.match(/.jpg$/)) {
		var imgPath = path.join(__dirname, '3-http-fileServer', req.url);
		var imgStream = fs.createReadStream(imgPath);
		res.writeHead(200, {'Content-Type':'image/jpeg'});
		imgStream.pipe(res);
	}
	else {
		res.writeHead(404, {'Content-Type':'text/html'});
		res.end(`
			<!DOCTYPE html> <html> <head>
			<title> 404 </title> </head> <body>
			<h1>404</h1> <p>NOT FOUND</p>
			</body> </html>
			`);
	}
}).listen(3000, function(){
	console.log('Rodando na porta 3000');
});
