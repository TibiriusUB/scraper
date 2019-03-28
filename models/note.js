// Users should also be able to leave comments on the articles displayed and revisit them later.
// The comments should be saved to the database as well and associated with their articles.
// Users should also be able to delete comments left on articles.
// All stored comments should be visible to every user.
// Create a note schema and model to accomplish this.

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  title: String,
  body: String
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
