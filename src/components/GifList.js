import React from "react";

const GifList = props => {
  const formGifs = () => {
    return props.gifUrls.map(url => (
      <li>
        <img src={url} alt="" />
      </li>
    ));
  };

  return <ul>{formGifs()}</ul>;
};

export default GifList;
