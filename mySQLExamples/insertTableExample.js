var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "yourUsername",
  password: "yourPassword",
  database: "mydbTest"
});

conn.connect(function(err){
    if (err) throw err;
    console.log("Connected!");

    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
        ['Anthony', 'Apple st, 12'],
        ['Benard', 'Lowstreet 4'],
        ['Amy', 'Apple st 62'],
    ];

    conn.query(sql, [values], function(err, result){
        if (err) throw err;
        console.log(result.affectedRows + " rows inserted!")
    });
});