var personData = require("../data/friends.js")

module.exports = function (app){

app.get("/api/people", function(req, res) {
  res.json(personData);
});


app.post("/api/people", function (req, res){

	var newFriend = {
		name: "",
		photo: "",
		scores: Infinity
	};

	var userData = req.body;
	var userScores = userData.scores;

	var totalDifference;



	for (i = 0; i < personData.length; i++){
		var currentPerson = personData[i];
		totalDifference = 0;

		console.log(currentPerson.name);

		currentPerson.scores.forEach(function(data){
			var currentPersonScore = currentPerson.scores;
			var currentUserScore = userScores;

			totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentPersonScore));
		})

		if (totalDifference <= newFriend.scores) {
			newFriend.name = currentPerson.name;
			newFriend.photo = currentPerson.photo;
			newFriend.scores = totalDifference;
		}

	}

	personData.push(req.body);
	
	console.log('Your new best friend is... ' + newFriend.name);

	res.end(newFriend.name);

});


};




