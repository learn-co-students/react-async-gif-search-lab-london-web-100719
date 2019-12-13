import React, { Component } from 'react';

export default class GifList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ul>
                {
                    this.props.gifs.map( (gif,index) =>{
                        return (
                           console.log(gif.images.original.url),
                            <li key={index}>
                                <p>{gif.title}</p>
                                <img style={{height: "250px", width:"250px" }} src={gif.images.original.url} />
                            </li>
                        )
                    })
                }
            </ul>
         )
    }
}
 