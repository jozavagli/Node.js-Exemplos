let http = require('http');

let server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write(`
			<!DOCTYPE html>
			<html>
				<head>
					<title>NODE SERVER</title>
				</head>
				<body>
					<h1>NODE SERVER</h1>
					<p>HELLO WORLD</p>
					<p>URL: ${req.url}</p>
					<p>METODO: ${req.method}</p>
				</body>
			</html>
		`);
	res.end(console.log('Esta linha finaliza a resposta e dispara um evento, que neste caso, invoca o console.log'));
});
server.listen(3000, function() {
	console.log('Porta 3000 ouvindo!');
});
