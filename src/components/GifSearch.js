import React, { Component } from 'react';

export class GifSearch extends Component {
    state ={
        query: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchGifs(this.state.query);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="search gif" value={this.state.query} 
                        onChange={event => this.setState({query: event.target.value})} />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default GifSearch;


