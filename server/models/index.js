var connection = require('../db');

const performQuery = (query, modelCallback) => {
  connection.query(query, function (error, results, fields) {
    if (error) { throw error; }
    modelCallback(results);
  });
};

module.exports = {
  messages: {
    get: function (controllerCallback) {
      let ourCallback = function(results) {
        let messages = [];
        for (let i = 0; i < results.length; i++) {
          let currentMsg = {
            username: results[i].USER,
            text: results[i].MSG_TXT,
            objectId: results[i].MSG_ID,
            roomname: results[i].ROOM,
            createdAt: results[i].CREATE_AT
          };
          messages.push(currentMsg);
        }
        controllerCallback(messages);
      };
      performQuery('select * from messages', ourCallback);
    }, 

    post: function (message, controllerCallback) {
      let query = `insert into messages (USER, MSG_TXT, ROOM) values (${connection.escape(message.username)}, ${connection.escape(message.text)}, ${connection.escape(message.roomname)})`;
      performQuery(query, function(results) {
        controllerCallback(results);
      });
    }
  },

  users: {
    get: function () {},
    post: function (message, controllerCallback) {
      let query = `insert into users (USER) values (${connection.escape(message.username)})`;
      console.log('POST USER QUERY: ', query);
      performQuery(query, function(results) {
        controllerCallback(results);
      });
    }
  }
};

