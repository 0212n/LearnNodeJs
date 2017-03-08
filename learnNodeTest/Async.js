var fs =require('fs');
var file = process.argv[2];

fs.readFile(file,function(err, contents){
if(err) console.log("Error Output");
var buf = contents.toString();
var lines = buf.split('\n')
console.log(lines.length -1);
});

