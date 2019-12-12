import React, { Component } from 'react';

export default  class GifSearch extends Component {

	render() {

		return (

			<div>

				<form onSubmit={event => this.props.handleSubmit(event)}>

					<input

						type='text'
						name='searchQuery'
						onChange={
							(event) => this.props.handleChange(event.target.value)
						}
						value={this.props.searchQuery}

					></input>
					<button type='submit'>Search</button>

				</form>

			</div>

		);

	};

};