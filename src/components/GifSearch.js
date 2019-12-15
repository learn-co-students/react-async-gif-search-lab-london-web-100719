import React, { Component } from 'react';

class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.searchBox = React.createRef()
    this.state = { searchTerm: "" }
  }

handleChange = () => {
  this.setState({ searchTerm: this.searchBox.current.value})
  this.props.handleFetch(this.state.searchTerm)
}

  render() { 
    return ( <form>
      Search for gifs:
      <input onChange={this.handleChange} ref={this.searchBox} type="textfield"/>
    </form> );
  }
}
 
export default GifSearch;