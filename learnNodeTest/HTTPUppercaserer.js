var http = require('http');
var through = require('through2-map');

var server = http.createServer(function(req,res){
	console.log(req);
	if(req.method==="POST"){
		req.on('data', function(chunk){

		})
	}
});
server.listen(process.argv[2]);
