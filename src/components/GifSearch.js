import React, { Component } from "react";

class GifSearch extends Component {
  render() {
    return (
      <form onSubmit={event => this.props.searchSubmit(event)}>
        <input
          onChange={event => this.props.updateSearch(event)}
          type="text"
          name="search"
          value={this.props.searchTerm}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default GifSearch;
