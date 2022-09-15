const mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "demo"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    con.query("Create schema test", function(err,result){
        if(err) throw err;
        console.log("schema created!!!");
    });
});