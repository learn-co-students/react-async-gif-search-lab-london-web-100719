import React, { Component } from "react";
import GifSearch from "./../components/GifSearch";
import GifList from "./../components/GifList";

export class GifListContainer extends Component {
  state = { gifs: [] };

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <br />
        <br />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }

  fetchGifs = () => {};

  handleSubmit = term => {
    // event.preventDefault();
    let URL = `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=SHDmD78Ct3kQnfYLgVlIHG3wcQQIs4Uh&rating=g`;

    fetch(URL)
      .then(resp => resp.json())
      .then(({ data }) => this.setState({ gifs: data.slice(0, 3) }));
  };

  componentDidMount() {
    let URL =
      "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=SHDmD78Ct3kQnfYLgVlIHG3wcQQIs4Uh&rating=g";
    fetch(URL)
      .then(resp => resp.json())
      .then(({ data }) => this.setState({ gifs: data.slice(0, 3) }));
  }
}

export default GifListContainer;
