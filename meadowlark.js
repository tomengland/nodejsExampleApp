var express = require('express');
var app = express();
var fortune = require('./lib/fortune.js');

// setup handlebars view engine

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// port setup
app.set('port', process.env.PORT || 3000);

// setup static middleware for express
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

  res.render('home');

});

app.get('/about', function(req, res) {
  res.render('about', { fortune: fortune.getFortune() });

});


app.use(function(req, res, next){

  res.status(404);
  res.render('404');
            
});

    // custom 500 page
app.use(function(err, req, res, next){ 
            console.error(err.stack);
            res.status(500);
            res.render('505');
});

app.listen(app.get('port'), function(){

console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
    });

