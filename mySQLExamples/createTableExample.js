var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "yourUsername",
  password: "youPassword",
  database: "mydbTest"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    console.log("Press Ctrl+ C to quit!");
  });
});