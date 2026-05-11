import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../css/Banner.css";

const Banner = () => {

  // TIMER STATE

  const [time, setTime] = useState({
    days: 0,
    hours: 2,
    minutes: 18,
    seconds: 46,
  });

  // USE EFFECT TIMER

  useEffect(() => {

    const timer = setInterval(() => {

      setTime((prev) => {

        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        }

        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        }

        else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return {
          days,
          hours,
          minutes,
          seconds,
        };

      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="offer-section">

      <Container>

        <Row className="g-4">

          {/* ================= CARD 1 ================= */}

          <Col lg={4} md={6} xs={12}>

            <div className="offer-card card-one">

              <div className="offer-content">

                <span className="offer-tag">
                  BEST DEALS
                </span>

                <h2>
                  Sale of the Month
                </h2>

                {/* TIMER */}

                <div className="timer">

                  <div>
                    <h4>
                      {String(time.days).padStart(2, "0")}
                    </h4>
                    <p>DAYS</p>
                  </div>

                  <span>:</span>

                  <div>
                    <h4>
                      {String(time.hours).padStart(2, "0")}
                    </h4>
                    <p>HOURS</p>
                  </div>

                  <span>:</span>

                  <div>
                    <h4>
                      {String(time.minutes).padStart(2, "0")}
                    </h4>
                    <p>MINS</p>
                  </div>

                  <span>:</span>

                  <div>
                    <h4>
                      {String(time.seconds).padStart(2, "0")}
                    </h4>
                    <p>SECS</p>
                  </div>

                </div>

                <Button className="shop-btn">
                  Shop Now →
                </Button>

              </div>

            </div>

          </Col>

            {/* ================= CARD 2 ================= */}

          <Col lg={4} md={6} xs={12}>

            <div className="offer-card card-two">

              <div className="offer-content">

                <span className="offer-tag">
                  85% FAT FREE
                </span>

                <h2>
                  Low-Fat Meat
                </h2>

                <p className="price">
                  Started at <span>$79.99</span>
                </p>

                <Button className="shop-btn">
                  Shop Now →
                </Button>

              </div>

            </div>

          </Col>

          {/* ================= CARD 3 ================= */}

          <Col lg={4} md={6} xs={12}>

            <div className="offer-card card-three">

              <div className="offer-content dark-text">

                <span className="offer-tag">
                  SUMMER SALE
                </span>

                <h2>
                  100% Fresh Fruit
                </h2>

                <p className="discount">
                  Up to <span>64% OFF</span>
                </p>

                <Button className="shop-btn">
                  Shop Now →
                </Button>

              </div>

            </div>

          </Col>

        </Row>

      </Container>

    </div>
  );
};

export default Banner;