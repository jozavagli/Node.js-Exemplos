'use sctrict'; //http://www.w3schools.com/js/js_strict.asp

let date = (new Date()).toJSON();

const http = require('http'),
SUCESS = { 
	version: 1.0,
	name: 'Node Exemplos',
	by: 'ZavagliPalos',
	data: date 
	},
ERROR = {
	warning: "Esta rota não existe!! Tente 'localhost:3000/rota'"
	};
	
http.createServer((request,response) => {
	if(request.url === '/rota') {
		response.writeHead(200, {'Content-Type':'application/json; charset=utf-8'});
		response.write(JSON.stringify(SUCESS));
		//response.write e response.end só aceita tipo buffer e string, entao devemos converter o JSON para string
		//porém nosso tipo MIME o converte para JSON na hora de renderizar
	} else {
		response.writeHead(404, {'Content-Type':'application/json; charset=utf-8'});
		response.write(JSON.stringify(ERROR));
	}
	response.end(); 
}).listen(3000, function(){
	console.log('Servindo o JSON na porta 3000');
	});
