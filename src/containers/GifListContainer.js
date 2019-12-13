import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { gifs:[]}
    }

    fetchGIFs=(query='cats')=>{
        console.log('query',query)
        let api_endpoint    = 'https://api.giphy.com/v1/gifs'
        let api_searchterm  = '/search?q='
        let api_key         = '&api_key=dc6zaTOxFJmzC&rating=g'
        let results_limiter =  '&limit='
        let number_results  = '3'

        let url = api_endpoint + api_searchterm + query + api_key + results_limiter + number_results
        
        fetch(url)
        .then(response=>response.json())
        .then(json => this.setState({gifs: json.data}))
    }

    componentDidMount(){
        console.log('mounted')
        this.fetchGIFs()
    }

    componentDidUpdate(){
        //this.fetchGIFs(this.state.searchTerm)
    }

    render() { 
        return (
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs}/>
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}
 
export default GifListContainer;