var axios = require("axios");
var cheerio = require("cheerio");
const db = require("../models");
console.log("scrapeing");

module.exports = function (app) {

  // Routes

  // A GET route for scraping the website
  app.get("/scrape", function (req, res) {
    // First, we grab the body of the html with axios
    axios.get("http://www.destructoid.com/").then(function (response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);

      // Now, we grab every h2 within an article tag, and do the following:
      $("article").each(function (i, element) {
        // Save an empty result object
        var result = {};

        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this)
          .find(".sparticle_title").children("a")
          .text();
        result.summary = $(this)
          .find(".smlpost-story").children("p")
          .text();
        result.url = $(this)
          .find("a")
          .attr("href");


        // Create a new Article using the `result` object built from scraping
        db.Article.create(result)
          .then(function (dbArticle) {
            // View the added result in the console
            console.log(dbArticle);
          })
          .catch(function (err) {
            // If an error occurred, log it
            console.log(err);
          });
      });
    });
  });

};
