import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {
  FaShippingFast,
  FaHeadphonesAlt,
  FaShoppingBag,
  FaMoneyBillWave,
} from "react-icons/fa";

import bg1 from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-2.jpg";
import bg3 from "../assets/image-3.jpg";

import "../css/Carousel.css";

const CarouselSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      subtitle: "Free shipping with discount",
    },
    {
      icon: <FaHeadphonesAlt />,
      title: "Great Support 24/7",
      subtitle: "Instant access to Contact",
    },
    {
      icon: <FaShoppingBag />,
      title: "100% Secure Payment",
      subtitle: "We ensure your money is safe",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Money-Back Guarantee",
      subtitle: "30 days money-back",
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}

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
              className="hero-slide"
              style={{ backgroundImage: `url(${bg1})` }}
            >
              <div className="hero-text">
                <h1>Fresh & Healthy Organic Food</h1>

                <p>SALE UP TO 48% OFF</p>

                <Button
                  className="button"
                  onClick={() => navigate("/shop")}
                >
                  Shop now →
                </Button>
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
                  Fresh & Healthy <br />
                  Organic Food
                </h1>

                <p>
                  <span className="sale-text">
                    SALE UP TO 48% OFF
                  </span>
                </p>

                <Button
                  className="button"
                  onClick={() => navigate("/shop")}
                >
                  Shop now →
                </Button>
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
                  Fresh & Healthy <br />
                  Organic Food
                </h1>

                <p>
                  <span className="sale-text">
                    SALE UP TO 48% OFF
                  </span>
                </p>

                <Button
                  className="button"
                  onClick={() => navigate("/shop")}
                >
                  Shop now →
                </Button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselSection; 