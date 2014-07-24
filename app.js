var db = require('./db');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var routes = require('./routes');

//express基本配置
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: 86400000
}));

app.get('/', routes.index);
app.post('/create', routes.create);
app.post('/delete', routes.delete)

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});