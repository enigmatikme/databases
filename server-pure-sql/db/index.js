var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

// connection.connect();

// connection.query('SELECT * from messages', function (error, results, fields) {
//     // console.log("error is:", error);
//     console.log("results is:", results);
//     // console.log("fields:", fields);
//   if (error) throw error;
// //   console.log('The solution is: ', results[0].solution);
// });

// connection.end();

module.exports = connection;