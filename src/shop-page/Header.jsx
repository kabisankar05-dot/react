import React, { useState,useContext } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";

import {
  FaMapMarkerAlt,
  FaSearch,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { CartContext } from "../shop-page/CartContext";

import "./Header.css";
import logo from "../assets/Logo.svg";
import CartSidebar from "./CartSidebar";

const Header = () => {
  const [language, setLanguage] =
    useState("Eng");

  const [currency, setCurrency] =
    useState("USD");

  const [showCart, setShowCart] =
    useState(false);

  const { cartItems } = useContext(CartContext);

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <Container className="topbar-flex">
          <span className="location-text">
            <FaMapMarkerAlt />
            Store Location: Lincoln - 344,
            Illinois, Chicago, USA
          </span>

          <div className="topbar-right">
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="dropdown-btn"
              >
                {language}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    setLanguage("Eng")
                  }
                >
                  English
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() =>
                    setLanguage("Tamil")
                  }
                >
                  Tamil
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="dropdown-btn"
              >
                {currency}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    setCurrency("USD")
                  }
                >
                  USD
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() =>
                    setCurrency("INR")
                  }
                >
                  INR
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <span>|</span>

            <a
              href="/signin"
              className="auth-link"
            >
              Sign In
            </a>

            <span>/</span>

            <a
              href="/signup"
              className="auth-link"
            >
              Sign Up
            </a>
          </div>
        </Container>
      </div>

      {/* MAIN HEADER */}
      <Container className="py-3">
        <Row className="align-items-center">
          <Col
            lg={3}
            md={3}
            className="text-center text-md-start mb-3 mb-md-0"
          >
            <img
              src={logo}
              alt="logo"
              className="logo-img"
            />
          </Col>

          <Col lg={6} md={6}>
            <div className="search-box">
              <div className="search-left">
                <FaSearch className="search-icon" />

                <input
                  type="text"
                  placeholder="Search..."
                />
              </div>

              <button className="search-btn">
                Search
              </button>
            </div>
          </Col>

          <Col
            lg={3}
            md={3}
            className="text-center text-md-end mt-3 mt-md-0"
          >
            <div className="header-icons">
              <FaHeart className="wishlist-icon" />

              <div className="icon-divider"></div>

              <div className="cart-wrapper">
                <FaShoppingCart
                  className="cart-icon"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    setShowCart(true)
                  }
                />

                <div className="cart-info">
                  <span className="cart-label">
                    Shopping cart:
                  </span>

                 <span className="cart-price">
                  {cartItems.length} Items
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <hr className="topbar-line" />

      <CartSidebar
        show={showCart}
        handleClose={() =>
          setShowCart(false)
        }
      />
    </>
  );
};

export default Header;