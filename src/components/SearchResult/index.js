import React from "react";

function SearchResult(props) {
  return (
    <ul className="list-group">
      {props.results.map((result) => (
        <li className="list-group-item" key={result.id}>
          <img
            alt={result.title}
            className="img-fluid"
            src={this.state.results}
          />
        </li>
      ))}
    </ul>
  );
}

export default SearchResult;
