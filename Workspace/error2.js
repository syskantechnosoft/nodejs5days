const fs= require('fs');

function nodeCallback(err,data) {
    if (err){
        console.log("Error Thrown :", err);
        return;
    }
    console.log(data);
}

fs.readFile("d:\\test.txt",nodeCallback);