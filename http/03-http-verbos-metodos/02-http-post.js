var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
	if (req.method ==='GET'){
		res.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream('./5-coletando-POST/form.html', 'UTF-8').pipe(res);
		} else if (req.method === 'POST') {
			var body = '';
			req.on('data', function(chunk){
				body += chunk;
			});
		} req.on('end', function() {
			res.writeHead(200, {'Content-Type':'text/html'});
			res.end(`
					<!DOCTYPE html>
					<html>
						<head>
							<title>FORMULARIO</title>
						</head>
					<body>
						<h1>Resultados</h1>
						<p>${body}</p>
					</body>
					</html>

				`);
		});
}).listen(3000, function(){
	console.log('Rodando na porta 3000');
});
