import React, { Component } from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.books array

function SearchForm(props) {
  console.log(props);
  return (
    <form>
      <div className="form-group">
        <label htmlFor="book">Book</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Book"
          id="search"
        />
        <button
          // type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
