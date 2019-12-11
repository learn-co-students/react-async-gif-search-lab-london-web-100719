import React, { Component } from "react";

class GifList extends Component {
  formGifs = () => {
    return this.props.gifUrls.map(url => (
      <li>
        <img src={url} alt="" />
      </li>
    ));
  };
  render() {
    return <ul>{this.formGifs()}</ul>;
  }
}

export default GifList;
