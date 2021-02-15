import React, { Component } from "react";
import Container from "../components/Container/index";
import SearchForm from "../components/SearchForm/index";
import SearchResults from "../components/SearchResult/index";
import API from "../utils/Api";

//search api for google books

class searchFormpage extends Component {
  state = {
    search: "",
    book: [],
    result: [],
    error: "",
  };

  // When the component mounts, get a list a possible titltes  and update this.state.results

  componentDidMount() {
    API.getBooks()
      .then((res) =>
        this.setState({
          books: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getBooks(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.results);
        }

        this.setState({ results: res.data.results, error: "" });
      })
      .catch((err) => this.setState({ error: err.results }));
  };
  render() {
    return (
      <div>
        <Container style={{ miniHeight: "80%" }}>
          <h1 className="text-center">Search By title!</h1>
          <alert
            type="danger"
            style={{
              opacity: this.state.error ? 1 : 0,
              marginBottom: 10,
            }}
          >
            {this.state.error}
          </alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            books={this.state.books}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default searchFormpage;
