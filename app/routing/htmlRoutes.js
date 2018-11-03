let path = require('path');

module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
    app.get("/results", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/results.html"));
    })
    //Default route that directs to the home page.
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"))
    })
}