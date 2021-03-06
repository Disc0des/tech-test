import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results found</p>
  } else { 
    return (
      <div className="search-results">
        {results.map((image) => (
          <img
            className="card-image"
            src={image}
            alt="result-tile"
            key={image}
          />
        ))}
      </div>
    )
  };
};

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.string
  ),
};