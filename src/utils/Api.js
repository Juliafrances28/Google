import axios from "axios";

// way to communicate

export default {
  search: function (query) {
    return axios.get("/api/search?query=" + query);
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/googlebooks");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/googlebooks/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/googlebooks/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/googlebooks", bookData);
  },
};
