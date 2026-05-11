import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

import "../css/NavbarMenu.css";

const NAV_LINKS = ["Home", "Shop", "Pages", "Blog", "About Us", "Contact Us"];

const HAS_DROPDOWN = ["Home", "Shop", "Pages", "Blog"];

const CATEGORIES = [
  "Vegetables",
  "Fresh Fruits",
  "Fresh Nuts",
  "Spices",
  "Fresh Onion",
  "Organic Products",
];

const NavbarMenu = ({ toggleCategory, showCategory }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">

      <Container className="custom-container">

        {/* ALL CATEGORY BUTTON */}
        <button className="all-cat-btn" onClick={toggleCategory}>
          ☰ All Categories
        </button>

        {/* MOBILE ICONS */}
        <div className="mobile-icons">
          <FaHeart />
          <div className="cart-icon">
            <FaShoppingCart />
            <span className="badge"></span>
          </div>
          <FaUser />
        </div>

        {/* DESKTOP MENU */}
        <Navbar.Collapse className="justify-content-between">
          <Nav className="mx-auto">
            {NAV_LINKS.map((link) =>
              HAS_DROPDOWN.includes(link) ? (
                <NavDropdown key={link} title={link} id={`${link}-dropdown`}>
                  <NavDropdown.Item>{link}</NavDropdown.Item>
                  <NavDropdown.Item>{link}</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link key={link}>{link}</Nav.Link>
              )
            )}
          </Nav>

          <div className="icons">
            <FaHeart />
            <div className="cart-icon">
              <FaShoppingCart />
              <span className="badge"></span>
            </div>
            <FaUser />
          </div>
        </Navbar.Collapse>

      </Container>

      {/*  MOBILE ONLY CATEGORY MENU */}
      {showCategory && (
        <div className="mobile-category-menu">
          {CATEGORIES.map((item, index) => (
            <div key={index} className="mobile-category-item">
              {item}
            </div>
          ))}
        </div>
      )}

    </Navbar>
  );
};

export default NavbarMenu;