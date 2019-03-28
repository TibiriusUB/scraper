//Create a schema ad model for the scraped artices
// include:
// • Headline - the title of the article
// • Summary - a short summary of the article
// • URL - the url to the original article
// • Feel free to add more content to your database; (photos, bylines, and so on).

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  summary: String,
  url: String,
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  },
  //date: { type: Date, default: Date.now },
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;

