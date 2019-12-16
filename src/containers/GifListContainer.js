import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'



class GifListContainer extends React.Component {
    state = {
        gifys: [],
        query: ""
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        return this.fetchGIF()
    }

    componentDidMount() {
        this.fetchGIF()
    }

    fetchGIF = () =>  {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(gifys => this.setState( { gifys: gifys.data.slice(0, 5)} ))
}


    render() {
        return <div>
            < GifSearch handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            < GifList gifys={this.state.gifys}/> 
            
        </div>
    }

}

export default GifListContainer