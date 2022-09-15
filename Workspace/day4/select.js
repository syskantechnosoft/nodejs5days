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
    var sql = "select * from employee";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result is");
        console.log(result);
    });
});


// con.end();