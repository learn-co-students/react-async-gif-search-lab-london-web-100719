import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {

	apiKey = 'K8AswmcZBPDbwQ5U8PHobbLfi14Eaxrx';

	state = {

		searchQuery: '',
		gifObjects: []

	};

	fetchGifs = () => {

		fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchQuery}&api_key=${this.apiKey}&rating=g`)
			.then(res => res.json())
			.then(res => this.setState({gifObjects: res.data}));

	};

	componentDidMount() {

		this.fetchGifs();

	};

	handleChange = (query) => {

		this.setState({

			searchQuery: query

		});

	};

	handleSubmit = (event) => {

		event.preventDefault();
		this.fetchGifs();

	};

	render() {

		return (

			<div>

				< GifSearch

					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					searchQuery={this.state.searchQuery}

				/>

				< GifList

					gifObjects={this.state.gifObjects}

				/>

			</div>

		);

	};

};