import React from "react";
import { Carousel, Button } from "react-bootstrap";
import bg1 from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-2.jpg";
import bg3 from "../assets/image-3.jpg";
import "../css/Carousel.css";

const CarouselSection = () => {
  return (
    <div className="hero-wrapper">
      <Carousel 
        fade 
        indicators={false} 
        controls={false} 
        interval={3000} 
        pause={false}
      >
        
        {/* SLIDE 1 */}
        <Carousel.Item>
          <div
            className="hero-slide hero-slide-1"
            style={{ backgroundImage: `url(${bg1})` }}
          >
            <div className="hero-text">
              <h1>Fresh & Healthy Organic Food</h1>
              <p>SALE UP TO 48% OFF</p>
              <Button className="button">Shop now →</Button>
            </div>
          </div>
        </Carousel.Item>

        {/* SLIDE 2 */}
        <Carousel.Item>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <div className="hero-text">
              <h1>
                Fresh & Healthy <br /> Organic Food
              </h1>
              <p>
                <span className="sale-text">SALE UP TO 48% OFF</span>
              </p>
              <Button className="button">Shop now →</Button>
            </div>
          </div>
        </Carousel.Item>

        {/* SLIDE 3 */}
        <Carousel.Item>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${bg3})` }}
          >
            <div className="hero-text">
              <h1>
                Fresh & Healthy <br /> Organic Food
              </h1>
              <p>
                <span className="sale-text">SALE UP TO 48% OFF</span>
              </p>
              <Button className="button">Shop now →</Button>
            </div>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default CarouselSection;