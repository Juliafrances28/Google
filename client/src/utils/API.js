import axios from "axios";

// way to communicate

export default {
  search: function (query) {
    return axios.get("/api/search?query=" + query);
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books/googlebooks");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/googlebooks/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/book/googlebooks/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books/googlebooks", bookData);
  },
};

// use the seed file to understand the format produced for the saveBook function. I need to impliment the format.
