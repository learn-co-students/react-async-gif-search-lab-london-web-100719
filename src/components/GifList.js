import React from "react";

export default class GifList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.gifList.map((gif, index) => (
          <li key={index}>
            <img src={gif.images.original.url} alt={gif.slug} />
          </li>
        ))}
      </ul>
    );
  }
}
