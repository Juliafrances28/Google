import React, { Component } from "react";
import Result from "../components/SearchResult/index";
import Container from "../components/Container/index";
import API from "../utils/API";

class searchpage extends Component {
  state = {
    search: "",
    // results: { items: [] },
    results: [],
  };

  // When this component mounts, search the book
  // This is a lifecycle method which is like the render.
  // This is where you excute your ajax calls

  // I also have some api calls in my server.js, specifically on the backend. In this file I was able to test them on postman and they work.

  // In the function below, the code is searching with the use of the api. I have api's in the api.js file in the utils folder.

  componentDidMount() {
    API.getBooks()
      .then((res) => {
        // this.setState({ results: res.data });

        this.setState({ results: res.data || { items: [] } });
        console.log(this.state.results);
        // this.setState({ results: res.data.posts });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  handleDeleteButton = (id) => {
    API.deleteBook(id)
      .then((res) => this.componentDidMount())
      .catch((err) => console.log(err));
  };
  render() {
    console.log(this.state);
    return (
      // <div>
      //   {this.state.results && this.state.results.items.length ? (
      //     <Result results={this.state.results.items}></Result>
      //   ) : null}
      // </div>
      <Container>
        <Container>
          <Result
            savedBooks={this.state.savedBooks}
            handleDeleteButton={this.handleDeleteButton}
          ></Result>
        </Container>
      </Container>
    );
  }
}
export default searchpage;
