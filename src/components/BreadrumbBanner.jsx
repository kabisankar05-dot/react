import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";
import "./BreadcrumbBanner.css";

const BreadcrumbBanner = ({
  parent,
  parentLink,
  title,
}) => {
  return (
    <div className="shop-banner">
      <Container>
        <div className="breadcrumb-content">

          <Link to="/" className="home-link">
            <FaHome className="home-icon" />
          </Link>

          <FaChevronRight className="arrow-icon" />

          <Link
            to={parentLink}
            className="bread-link"
          >
            {parent}
          </Link>

          <FaChevronRight className="arrow-icon" />

          <span className="active-link">
            {title}
          </span>

        </div>
      </Container>
    </div>
  );
};

export default BreadcrumbBanner;