import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    return (
      <ul>
        {this.props.gifs.map((gif, index) => (
          <li key={index}>
            <img src={gif.images.original.url} />
            <p></p>
          </li>
        ))}
      </ul>
    );
  }
}
