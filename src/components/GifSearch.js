import React from "react";

export default class GifSearch extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSearch}>
        <label htmlFor="search">Enter a Search Term:</label>
        <br />
        <input
          type="text"
          name="query"
          onChange={this.props.handleTextChange}
          value={this.props.searchTextField}
        />
        <br />
        <input type="submit" value="Find Gifs" className="btn btn-success" />
      </form>
    );
  }
}
