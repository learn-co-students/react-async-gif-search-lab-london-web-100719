import React from 'react' 

export default class Gif extends React.Component {

    render() {
        return (
            <li>
                <img src={this.props.gifi.images.original.url}/>
            </li>
        )
    }
}