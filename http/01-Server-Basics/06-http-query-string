'use strict';
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let

let http = require('http');
let url = require('url');

http.createServer((request,response) => {
//result recebe o urlObject
//https://nodejs.org/dist/latest-v6.x/docs/api/url.html

	var result = url.parse(request.url, true);
	
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	response.write("<html><body>");
	response.write("<h1>ZavagliPalos</h1>");
	response.write("<h2>Query String</h2>");
	response.write("<ul>");
	
	console.log(result.query);
	//Percorre o urlObject.query e adiciona os atributos no corpo da Pagina
	for (var key in result.query) {
		response.write("<li>"+key+" : "+result.query[key]+"</li>");
	}

	response.write("</ul>");
	response.write("</body></html>");
	response.end();
}).listen(3000, function(){ console.log('Server ok'); });
