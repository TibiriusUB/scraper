var axios = require("axios");
const db = require("../models");
console.log("indexing")

module.exports = function (app) {

  app.get('/', function (req, res, next) {
    res.render('index', { title: 'GameScrape' });
  });

  app.get('/view', function (req, res, next) {

    db.Article.find({})
      .then(function (dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
        console.log(res)
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
    res.render('artView', { title: 'GameScrape: Articles' });
  });
  // $("/articles", function (data) {
  //   // For each one
  //   for (var i = 0; i < data.length; i++) {
  //     // Display the apropos information on the page
  //     $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
  //   }
  //});



  app.get('/view:id', function (req, res, next) {
    res.render('articleSum', { title: 'GameScrape: Article Summary' });
  });

};

