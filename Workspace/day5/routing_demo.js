var express = require('express');

var app = express();

app.get('/', function(req, res){
    console.log("Got a get request for Home Page");
    res.send("<h1> Welcome to Express Routing </h1>");
});

app.post("/",function(req, res){
    console.log("Got a Post request for the Home Page");
    res.send("I cant be created from the browser with out JS events");
});

app.delete("/del_employee",function(req,res){
    console.log("Got a Delete request for /del_employee");
    res.send("This will be deleted!!");
});

app.get('/enrolled_student', function(req, res){
    console.log("Got a Get request for the /enrolled_student");
    res.send("This is enrolled students page"); 
});

//this matches with any of the following get request abxcd, abcd, ab123cd, ...
app.get('/ab*cd', function(req, res){
    console.log("Got a Get request for the /ab*cd");
    res.send("Pattern Matched for ab*cd"); 
});


var server = app.listen(8000, function() {
    var host =  server.address().address
    var port = server.address().port
    console.log("Routing App is running and listening at http://%s%s", host, port);
});