const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksController");
// const db = require("../models");

// router.get("/books", (req, res) => {
//   axios
//     .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
//     .then(({ data: { items } }) => res.json(items))
//     .catch((err) => res.status(422).json(err));
// });

// Matches with "/api/books"
router.route("/").get(booksController.findAll).post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
