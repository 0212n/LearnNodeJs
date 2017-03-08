var fs = require('fs');
var dirName = process.argv[2];
var extname = process.argv[3];
fs.readdir(dirName,function(err,list){
for(var i = 0;i<list.length;i++){
var split = list[i].split('.');
if(split[1]===extname)
console.log(list[i]);
}
})
