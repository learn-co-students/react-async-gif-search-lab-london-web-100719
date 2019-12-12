import React, { Component } from 'react';
import GifListItem from './GifListItem';

export default class GifList extends Component {

	render() {

		return (

			<div>

				{this.props.gifObjects.map(

					element => {

						return < GifListItem imageSource={element.embed_url} />

					}

				)}

			</div>

		);

	};

};
