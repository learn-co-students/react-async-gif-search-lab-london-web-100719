import React, { Component } from 'react';

export default class GifListItem extends Component {

	render() {

		return (

			<iframe src={this.props.imageSource} alt='gif'/>

		);

	};

};