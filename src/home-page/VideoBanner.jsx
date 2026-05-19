import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import "../css/VideoBanner.css";

const VideoBanner = () => {
  const [showVideo, setShowVideo] = useState(false);

  // YouTube Video Link
  const videoUrl = "https://www.youtube.com/embed/330AoScKd5c";

  return (
    <>
      <Container fluid className="video-section">

        {/* Overlay */}
        <div className="video-overlay"></div>

        {/* Content */}
        <div className="video-content">
          <h2>
            We’re the Best Organic <br />
            Farm in the World
          </h2>

          {/* Play Button */}
          <button
            className="play-btn"
            onClick={() => setShowVideo(true)}
          >
            <FaPlay />
          </button>
        </div>
      </Container>

      {/* Video Popup */}
      <Modal
        show={showVideo}
        onHide={() => setShowVideo(false)}
        centered
        size="lg"
      >
        <Modal.Body className="video-modal-body">
          <iframe
            width="100%"
            height="500"
            src={videoUrl}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoBanner;