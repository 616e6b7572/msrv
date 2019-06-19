'use strict';

const fs = require('fs');

const http = require('http');

const msrv = function(){
	
	const hostname = '127.0.0.1';
	const port = 8000;
	
	const server = http.createServer((req, res) => {
		if(req.method == 'GET'){
			var path = req.url;
			fs.readFile('.'+path, function (err, buffer) {
				if (err) {
					console.log(err);
				}
				else{
					var data = buffer.toString().trim();
					res.statusCode = 200;
					res.end(data);
				}
			});
		}
	});
	
	server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
	});
	
};

module.exports = nbw;
