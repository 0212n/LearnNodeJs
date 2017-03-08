var http = require('http'),
bl = require('bl');

var myBL = new bl(function(err, myBL){
    console.log(myBL.length);
    console.log(myBL.toString());
});

var url = process.argv[2];
http.get(url, function(res){
	  //res.setEncoding('utf-8');
    res.pipe(myBL);
    res.on('end', function(){
        myBL.end();
    });
});
