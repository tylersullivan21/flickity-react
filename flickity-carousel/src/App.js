import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

import "../src/flickity.css";
import "../src/index.css";

function Carousel() {
  return (
    <Flickity>
      <img style={{ marginLeft: 5, marginRight: 5 }} src="https://placeimg.com/640/480/animals" />
      <img style={{ marginLeft: 5, marginRight: 5 }} src="https://placeimg.com/640/480/animals" />
      <img style={{ marginLeft: 0, marginRight: 0 }} src="https://placeimg.com/640/480/animals" />
      <img style={{ marginLeft: 5, marginRight: 5 }} src="https://placeimg.com/640/480/animals" />
    </Flickity>
  );
}

function Home() {
  return (
    <div className="App">
      <h1>React Flickity</h1>
      <Carousel />
    </div>
  );
}

export default Home