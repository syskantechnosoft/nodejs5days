// import { readFile, readFileSync } from 'fs';
const fs = require('fs');


//Async Read

fs.readFile('input.txt', function(err,data){
    if(err){
        return console.error("error is :"+err);
    }
    console.log("Asynchronous Read :"+ data.toString);
});


//sync Read
var data = fs.readFileSync('input.txt');
console.log("Synchronous Read :"+ data.toString);

console.log("Program ends here");