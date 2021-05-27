import React, { Component } from 'react';

export default class GifSearch extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="search">Enter a search term: </label>
                <input type="text" id="search" onChange={this.props.updateSearchInput}></input>
                <button type="submit">Submit</button>
            </form>
        )
    }
}