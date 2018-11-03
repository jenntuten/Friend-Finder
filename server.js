let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
//console.log((path.join(__dirname,"./app/routing/apiRoutes")))
let app = express();

let PORT = process.env.PORT || 9898;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log("app listening on PORT: "+PORT);
})