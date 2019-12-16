import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    return (
      <ul>
        {this.props.gifs.map((gif, index) => (
          <li key={index}>
            <img src={gif.images.original.url} alt="I am a gif" />
            <p></p>
          </li>
        ))}
      </ul>
    );
  }
}
