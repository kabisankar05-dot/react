import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  FaShippingFast,
  FaHeadset,
  FaShoppingBag,
  FaBoxOpen,
} from "react-icons/fa";

import "../css/Service.css";

const services = [
  {
    icon: <FaShippingFast />,
    title: "Free Shipping",
    subtitle: "Free shipping with discount",
    active: false,
  },
  {
    icon: <FaHeadset />,
    title: "Great Support 24/7",
    subtitle: "Instant access to Contact",
    active: false,
  },
  {
    icon: <FaShoppingBag />,
    title: "100% Secure Payment",
    subtitle: "We ensure your money is save",
    active: true,
  },
  {
    icon: <FaBoxOpen />,
    title: "Money-Back Guarantee",
    subtitle: "30 days money-back",
    active: false,
  },
];

const ServiceSection = () => {
  return (
    <div className="service-section">
      <Container>

        <Row className="g-0">

          {services.map((item, index) => (
            <Col lg={3} md={6} sm={6} xs={12} key={index}>

              <div
                className={`service-card ${
                  item.active ? "active-service" : ""
                }`}
              >

                <div className="service-icon">
                  {item.icon}
                </div>

                <div className="service-text">
                  <h5>{item.title}</h5>
                  <p>{item.subtitle}</p>
                </div>

              </div>

            </Col>
          ))}

        </Row>

      </Container>
    </div>
  );
};

export default ServiceSection;