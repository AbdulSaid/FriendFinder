//Load data

var friendData = require('../data/friends');

//Routing
module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friendData);
  });
};
