import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaApple,
  FaLeaf,
  FaChevronRight,
} from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import {
  BsCreditCard2Front,
  BsPaypal,
} from "react-icons/bs";
import "../css/FooterSection.css";
import logo from "../assets/Logo.svg";

/* ─── DATA ──────────────────────────────────────────── */
const myAccountLinks = [
  "My Account",
  "Order History",
  "Shopping Cart",
  "Wishlist",
];

const helpsLinks = [
  "Contact",
  "FAQs",
  "Terms & Conditions",
  "Privacy Policy",
];

const proxyLinks = [
  "About",
  "Shop",
  "Product",
  "Track Order",
];

/* ─── NEWSLETTER ────────────────────────────────────── */
function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <Container>
    <section className="newsletter-section">
      <Container>
        <Row className="align-items-center gy-3">
          {/* Left – branding */}
          <Col lg={4} md={12}>
            <div className="newsletter-brand">
              <div className="newsletter-icon-wrap">
                <MdEmail />
              </div>
              <div className="newsletter-text">
                <h5>Subscribe our Newsletter</h5>
                <p>Get daily fresh offers, new arrivals &amp; big savings.</p>
              </div>
            </div>
          </Col>

          {/* Center – form */}
          <Col lg={4} md={12}>
            <div className="newsletter-form-wrap">
              <form
                className="newsletter-input-group"
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  placeholder="Your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-subscribe">
                  Subscribe
                </button>
              </form>
            </div>
          </Col>

          {/* Right – socials */}
          <Col lg={4} md={12}>
            <div className="newsletter-social-wrap">
              <a
                href="#facebook"
                className="social-btn active"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a href="#twitter" className="social-btn" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a
                href="#pinterest"
                className="social-btn"
                aria-label="Pinterest"
              >
                <FaPinterestP />
              </a>
              <a
                href="#instagram"
                className="social-btn"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </Container>
  );
}

/* ─── LINK LIST ─────────────────────────────────────── */
function FooterLinkList({ title, links }) {
  return (
    <Container>
    <div>
      <h6 className="footer-col-title">{title}</h6>
      <ul className="footer-link-list">
        {links.map((link) => (
          <li key={link}>
            <a href="#!">
              <FaChevronRight className="link-arrow" />
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
        </Container>
  );
}

/* ─── MAIN FOOTER ───────────────────────────────────── */
function FooterMain() {
  return (
    <footer className="footer-main">
      <Container>
        <Row className="gy-5">
          {/* Brand column */}
          <Col xl={3} lg={4} md={6} sm={12}>
            <a href="#home" className="footer-logo">
               <img src={logo} alt="Ecobazar Logo" className="logo-image" />
            </a>

            <p className="footer-desc">
              Ecobazar is an organic food &amp; grocery store committed to
              delivering the freshest produce straight from farm to your table.
              Shop healthy, live better.
            </p>

            <div className="footer-contact-item">
              <MdPhone />
              <a href="tel:+1234567890">(123) 456-7890</a>
            </div>
            <div className="footer-contact-item">
              <MdEmail />
              <a href="mailto:hello@ecobazar.com">hello@ecobazar.com</a>
            </div>
            <div className="footer-contact-item">
              <MdLocationOn />
              <span>123 Green Street, Eco City</span>
            </div>
          </Col>

          {/* My Account */}
          <Col xl={2} lg={2} md={6} sm={6} xs={6}>
            <FooterLinkList title="My Account" links={myAccountLinks} />
          </Col>

          {/* Helps */}
          <Col xl={2} lg={2} md={6} sm={6} xs={6}>
            <FooterLinkList title="Helps" links={helpsLinks} />
          </Col>

          {/* Proxy */}
          <Col xl={2} lg={2} md={6} sm={6} xs={6}>
            <FooterLinkList title="Proxy" links={proxyLinks} />
          </Col>

          {/* Download App */}
          <Col xl={3} lg={2} md={6} sm={6} xs={12}>
            <h6 className="footer-col-title">Download App</h6>
            <p
              style={{
                fontSize: "13px",
                color: "#888",
                marginBottom: "16px",
                lineHeight: "1.6",
              }}
            >
              Shop on the go — download our mobile app for exclusive app-only
              deals and fast checkout.
            </p>

            <a href="#appstore" className="app-btn">
              <FaApple />
              <div className="app-btn-text">
                <span className="app-btn-label">Download on the</span>
                <span className="app-btn-name">App Store</span>
              </div>
            </a>

            <a href="#playstore" className="app-btn">
              <SiGoogleplay />
              <div className="app-btn-text">
                <span className="app-btn-label">Get it on</span>
                <span className="app-btn-name">Google Play</span>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

/* ─── COPYRIGHT ─────────────────────────────────────── */
function FooterCopyright() {
  return (
    <div className="footer-copyright">
      <Container>
        <div className="copyright-inner">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>Ecobazar</strong> eCommerce. All Rights
            Reserved. 
          </p>

          <div className="payment-badges">
            <span className="payment-badge visa">
              <BsCreditCard2Front />
              VISA
            </span>
            <span className="payment-badge master">
              <BsCreditCard2Front />
              MC
            </span>
            <span className="payment-badge paypal">
              <BsPaypal />
              PayPal
            </span>
            <span className="payment-badge amex">
              <BsCreditCard2Front />
              AMEX
            </span>
            <span className="payment-badge stripe">
              <BsCreditCard2Front />
              Stripe
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

/* ─── ROOT EXPORT ───────────────────────────────────── */
export default function FooterSection() {
  return (
    <>
      <NewsletterSection />
      <FooterMain />
      <FooterCopyright />
    </>
  );
}