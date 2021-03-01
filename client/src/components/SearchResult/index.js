import React from "react";

function SearchResults(props) {
  console.log(props);
  return (
    <ul className="list-group search-results">
      {props.results.map((result) => {
        const img = result.volumeInfo.imageLinks ? (
          <img alt="Books" src={result.volumeInfo.imageLinks.thumbnail} />
        ) : null;

        return (
          <li key={result.id} className="list-group-item">
            {img}

            <h1> {result.title} </h1>
            <h1> {result.volumeInfo.author} </h1>
            <p> {result.volumeInfo.description} </p>
            <a href={result.volumeInfo.Link}> </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchResults;
