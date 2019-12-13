import React from 'react' 

export default class GifListSearch extends React.Component {

    render() {
        return (
            <div>
                <p>Enter a Search Term:</p>
                <form>
                    <input onChange={event => this.props.setSearchWord(event)}></input>
                    <br/>
                    <button>Find Gifs</button>
                </form>
            </div>
        )
    }
}