import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

import { LuPhoneCall } from "react-icons/lu";

import "./Header.css";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">

        <Container className="topbar-flex">

          {/* LEFT */}
          <span className="location-text d-flex align-items-center gap-2">
            <FaMapMarkerAlt />
            Store Location: Lincoln - 344, Illinois, Chicago, USA
          </span>

          {/* RIGHT */}
          <div className="dropdown-group">

            <Dropdown>
              <Dropdown.Toggle size="sm" className="dropdown-btn">
                Eng
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Tamil</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle size="sm" className="dropdown-btn">
                USD
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>USD</Dropdown.Item>
                <Dropdown.Item>INR</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>

        </Container>

        {/* HR */}
        <Container>
          <hr className="topbar-line" />
        </Container>

      </div>

      {/* ================= MAIN HEADER ================= */}

      <Container className="py-3">

        <Row className="align-items-center">

          {/* LOGO */}
          <Col md={3} className="text-center text-md-start mb-3 mb-md-0">

            <div className="logo-wrapper">
              <img src={logo} alt="logo" className="logo-img" />
            </div>

          </Col>

          {/* SEARCH */}
          <Col md={6}>

            <div className="search-box">

              <div className="search-left">

                <FaSearch className="search-icon" />

                <input
                  type="text"
                  placeholder="Search..."
                />

              </div>

              {/* DESKTOP BUTTON */}
              <button className="search-btn desktop-search-btn">
                Search
              </button>

              {/* MOBILE ICON BUTTON */}
              <button className="search-btn mobile-search-btn">
                <FaSearch />
              </button>

            </div>

          </Col>

          {/* CUSTOMER SERVICE */}
          <Col
            md={3}
            className="text-center text-md-end mt-3 mt-md-0"
          >

            <div className="customer-service">

              <LuPhoneCall className="phone-icon" />

              <div className="cs-text">

                <span className="cs-label">
                  Customer Services
                </span>

                <span className="cs-number">
                  (219) 555-0114
                </span>

              </div>

            </div>

          </Col>

        </Row>

      </Container>
    </>
  );
};

export default Header;