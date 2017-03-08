
module.exports = function(dir,ext,callback){
var fs = require('fs');
var result = [];
fs.readdir(dir,function(err,list){
if(err!=null)
	return callback(err);
else{
	for(var i=0;i<list.length;i++){
	   var split = list[i].split('.');
	   if(split[1]==ext)
		result.push(list[i]);
	
	}
	return callback(null,result);
    }
}); 
}

