import React from 'react'

class GifSearch extends React.Component{
  

render() {
    return (
        <div>
            <form onSubmit={this.props.handleSubmit} >
            <input placeholder="Search GIFS" name="search" onChange={this.props.handleChange} />
            <button> Search GIFS </button>
            </form>
        </div>
    )
}



}

export default GifSearch