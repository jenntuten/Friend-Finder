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
//Return result & display in modal

})
}