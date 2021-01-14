import React from "react";
import $ from "jquery";
import Flickity from "react-flickity-component";
class Carousel extends React.Component{
componentDidMount(){
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'center',
      contain: false,
    
    });
    
    // element argument can be a selector string
    //   for an individual element
    var flkty = new Flickity( '.carousel', {
      // options
      wrapAround: true,
      freeScroll: true,
freeScrollFriction: 0.03
    });
}

render(){
    return(
    <React.Fragment>
 
 <div class="carousel">
  <div class="carousel-cell">
  <img src="https://placeimg.com/640/480/animals" alt=""/>
  </div>
  <div class="carousel-cell">
  <img src="https://placeimg.com/640/480/animals" alt=""/>
  </div>
  <div class="carousel-cell">
  <img src="https://placeimg.com/640/480/animals" alt=""/>
  </div>
   <div class="carousel-cell">
  <img src="https://placeimg.com/640/480/animals" alt=""/>
  </div>

</div>


  </React.Fragment>
    );
}
}

export default Carousel;


