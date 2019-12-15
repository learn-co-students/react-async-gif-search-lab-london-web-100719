import React, { Component } from "react";

class GifList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
      {this.props.gifs.map(gif => <div><img variant="top" src={gif.images.original.url}/></div>)}
      </div>;
  }
}

export default GifList;
