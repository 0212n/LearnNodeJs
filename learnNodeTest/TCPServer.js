var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function(c){
	var today = Date.now();
	var data = (strftime('%F %H:%M', new Date(today)) + '\n');
	c.end(data);
});
var port = process.argv[2];
server.listen(port);



// var client  = net.connect({port:process.argv[2]},
// 	function(){
// 		console.log("connected to server");
// 	});
// client.on('data', function(data){
// 	console.log(data.toString());
// 	client.end();
// });
// client.on('end',function(){
// 	console.log('server disconnected');
// });
