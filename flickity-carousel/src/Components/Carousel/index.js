import React from "react";
import $ from "jquery";
import Flickity from "react-flickity-component";
class Carousel extends React.Component{
componentDidMount(){
    var elem = document.querySelector('.carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'center',
      contain: true,
     wrap-around:true;
    });
    
);
}

render(){
    return(
    <React.Fragment>
 
 <div class="carousel">
  <div class="carousel-cell">
  <img src="https://via.placeholder.com/1200x1080.png" alt=""/>
  </div>
  <div class="carousel-cell">
  <img src="https://via.placeholder.com/1200x1080.png" alt=""/>
  </div>
  <div class="carousel-cell">
  <img src="https://via.placeholder.com/1200x1080.png" alt=""/>
  </div>
  <div class="carousel-cell">
  <img src="https://via.placeholder.com/1200x1080.png" alt=""/>
  </div>

</div>


  </React.Fragment>
    );
}
}

export default Carousel;


