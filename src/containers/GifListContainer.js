import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: [],
    searchTerm: ""
  };

  componentDidMount() {}

  convertGifDataToURL = gifs => {
    const urls = gifs.map(gif => gif.images.original.url);
    this.setState({ gifs: urls });
  };

  updateSearch = event => {
    if (!event.target) return;
    this.setState({ searchTerm: event.target.value });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    )
      .then(res => res.json())
      .then(json => {
        this.convertGifDataToURL(json.data);
      });
  };
  render() {
    return (
      <React.Fragment>
        <GifSearch
          searchTerm={this.state.searchTerm}
          updateSearch={this.updateSearch}
          searchSubmit={this.handleSearchSubmit}
        />
        <GifList gifUrls={this.state.gifs} />
      </React.Fragment>
    );
  }
}

export default GifListContainer;
