import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

const NavbarMenu = () => {
  return (
    <Navbar className="custom-navbar">
      <Container>
        <Nav className="nav-links">
          <Nav.Link href="/">
            Home <FaChevronDown size={10} />
          </Nav.Link>

          <Nav.Link href="/shop">
            Shop <FaChevronDown size={10} />
          </Nav.Link>

          <Nav.Link href="/pages">
            Pages <FaChevronDown size={10} />
          </Nav.Link>

          <Nav.Link href="/blog">
            Blog <FaChevronDown size={10} />
          </Nav.Link>

          <Nav.Link href="/about">
            About Us
          </Nav.Link>

          <Nav.Link href="/contact">
            Contact Us
          </Nav.Link>
        </Nav>

        <div className="nav-phone">
          <FaPhoneAlt />
          <span>(219) 555-0114</span>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;