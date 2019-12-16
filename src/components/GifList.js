import React from 'react'


class GifList extends React.Component{

render() {
    return (
        <div>
            <ul>
                {this.props.gifys.map(gify => (
                    <li>
                    <img key={gify.images.original.url} src={gify.images.original.url} />  
                    </li>
                ))}
            </ul>
        </div>
    )
}

}

export default GifList 