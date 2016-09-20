//ATENÇÃO - Este exemplo faz um GET para LocalHost, 
// é necessário que o exemplo QUERYSTRING da pasta 01 estaja rodando em parelelo

'use strict'
const http = require('http');

http.get( 
	{  
	hostname:'localhost',
	path: '/user?name=Joao&age=27',
	port:3000,
	agent:false
	}, 
	response => { 
	let body = '';
	console.log('STATUS: ' +response.statusCode); 
	console.log('HEADERS: '+JSON.stringify(response.headers)); 
	response.on('data', data => {
	body += data;
	});
	response.on('end', function(){
	console.log('Resposta:', body);
	});
	}
);
