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
      models.messages.post(req.body, function(modelData){
        res.status(201);
        res.send(modelData);
      });
    } 
  },

  users: {
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req.body, function(modelData){
        res.status(201);
        res.send(modelData);
      });
    }
  }
};


// module.exports.messages.get();
