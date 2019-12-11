import React, { Component } from 'react';
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export class GifListContainer extends Component {

    state = {
        allGifs: [],
    }

    
    fetchGIF = (query = "boat") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(({data}) => this.setState({ allGifs: data.slice(0, 3) }))
    }
    
    componentDidMount() {
        this.fetchGIF()
    }

    render() {
        return (
            <div>
                <GifList allGifs={this.state.allGifs}/>
                <GifSearch fetchGIF={this.fetchGIF}/>
            </div>
        );
    }
}

export default GifListContainer;
