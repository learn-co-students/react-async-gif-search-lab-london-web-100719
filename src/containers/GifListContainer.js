import React, { Component } from "react";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"
    )
      .then(response => response.json())
      .then(gifsJson => this.setState({ gifs: gifsJson.data.slice(0, 3) }));
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
