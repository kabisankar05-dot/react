// BrandLogoSection.jsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/BrandLogoSection.css";

const brands = [
  "steps",
  "MANGO",
  "Food Network",
  "FOOD",
  "BOOK OFF",
  "G Series",
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

                  <h4
                    className={`brand-name ${
                      brand === "steps"
                        ? "active-brand"
                        : ""
                    }`}
                  >
                    {brand}
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