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
    // Recieves user details (name, photo, scores)
    var userInput = req.body;

    // Figure out the scores
    for (var i = 0; i < userInput.scores.length; i++) {
      userInput.scores[i] = parseInt(userInput.scores[i]);
    }

    // Best Friend will be whoover has the minimum difference in scores
    var bestFriendIndex = 0;
    var minimumDifference = 40;

    // For loop to figure out the difference

    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;

      for (var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(userInput.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // If their is a new best friend, change the best friend index
      if (totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }
    // After finding match, add user to friend array
    friends.push(userInput);

    //send back to browser the best friend match
    res.json(friends[bestFriendIndex]);
  });
};
