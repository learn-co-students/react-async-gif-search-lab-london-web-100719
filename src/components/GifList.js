import React from 'react' 
import Gif from './Gif'

export default class GifList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.gifList.map((gif, index) => {
                    return (
                        <Gif gifi={gif} key={index} />
                    )
                })}
            </ul>
        )
    }
}