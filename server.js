const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const db = require("./models");
const axios = require("axios");

const PORT = process.env.PORT || 3000;

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// require axios here, and res.json with axios

app.get("/api/search", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.query)
    .then(({ data: { googlebooks } }) => res.json(googlebooks))
    .catch((err) => res.json(err));
});

// req.params s
// res.status(422).json(err));
// actions are happening here

// You need a post route for api/googlebooks - should return all saved books as JSON
app.get("/api/googlebooks", (req, res) => {
  db.GoogleBook.find({})
    .then((dbGoogleBook) => {
      res.json(dbGoogleBook);
    })
    .catch((err) => {
      res.json(err);
    });
});

// You need a get route for api/googlebooks - which will be used to save a new book to the database
app.post("/api/googlebooks", (req, res) => {
  db.GoogleBook.create(req.body)
    .then((dbGoogleBook) => {
      res.json(dbGoogleBook);
    })
    .catch((err) => {
      res.json(err);
    });
});

// `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`
app.delete("/api/googlebooks/:id", (req, res) => {
  const gBookID = req.params.id;
  GoogleBook.deleteOne({ _id: req.params.id }, function (err) {
    if (err) {
      res.status(404).end();
    } else {
      res.status(200).end();
    }
    // deleted at most one tank document
  });
});

// res.send("DELETE the book");
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
