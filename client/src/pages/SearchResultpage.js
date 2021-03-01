import React, { Component } from "react";
import SearchForm from "../components/SearchForm/index";
import Result from "../components/SearchResult/index";
import API from "../utils/API";

// Note :I Know the problem is that "results is undefined" I am just struggling to figure out how to define results.

class SearchResultpage extends Component {
  state = {
    search: "",
    results: {},
  };

  // When this component mounts, search the book
  // This is a lifecycle method which is like the render.
  // This is where you excute your ajax calls
  componentDidMount() {
    this.search(this.state.search);
    console.log(this.state.search);
  }

  // In the fuction below, the code is searching with the use of the api. I have api's in the api.js file in the utils folder.
  // I also have some api calls in my server.js, specifically on the backend. In this file I was able to test them on postman and they work.
  search = () => {
    API.search(this.state.search)
      .then((res) => {
        this.setState({ results: res.data });
        console.log(this.state.results);
        // this.setState({ results: res.data.posts });
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // I know I should able to return something after results on line 27. I need to figure out what the above function is returning.

  handleInputChange = (event) => {
    // Here I am getting the value and name of the input which triggered the change
    // The name and value are taken off the target using destructing
    const { name, value } = event.target;
    // There the updating the input's state
    this.setState({
      // there should be something here. with the goal to set and get results into the array.
      [name]: value,
    });
  };

  // When the form is submitted, search for the book using `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.search); // I am able to console.log successfully here
    this.search(this.state.search);
  };

  render() {
    console.log(this.state.search);
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {this.state.results.length ? (
          <Result results={this.state.results}></Result>
        ) : null}
      </div>
    );
  }
}
export default SearchResultpage;
