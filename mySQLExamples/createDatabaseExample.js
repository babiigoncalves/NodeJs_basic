var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "yourusername",
  password: "yourpassword",
  connectTimeout: 30000
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE myDbTest", function(){
        if (err) throw err;
        console.log("Database created!");
        console.log("Press Ctrl+ C to quit!");
    });
});