// TestimonialSection.jsx

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "../css/TestimonialSection.css";

import testimonial1 from "../assets/testimonials-1.jpg";
import testimonial2 from "../assets/testimonials-2.jpg";
import testimonial3 from "../assets/testimonials-3.jpg";

const testimonials = [
  {
    name: "Robert Fox",
    role: "Customer",
    image: testimonial1,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
  },
  {
    name: "Dianne Russell",
    role: "Customer",
    image: testimonial2,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
  },
  {
    name: "Eleanor Pena",
    role: "Customer",
    image: testimonial3,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <Container>
        {/* Heading */}
        <div className="testimonial-heading">
          <span>CLIENT TESTIMONIAL</span>
          <h2>What our Client Says</h2>
        </div>

        {/* Cards */}
        <Row>
          {testimonials.map((item, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="mb-4">
              <Card className="testimonial-card">
                <Card.Body>
                  {/* Quote Icon */}
                  <FaQuoteLeft className="quote-icon" />

                  {/* Text */}
                  <p className="testimonial-text">{item.text}</p>

                  {/* Bottom */}
                  <div className="testimonial-bottom">
                    {/* Left */}
                    <div className="user-info">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="user-img"
                      />

                      <div>
                        <h5>{item.name}</h5>
                        <span>{item.role}</span>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSection;