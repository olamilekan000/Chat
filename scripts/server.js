var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	console.log('url is ' + req.url);
	res.writeHead(200, {'Content-Type':'text/html'});
	var reader = fs.createReadStream('../index.html', 'utf8');
	reader.pipe(res);
}).listen(4100);
console.log('server now running at port 4100');