var axios = require("axios");
const db = require("../models");
console.log("indexing")

module.exports = function (app) {

  app.get('/', function (req, res, next) {
    res.render('index', { title: 'GameScrape' });
  });

  app.get('/view:id', function (req, res, next) {
    res.render('articleSum', { title: 'GameScrape: Article Summary' });
  });

};

