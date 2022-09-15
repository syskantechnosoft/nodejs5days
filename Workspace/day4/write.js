var fs= require('fs');

var data= "This data will be written to a file";

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'utf8');

writerStream.end();

writerStream.on('finish', function(){
    console.log("Data is written to file");
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("Program ends here");