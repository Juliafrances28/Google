import React, { Component } from "react";
import SearchForm from "../components/SearchForm/index";
import Result from "../components/SearchResult/index";
import API from "../utils/Api";

//calling from the data
class SearchResultpage extends Component {
  state = {
    search: "",
    results: [],
  };

  // When this component mounts, search the book
  // this is lifecycle method is like the render.
  // this is where you excute your ajax calls
  componentDidMount() {
    this.search(this.state.search);
    console.log(this.state.search);
  }

  search = () => {
    API.search(this.state.search).then((res) =>
      this.setState({ result: this.state.result })
    );
    console.log(result).catch((err) => console.log(err));
  };

  // need something to be returned at after results on line 32?
  // results is the problem?  (mad face emoji)
  // what is comming back here in the above function?

  handleInputChange = (event) => {
    // getting the value and name of the input which triggered the change
    // name and value are taking off the target using destructing
    const { name, value } = event.target;
    // updating the input's state
    this.setState({
      // something here
      [name]: value,
    });
    // set and get results into the array
  };
  // When the form is submitted, search for the book using `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.search); // this works
    this.search(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Result results={this.state.results} />
      </div>
    );
  }
}
export default SearchResultpage;
