let friendData = require('../data/friends');

module.exports = function (app) {
    //Links to current list of friends 
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    })
    //Push new friend data when user submits their responses.
    app.post('/api/friends', function (req, res) {

//Compare user with existing friends
//Loop through friends and calculate differences
//Return/display results
let bestMatch = {
    name: "",
    photo: "",
    difference: 9999
};

let userInput = req.body;
let userScores = userInput.scores;

//Double for loop in order to iterate through friends first, then through each friend's scores. 
for (let i = 0; i < friendData.length; i++) {
    let totalDifference = 0;

    //Find absolute value of differences so there are no negative values.
    for (let j = 0; j < friendData[i].scores[j]; j++) {
        totalDifference += Math.abs(userScores[j] - friendData[i].scores[j]);

        //Determine best match.
        if (totalDifference <= bestMatch.difference) {
            bestMatch.name = friendData[i].name;
            bestMatch.photo = friendData[i].photo;
            bestMatch.difference = totalDifference
        }
    }
}
//Push new user to database where they will be displayed at api/friends.
friendData.push(userInput);

res.json(bestMatch);
});
}