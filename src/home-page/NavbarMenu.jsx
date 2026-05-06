import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import "../css/NavbarMenu.css";

const NAV_LINKS = ["Home", "Shop", "Pages", "Blog", "About Us", "Contact Us"];
const HAS_DROPDOWN = ["Home", "Shop", "Pages", "Blog"];

const NavbarMenu = ({ toggleCategory }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container className="custom-container">

        {/* LEFT */}
        <button className="all-cat-btn" onClick={toggleCategory}>
          ☰ All Categories ▼
        </button>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-between">

          {/*  CENTER NAV */}
          <Nav className="mx-auto">

            {NAV_LINKS.map((link) =>
              HAS_DROPDOWN.includes(link) ? (
                <NavDropdown
                  key={link}
                  title={link}
                  id={`${link}-dropdown`}
                >
                  {/* simple items */}
                  <NavDropdown.Item>{link} </NavDropdown.Item>
                  <NavDropdown.Item>{link} </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link key={link}>{link}</Nav.Link>
              )
            )}

          </Nav>

          {/* RIGHT ICONS */}
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
    </Navbar>
  );
};

export default NavbarMenu;