import React, { Component } from 'react';

export class GifList extends Component {

    handleGifs() {
        return this.props.allGifs.map(gif => <li> <img key={gif.id} src={gif.images.original.url} alt="gif" /> </li>)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.handleGifs()}
                </ul>
            </div>
        );
    }
}

export default GifList;
