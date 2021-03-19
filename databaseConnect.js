var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '*gbiosan1836',
  database : 'fintech210222',
});
 

connection.connect();
 
connection.query('SELECT * FROM user;', function (error, results, fields) {
    console.log(results);
});
 
connection.end();
