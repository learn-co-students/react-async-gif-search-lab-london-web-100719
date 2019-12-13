import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    changeHandler= (event) =>{
        console.log(event.target.value)
        this.props.fetchGIFs(event.target.value)
    }

    render() { 
        return ( 
            <input
                placeholder="enter search term"
                value={this.props.searchValue}
                onChange={this.changeHandler}
            />
         );
    }
}
