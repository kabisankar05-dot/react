// BrandLogoSection.jsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/BrandLogoSection.css";

import stepsLogo from "../assets/Vector.png";
import mangoLogo from "../assets/mango-1.png";
import foodLogo from "../assets/Group (1).png";
import foodNetworkLogo from "../assets/food.png";
import bookOffLogo from "../assets/bookoff-corporation-logo.png";
import gSeriesLogo from "../assets/Group.png";

const brands = [
  { name: "", logo: stepsLogo },
  { name: "", logo: mangoLogo },
  { name: "", logo: foodNetworkLogo },
  { name: "", logo: foodLogo },
  { name: "", logo: bookOffLogo },
  { name: "", logo: gSeriesLogo }
];

const BrandLogoSection = () => {
  return (
    <section className="brand-section">
      <Container>

        <div className="brand-wrapper">

          <Row className="g-0 align-items-center justify-content-center">

            {brands.map((brand, index) => (
              <Col
                lg={2}
                md={4}
                xs={6}
                key={index}
                className="brand-col"
              >
                <div className="brand-item">

                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="brand-logo"
                  />

                  <h4
                    className={`brand-name ${
                      brand.name === "steps"
                        ? "active-brand"
                        : ""
                    }`}
                  >
                    {brand.name}
                  </h4>

                </div>
              </Col>
            ))}

          </Row>

        </div>

      </Container>
    </section>
  );
};

export default BrandLogoSection;