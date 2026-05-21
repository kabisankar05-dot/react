import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaApple,
  FaGooglePlay
} from "react-icons/fa";

import {
  MdOutlineMail
} from "react-icons/md";

import logo from "../assets/Logo.svg";

import "../css/FooterSection.css";

const FooterSection = () => {

  return (

    <footer>

      <Container>

        {/* NEWSLETTER */}

        <div className="newsletter-section">

          <Row className="align-items-center">

            <Col lg={4} md={12}>

              <div className="newsletter-left">

                <div className="mail-icon">
                  <MdOutlineMail />
                </div>

                <div>

                  <h4 className="heading">
                    Subscribe our Newsletter
                  </h4>

                  <p className="mb-0">
                    Pellentesque eu nibh eget mauris
                    congue mattis matti.
                  </p>

                </div>

              </div>

            </Col>

            <Col lg={5} md={8}>

              <div className="subscribe-box">

                <Form.Control
                  type="email"
                  placeholder="Your email address"
                />

                <Button>
                  Subscribe
                </Button>

              </div>

            </Col>

            <Col lg={3} md={4}>

              <div className="social-icons">

                <div className="icon-box">
                  <FaFacebookF />
                </div>

                <div className="icon-box">
                  <FaTwitter />
                </div>

                <div className="icon-box">
                  <FaPinterestP />
                </div>

                <div className="icon-box">
                  <FaInstagram />
                </div>

              </div>

            </Col>

          </Row>

        </div>

        {/* FOOTER */}

        <div className="footer-main">

          <Row>

            <Col lg={4}>

              <img
                src={logo}
                className="logo"
                alt="Logo"
              />

              <p>
                Morbi cursus porttitor enim
                lobortis molestie.
              </p>

              <div className="contact-info">

                <span>
                  (219) 555-0114
                </span>

                <span>
                  Proxy@gmail.com
                </span>

              </div>

            </Col>

            <Col lg={2}>

              <h5>My Account</h5>

              <ul>

                <li>My Account</li>

                <li>Order History</li>

                <li>Shopping Cart</li>

                <li>Wishlist</li>

              </ul>

            </Col>

            <Col lg={2}>

              <h5>Helps</h5>

              <ul>

                <li>Contact</li>

                <li>Faqs</li>

                <li>Terms</li>

                <li>Privacy</li>

              </ul>

            </Col>

            <Col lg={2}>

              <h5>Proxy</h5>

              <ul>

                <li>About</li>

                <li>Shop</li>

                <li>Product</li>

                <li>Track Order</li>

              </ul>

            </Col>

            <Col lg={2}>

              <h5>Download App</h5>

              <div className="app-btn">

                <button>

                  <FaApple />

                  App Store

                </button>

                <button>

                  <FaGooglePlay />

                  Google Play

                </button>

              </div>

            </Col>

          </Row>

        </div>

        {/* COPYRIGHT */}

        <div className="copyright">

          <div className="copy-flex">

            <p>
              Ecobazar © 2021
            </p>

            <div className="payment">

              <span>💳</span>

              <span>VISA</span>

              <span>Master</span>

            </div>

          </div>

        </div>

      </Container>

    </footer>

  );

};

export default FooterSection;