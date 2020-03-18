import React from 'react'


class GifList extends React.Component{

render() {
    return (
        <div>
            <ul>
                {
                    // console.log(this.props.gifys, "HEY"),
                this.props.gifys.map(gify => (
                    <li key={gify.id}>
                    <img key={gify.images.original.url} src={gify.images.original.url} />  
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

}

export default GifList 