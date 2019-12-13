import React from "react";


export default class GifList extends React.Component {
   
  render() {
    return (
      <div>
        <ul>
            {this.props.gifs.map( (gif)=> {
                return(
                    <img src = {gif.images.original.url} alt= "" key= {gif.title} style={{height: "250px", width: "300px", padding: "5px"}} />
                )
            })}
        </ul>
      </div>
    );
  }
}
