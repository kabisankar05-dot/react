import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

import "../css/TeamSection.css";

import team1 from "../assets/teamnumber-1.jpg";
import team2 from "../assets/teamnumber-2.png";
import team3 from "../assets/teamnumber-3.png";
import team4 from "../assets/teamnumber-4.jpg";

const members = [
  {
    id: 1,
    image: team1,
    name: "Jenny Wilson",
    role: "CEO & Founder",
  },
  {
    id: 2,
    image: team2,
    name: "Jane Cooper",
    role: "Worker",
  },
  {
    id: 3,
    image: team3,
    name: "Cody Fisher",
    role: "Security Guard",
  },
  {
    id: 4,
    image: team4,
    name: "Robert Fox",
    role: "Senior Farmer Manager",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <Container>
        
        {/* SECTION HEADING */}
        <div className="section-heading">
          <span>TEAM</span>
          <h2>Our Professional Members</h2>
        </div>

        {/* TEAM CARDS */}
        <Row>
          {members.map((member) => (
            <Col lg={3} md={6} sm={12} key={member.id}>
              
              <Card className="team-card">

                {/* IMAGE */}
                <div className="team-image-wrapper">
                  <Card.Img
                    variant="top"
                    src={member.image}
                    className="team-image"
                  />

                  {/* OVERLAY */}
                  <div className="team-overlay"></div>

                  {/* SOCIAL ICONS */}
                  <div className="social-icons">
                    <a href="/">
                      <FaFacebookF />
                    </a>

                    <a href="/">
                      <FaTwitter />
                    </a>

                    <a href="/">
                      <FaPinterestP />
                    </a>

                    <a href="/">
                      <FaInstagram />
                    </a>
                  </div>
                </div>

                {/* CONTENT */}
                <Card.Body>
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default TeamSection;