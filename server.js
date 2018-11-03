
let express = require('express');
let bodyParser = require('body-parser');
var path = require('path')
var serveStatic = require('serve-static')

let app = express();

let PORT = process.env.PORT || 9898;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(serveStatic(path.join(__dirname, 'public')))

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log("Server listening on PORT: "+PORT);
})
