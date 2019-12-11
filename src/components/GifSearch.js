import React, { Component } from "react";

export class GifSearch extends Component {
  state = { search: "" };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };
  render() {
    return (
      <div>
        <h5>Enter a Search Term:</h5>
        <input
          label="Enter a Search Term"
          type="text"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary"
          onClick={() => this.props.handleSubmit(this.state.search)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default GifSearch;
