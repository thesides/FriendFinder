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

	var currentPerson;

	//this will capture all scores of people currently in the db BEFORE the user info is sent
	for (i = 0; i < personData.length; i++){
		currentPerson = personData[i];
		console.log(currentPerson.name);

		
	}

	





	personData.push(req.body);
	console.log(personData);
	console.log(userScores);





});


};




