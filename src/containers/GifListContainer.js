import React, { useState } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearch = event => {
    if (!event.target) return;
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    )
      .then(res => res.json())
      .then(json => {
        convertGifDataToURL(json.data);
      });
  };

  const convertGifDataToURL = gifs => {
    const urls = gifs.map(gif => gif.images.original.url);
    setGifs(urls);
  };

  return (
    <React.Fragment>
      <GifSearch
        searchTerm={searchTerm}
        updateSearch={updateSearch}
        searchSubmit={handleSearchSubmit}
      />
      <GifList gifUrls={gifs} />
    </React.Fragment>
  );
};

export default GifListContainer;
