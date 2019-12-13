import React from 'react' 
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        searchWord: "",
        gifs: []
    }

    componenetDidMount() {
        this.fetchYa()
    }

    componentDidUpdate() {
        this.fetchYa()
    }

    setSearchWord = (event) => {
        this.setState({
            searchWord: event.target.value
        })
    }

    fetchYa = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchWord}&api_key=nq82XhGnb6ciXde9snW0QXMB0SRSSWo9&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(slicedData => this.setState({gifs: slicedData.data}))
    }

    render() {
        return (
            <div>
                < GifSearch setSearchWord={this.setSearchWord}/>
                < GifList gifList={this.state.gifs}/>
            </div>
        )
    }
}