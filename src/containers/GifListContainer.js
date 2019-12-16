import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  state = {
    gifs: [],
    searchInput: "crazy cat"
  };

  getGifs = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${this.state.searchInput}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(response => response.json())
      .then(gifsJson => this.setState({ gifs: gifsJson.data.slice(0, 3) }));
  };

  componentDidMount() {
    this.getGifs();
  }

  updateSearchInput = event => {
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getGifs();
  };

  render() {
    return (
      <div>
        <GifSearch
          updateSearchInput={this.updateSearchInput}
          handleSubmit={this.handleSubmit}
        />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
