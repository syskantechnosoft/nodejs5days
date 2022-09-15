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
    var sql = "insert into employee (id, name, age) values ?";
    var values = [
        [101, 'XYZ', 18], [102, 'mno', 19], [103, 'cde', 16], [104, 'fgh', 17]
    ];

    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows +" Records Inserted!!!");
    });
});


// con.end();