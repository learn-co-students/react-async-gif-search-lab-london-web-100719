import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }


  handleFetch = (searchTerm = "") => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=kKzxVJ2OjCTwzASNvYFX55Z3uZic3N1Q&limit=5`
    )
    .then(resp => resp.json())
    .then(json => this.setState({gifs: json.data}))
  };

  componentDidMount() {
    this.handleFetch()
  }

  render() {
    return (
      <div>
        <GifSearch handleFetch={this.handleFetch} />
        <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default GifListContainer;
