//Initial directories, and base app generation by the "express-generator" module. Unused/un-needed aspects have been disabled.

var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var mongoose = require("mongoose");
// var indexRouter = require('./routes/index');
// var mongoRouter = require('./routes/mongo');
// var scrapeRouter = require('./routes/scrape');
//var usersRouter = require('./routes/users');
var PORT = process.env.PORT || 2500;
var app = express();
//var axios = require("axios");
///var cheerio = require("cheerio");
//connect to the MONGO DB with prescribed variable for Heroku deployment.
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
//
var db = require("./models");
var mdb = mongoose.connection;

mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', () => console.log("now checking listings"));

// view engine setup 
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


require('./routes/index')(app);
require('./routes/mongo')(app);
require('./routes/scrape')(app);

// app.use('/mongo', mongoRouter);
// app.use('/scrape', scrapeRouter); 
// app.use('/', indexRouter);
 
// app.get('/', function (req, res) {
//     res.render('index',{ title: 'GameScrape' });
// });

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});