var connection = require('../db');

const performQuery = (query, modelCallback) => {
  connection.query(query, function (error, results, fields) {
    // console.log('results is:', results);
    // console.log('fields are: ', fields);
    console.log('in query writer');
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
      let query = `insert into messages (USER, MSG_TXT, ROOM) values ('${message.username}', '${message.text}', '${message.roomname}')`;
      // let query = `insert into messages (USER, MSG_TXT, ROOM) values ('KARIN', 'I LOVE DATABASES', 'LOBBY')`;
      console.log(query);
      performQuery(query, function(results) {
        console.log('ready message', results);
        controllerCallback(results);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

