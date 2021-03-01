// const db = require("./models");
// const axios = require("axios");
// const { GoogleBook } = require("./models");

// app.get("/api/search", (req, res) => {
//     console.log(req.params);
//     axios
//       .get("https://www.googleapis.com/books/v1/volumes?q=Dune")
//       .then((data) => {
//         console.log(data.data);
//         res.json(data.data);
//       })
//       .catch((err) => res.json(err));
//   });

//   findAll:(req, res) => {
//     const { query: params } = req;
//     axios
//       .get("https://www.googleapis.com/books/v1/volumes", {
//         params
//       })
//       .then(results =>

//   // You need a post route for api/googlebooks - should return all saved books as JSON
//   app.get("/api/googlebooks", (req, res) => {
//     db.GoogleBook.find({})
//       .then((dbGoogleBook) => {
//         console.log(dbGoogleBook);
//         res.json(dbGoogleBook);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   });

//   // You need a get route for api/googlebooks - which will be used to save a new book to the database
//   app.post("/api/googlebooks", (req, res) => {
//     db.GoogleBook.create(req.body)
//       .then((dbGoogleBook) => {
//         res.json(dbGoogleBook);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   });

//   // `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`
//   app.delete("/api/googlebooks/:id", (req, res) => {
//     const gBookID = req.params.id;

//     GoogleBook.deleteOne({ _id: req.params.id }, function (err) {
//       if (err) {
//         res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//       // deleted at most one tank document
//     });
//   });

//   // res.send("DELETE the book");
//   // Send every other request to the React app
//   // Define any API routes before this runs
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });
