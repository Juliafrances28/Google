const router = require("express").Router();
const bookRoutes = require("./books");
const axios = require("axios");

// Book routes
router.use("/books", bookRoutes);

router.get("/search", (req, res) => {
  console.log(req.params);
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=Dune")
    .then((data) => {
      console.log(data.data);
      res.json(data.data);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
