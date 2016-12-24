var Sum =0;

for(var i=2;process.argv[i]!=undefined;i++){
Sum =Sum +parseInt(process.argv[i]);
}
console.log(Sum);

