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
    var sql = "insert into employee (id, name, age) values (100, 'ABCD',21)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 Record Inserted!!!");
    });
});


// con.end();