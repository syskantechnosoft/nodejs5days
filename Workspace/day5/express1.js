var express= require('express');

var app = express();

app.get('/', function(req,res){
    res.send("Welcome to Expres JS");
})

var server= app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Simple Express App using http://%s%s", host,port);
});