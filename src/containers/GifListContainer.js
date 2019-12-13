import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

// API KEY: 0dyHhAvxgnsm8dorFhcNtDtg5cQ5ckor

export default class GifListContainer extends Component {

    state = {
        gifs: [],
        searchQuery: 'dolphins'
    }

    fetchGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchQuery}&api_key=0dyHhAvxgnsm8dorFhcNtDtg5cQ5ckor&rating=g&limit=3`)
        .then(resp => resp.json())
        // .then(resp => this.setState({ gifs: resp.data }))
        .then(({data}) => {
            this.setState({gifs: data.map(gif => ({url: gif.images.original.url }) ) })
        })
    }

    componentDidMount() {
        this.fetchGifs();
    }
    // handleSearchQuery = (query) => {
    //     this.setState({
    //         searchQuery: query
    //     })
    // }
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.fetchGifs();
    // }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

// handleSearchQuery={this.handleSearchQuery} handleSubmit={this.handleSubmit} searchQuery={this.state.searchQuery}
