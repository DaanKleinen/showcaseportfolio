import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../componentStyle/testimonial.css";
import unknown from "../img/unknown.jpg";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        id="carousel"
      >
      <div>
      <img src={unknown} />
      <div className="myCarousel">
        <h3>Name</h3>
        <h4>Company</h4>
        <p>
          text
        </p>
      </div>
    </div>

        <div>
        <img src={unknown} />
        <div className="myCarousel">
          <h3>Name</h3>
          <h4>Company</h4>
          <p>
            text
          </p>
        </div>
      </div>

        <div>
          <img src={unknown} />
          <div className="myCarousel">
            <h3>Name</h3>
            <h4>Company</h4>
            <p>
              text
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
