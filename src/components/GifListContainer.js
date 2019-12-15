import React from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
import apiKey from "./helper";

export default class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "dolphin",
      searchTextField: "",
      gifList: []
    };
  }

  handleSearch = event => {
    event.preventDefault();
    this.setState({
      searchTerm: this.state.searchTextField
    });
    this.fetchQuery();
    this.render();
  };

  handleTextChange = event => {
    this.setState({
      searchTextField: event.target.value
    });
  };

  componentDidMount() {
    this.fetchQuery();
  }

  fetchQuery = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=${apiKey}&rating=g`
    )
      .then(resp => resp.json())
      .then(({ data }) => this.setState({ gifList: data.slice(0, 3) }));
  };

  render() {
    return (
      <div>
        <GifList gifList={this.state.gifList} />
        <GifSearch
          handleSearch={this.handleSearch}
          searchTextField={this.state.searchTextField}
          handleTextChange={this.handleTextChange}
        />
      </div>
    );
  }
}
