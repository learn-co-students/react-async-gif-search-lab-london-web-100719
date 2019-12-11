import React from "react";

const GifSearch = props => {
  return (
    <form onSubmit={event => props.searchSubmit(event)}>
      <input
        onChange={event => props.updateSearch(event)}
        type="text"
        name="search"
        value={props.searchTerm}
      />
      <input type="submit" />
    </form>
  );
};

export default GifSearch;
