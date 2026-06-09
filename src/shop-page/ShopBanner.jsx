import React from "react";
import { Container } from "react-bootstrap";
import { FaHome, FaChevronRight } from "react-icons/fa";
import "./ShopBanner.css";

const ShopBanner = () => {
  return (
    <div className="shop-banner">
      <Container>
        <div className="breadcrumb-content">

          <FaHome className="home-icon" />

          <FaChevronRight className="arrow-icon" />

          <span className="bread-link">
            Categories
          </span>

          <FaChevronRight className="arrow-icon" />

          <span className="active-link">
            Vegetables
          </span>

        </div>
      </Container>
    </div>
  );
};

export default ShopBanner;