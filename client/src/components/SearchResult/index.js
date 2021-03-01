import React from "react";

function SearchResults(props) {
  console.log(props);
  return (
    <ul className="list-group search-results">
      {props.results.map((result) => {
        const img = result.volumeInfo.imageLinks ? (
          <img alt="Books" src={result.volumeInfo.imageLinks.thumbnail} />
        ) : null;

        const authors = result.volumeInfo.authors
          ? result.volumeInfo.authors.join(",")
          : "";

        return (
          <li key={result.id} className="list-group-item">
            {img}

            <h1> {result.volumeInfo.title} </h1>
            <h1> {authors} </h1>
            <p> {result.volumeInfo.description} </p>
            <a href={result.volumeInfo.Link}> </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchResults;
