var connection = require('../db');


const performQuery = (query) => {
  connection.connect();
  connection.query(query, function (error, results, fields) {
    console.log('results is:', results);
    if (error) { throw error; }
  });
  connection.end();
};

module.exports = {
  messages: {
    get: function () {
      let query = 'SELECT * from messages';
      performQuery(query);
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

