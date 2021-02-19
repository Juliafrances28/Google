const mongoose = require("mongoose");
let db = "../models/books.js";
// mongoose.connect("mongodb://localhost:3000/googlebooks");

const Schema = mongoose.Schema;

// title, authors, description, image, link

const googlebooksSchema = new Schema({
  title: { type: String, trim: true, required: true },
  authors: [{ type: String, trim: true, required: true }],
  description: String,
  image: String,
  link: String,
});

const GoogleBook = mongoose.model("googlebook", googlebooksSchema);
module.exports = GoogleBook;
