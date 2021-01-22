import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

import "../src/flickity.css";
import "../src/index.css";

function Carousel() {
  return (
    <Flickity>
      <img style={{ }} src="https://via.placeholder.com/1200x580.png" />
      <img style={{ }} src="https://via.placeholder.com/1200x580.png" />
      <img style={{  }} src="https://via.placeholder.com/1200x580.png" />
      <img style={{ }} src="https://via.placeholder.com/1200x580.png" />
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