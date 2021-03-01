// import React, { Component } from "react";
// import Container from "../components/Container/index";
// import SearchForm from "../components/SearchForm/index";
// import Result from "../components/SearchResult/index";
// import CardContainer from "../components/CardContainer/index";
// import API from "../utils/API";

// //search api for google books

// class searchFormpage extends Component {
//   state = {
//     search: "",
//     book: [],
//     result: [],
//     error: "",
//   };

//   // When the component mounts, get a list of possible titles  and update this.state.results

//   componentDidMount() {
//     API.getBooks()
//       .then((res) =>
//         this.setState({
//           books: res.data.results, // set results
//         })
//       )
//       .catch((err) => console.log(err));
//   }

//   // This is the item in question can be seen in console.log. see search form component in this page
//   handleInputChange = (event) => {
//     console.log(event.target.value); // I am able to console.log this line of code.
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     API.getBook(this.state.search)
//       .then((res) => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.results);
//         }
//         console.log(res.data.results);
//         this.setState({ results: res.data.results, error: "" });
//       })
//       .catch((err) => this.setState({ error: err.results }));
//   };
//   render() {
//     console.log(this.state);
//     return (
//       <div>
//         <Container>
//           <SearchForm
//             search={this.state.search}
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//           />

//           {/* {this.state.results(<Result results={this.state.results}></Result>)} */}

//           {this.state.results.length ? (
//             <Result results={this.state.results}></Result>
//           ) : null}

//           <CardContainer
//             heading={this.state.result.Title || "Search for a Book"}
//           >
//             {this.state.result.Title ? (
//               <book
//                 title={this.state.result.Title}
//                 src={this.state.result.img}
//                 author={this.state.result.author}
//                 description={this.state.result.description}
//                 Link={this.state.result.Link}
//               />
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </CardContainer>
//         </Container>
//       </div>
//     );
//   }
// }

// export default searchFormpage;
