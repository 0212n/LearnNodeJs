var http  =require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(req, res){
	res.writeHead(200, { 'content-type': 'text/plain' });
	var readstream = fs.createReadStream(file);
	readstream.on('open',function(){
		readstream.pipe(res);
	})
});

server.listen(port);
