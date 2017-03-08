var module = require('./Modular.js');
var dir = process.argv[2];
var ext = process.argv[3];
module(dir,ext,function(err,result){
if(err==null){
	for(var file in result)
		console.log(result[file]);
}
else
	console.log("error");
});

