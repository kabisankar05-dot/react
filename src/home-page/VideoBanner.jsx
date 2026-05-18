import React from "react";
import { Container } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import "../css/VideoBanner.css";

const VideoBanner = () => {
  return (
    <Container fluid className="video-section">

      <div className="video-overlay"></div>

      <div className="video-content">
        <h2>
          We’re the Best Organic <br />
          Farm in the World
        </h2>

        <button className="play-btn">
          <FaPlay />
        </button>
      </div>

    </Container>
  );
};

export default VideoBanner;