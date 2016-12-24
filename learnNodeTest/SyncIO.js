var fs = require('fs');

var buffer=fs.readFileSync(process.argv[2]);
//var count=0;
var buf = buffer.toString();
//console.log(buf);
var lines = buf.split('\n');
console.log(lines.length-1);

//for(var i = 0;i<=buffer.length&& buffer[i]!=undefined;i++){
//console.log(buffer[i].toString());
//if(buffer[i]===10 || buffer[i]===13) count++;
//}
//console.log(count-1);


