var express = require('express');
var http = require('http');

//init?
var app = express();
var server = module.exports = http.createServer(app);

app.configure(function() {
    app.use(express['static'](__dirname + '/public'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    app.use(app.router);
    app.set('view options', {
        layout: 'layout'
    });
    app.set('views', __dirname + '/views');
    app.set('view engine', 'hbs');
});


app.get('/', function(req, res) {
    res.render('index', {});
});


server.listen(process.env.VCAP_APP_PORT || 3000);
console.log('Listening on port 3000');