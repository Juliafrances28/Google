import React, { Component } from "react";
import SearchForm from "../components/SearchForm/index";
import SearchResult from "../components/SearchResult/index";
import API from "../utils/Api";

// calling from the data
class SearchResultpage extends Component {
  state = {
    search: "",
    results: [],
  };

  // When this component mounts, search the book
  componentDidMount() {
    this.search(this.props.search);
  }

  search = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  // When the form is submitted, search the book for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchResult results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultpage;
