const mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    var sql = "create table employee (id INT, name varchar(100), age INT)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created!!!");
    });
});


// con.end();