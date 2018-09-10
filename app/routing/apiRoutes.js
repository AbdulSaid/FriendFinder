//Load data

var path = require('path');
var friends = require('../data/friends');

//Routing
module.exports = function(app) {
  // Total list of friend entries
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  // Add new friend entry
  app.post('/api/friends', function(req, res) {
    var userInput = req.body;
    console.log('userInput' + JSON.stringify(userInput);
    var userResponses = userInput.scores;
    console.log('userResponses' + userResponses);

    // Figure out whose the best friend

    var matchName = "";
    var matchImage = "";
    var totalDifference = 10000;

    // Total existing friends 
    for (var i = 0; i < friends.length; i++){
      var diff = 0;
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friends[i].scores[j] - userResponses[j]);
      }
      if (diff < totalDifference) {
        totalDifference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }

    }
    friends.push(userInput);
    res.json({status: "OK", matchName: matchName, matchImage: matchImage})
  });
};
