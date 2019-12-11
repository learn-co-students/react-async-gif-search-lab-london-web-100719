import React, { Component } from "react";

export class GifList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.gifs.map(gif => {
            return (
              <li key={gif.id}>
                <img src={gif.images.original.url} alt={gif.title} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default GifList;
