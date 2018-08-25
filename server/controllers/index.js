var models = require('../models');
console.log("yo");

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('request', req);
      models.messages.get(function(modelData) {
        res.status(200);
        res.send({
          results: modelData
        });
      });
    },
    post: function (req, res) {
      console.log("req:", req.body);
      models.messages.post(req.body, function(modelData){
        res.status(201);
        res.send(modelData);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


// module.exports.messages.get();
