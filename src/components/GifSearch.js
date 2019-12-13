import React from "react";

export default class GifSearch extends React.Component {
  render() {
    return (
      <div style={{padding: "50px", margin: "5px"}}>
        Search: <input
          onSubmit={event => this.props.updateQueryState(event.target.value) }
        />
      </div>
    );
  }
}
