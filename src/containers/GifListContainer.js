import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      query: "golden retriever puppy"
    };
  }

  fetchData = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(resp => resp.json())
      .then(gifs => this.updateGifState(gifs.data));
  };

  updateGifState = results => {
    const topThreeGifs = results.slice(0, 12);
    this.setState({
      gifs: topThreeGifs
    });
  };

  updateQueryState = query => {
    this.setState({
      query
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <GifSearch updateQueryState={this.updateQueryState} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
