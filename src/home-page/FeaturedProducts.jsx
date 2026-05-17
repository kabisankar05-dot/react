import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";

import {
  FaShoppingCart,
  FaHeart,
  FaEye,
  FaStar,
} from "react-icons/fa";

import "../css/FeaturedProducts.css";

/* =========================
   IMPORT IMAGES
========================= */

import bannerImg from "../assets/featured-product-1.jpg";

import product1 from "../assets/featured-prouct-2.jpg";
import product2 from "../assets/featured-product-3.jpg";
import product3 from "../assets/featured-product-4.jpg";
import product4 from "../assets/featured-product-5.jpg";

import appleImg from "../assets/apple product.jpg";
import eggplantImg from "../assets/eggplant-product.jpg";
import potatoImg from "../assets/potatos product.jpg";
import yellowBannerImg from "../assets/banner-3.jpg";

/* =========================
   PRODUCTS
========================= */

const products = [
  {
    id: 1,
    name: "Chinese Cabbage",
    price: "$14.99",
    image: product1,
  },
  {
    id: 2,
    name: "Green Lettuce",
    price: "$14.99",
    image: product2,
  },
  {
    id: 3,
    name: "Green Chili",
    price: "$14.99",
    image: product3,
  },
  {
    id: 4,
    name: "Corn",
    price: "$14.99",
    image: product4,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-section">

      <Container>

        {/* =========================
            HEADING
        ========================= */}

        <div className="section-heading">

          <span>PRODUCTS</span>

          <h2>Our Featured Products</h2>

        </div>

        {/* =========================
            TOP SECTION
        ========================= */}

        <Row className="g-2 featured-row">

  {/* SALE BANNER */}

  <Col className="featured-col">

    <div
      className="sale-banner"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >

      <p>SUMMER SALE</p>

      <h2>
        75% <span>off</span>
      </h2>

      <Button className="shop-btn">
        Shop Now →
      </Button>

    </div>

  </Col>

  {/* PRODUCT CARDS */}

  {products.map((item) => (

    <Col
      key={item.id}
      className="featured-col d-flex"
    >

      <Card className="product-card">

        {/* IMAGE WRAPPER */}

        <div className="product-img-wrapper">

          {/* HOVER ICONS */}

          <div className="hover-icons">

            <button>
              <FaHeart />
            </button>

            <button>
              <FaEye />
            </button>

          </div>

          {/* PRODUCT IMAGE */}

          <div
            className="product-img"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          ></div>

        </div>

        {/* CARD BODY */}

        <Card.Body>

          <p className="product-name">
            {item.name}
          </p>

          <h5 className="product-price">
            {item.price}
          </h5>

          {/* RATING */}

          <div className="rating">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="gray-star" />

          </div>

          {/* CART BUTTON */}

          <button className="cart-btn">

            <FaShoppingCart />

          </button>

        </Card.Body>

      </Card>

    </Col>

  ))}

</Row>
        {/* =========================
    BOTTOM SECTION
========================= */}

<Row className="mt-5">

  {/* LEFT SIDE */}
  <Col lg={9}>

    {/* TOP HEADINGS */}
    <Row className="mb-3">

      <Col md={4}>
        <h5 className="bottom-section-heading">
          Hot Deals
        </h5>
      </Col>

      <Col md={4}>
        <h5 className="bottom-section-heading">
          Best Seller
        </h5>
      </Col>

      <Col md={4}>
        <h5 className="bottom-section-heading">
          Top Rated
        </h5>
      </Col>

    </Row>

    {/* PRODUCT ROWS */}
    <Row className="g-3">

      {/* COLUMN 1 */}
<Col md={4}>

  <div className="mini-card active-card">

    <img src={appleImg} alt="" />

    <div className="mini-content">

      <h6>Green Apple</h6>

      <h5>$14.99</h5>

      <div className="rating small">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar className="gray-star" />
      </div>

    </div>

    {/* HOVER ICONS */}

    <div className="mini-icons">

      <button className="cart-icon">
        <FaShoppingCart />
      </button>

      <button>
        <FaEye />
      </button>

      <button>
        <FaHeart />
      </button>

    </div>

  </div>

  <div className="mini-card mt-3">

    <img src={appleImg} alt="" />

    <div className="mini-content">

      <h6>Indian Malta</h6>

      <h5>$14.99</h5>

      <div className="rating small">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar className="gray-star" />
      </div>

    </div>

    {/* HOVER ICONS */}

    <div className="mini-icons">

      <button className="cart-icon">
        <FaShoppingCart />
      </button>

      <button>
        <FaEye />
      </button>

      <button>
        <FaHeart />
      </button>

    </div>

  </div>

  <div className="mini-card mt-3">

    <img src={appleImg} alt="" />

    <div className="mini-content">

      <h6>Green Lettuce</h6>

      <h5>$14.99</h5>

      <div className="rating small">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar className="gray-star" />
      </div>

    </div>

    {/* HOVER ICONS */}

    <div className="mini-icons">

      <button className="cart-icon">
        <FaShoppingCart />
      </button>

      <button>
        <FaEye />
      </button>

      <button>
        <FaHeart />
      </button>

    </div>

  </div>

</Col>

{/* COLUMN 2 */}
<Col md={4}>

  <div className="mini-card">

    <img src={eggplantImg} alt="" />

    <div className="mini-content">

      <h6>Eggplant</h6>

      <h5>$14.99</h5>

      <div className="rating small">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar className="gray-star" />
      </div>

    </div>

    <div className="mini-icons">

      <button className="cart-icon">
        <FaShoppingCart />
      </button>

      <button>
        <FaEye />
      </button>

      <button>
        <FaHeart />
      </button>

    </div>

  </div>

  <div className="mini-card mt-3">

    <img src={eggplantImg} alt="" />

    <div className="mini-content">

      <h6>Red Capsicum</h6>

      <h5>$14.99</h5>

      <div className="rating small">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar className="gray-star" />
      </div>

    </div>

    <div className="mini-icons">

      <button className="cart-icon">
        <FaShoppingCart />
      </button>

      <button>
        <FaEye />
      </button>

      <button>
        <FaHeart />
      </button>

    </div>

  </div>

  <div className="mini-card mt-3">

    <img src={eggplantImg} alt="" />

    <div className="mini-content">

      <h6>Red Tomato</h6>

      <h5>$14.99</h5>

      <div className="rating small">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar className="gray-star" />
      </div>

    </div>

    <div className="mini-icons">

      <button className="cart-icon">
        <FaShoppingCart />
      </button>

      <button>
        <FaEye />
      </button>

      <button>
        <FaHeart />
      </button>

    </div>

  </div>

</Col>

{/* COLUMN 3 */}
<Col md={4}>

  <div className="mini-card">

    <img src={potatoImg} alt="" />

    <div className="mini-content">

      <h6>Big Potatos</h6>

      <h5>$14.99</h5>

      <div className="rating small">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar className="gray-star" />
      </div>

    </div>

    <div className="mini-icons">

      <button className="cart-icon">
        <FaShoppingCart />
      </button>

      <button>
        <FaEye />
      </button>

      <button>
        <FaHeart />
      </button>

    </div>

  </div>

  <div className="mini-card mt-3">

    <img src={potatoImg} alt="" />

    <div className="mini-content">

      <h6>Corn</h6>

      <h5>$14.99</h5>

      <div className="rating small">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar className="gray-star" />
      </div>

    </div>

    <div className="mini-icons">

      <button className="cart-icon">
        <FaShoppingCart />
      </button>

      <button>
        <FaEye />
      </button>

      <button>
        <FaHeart />
      </button>

    </div>

  </div>

  <div className="mini-card mt-3">

    <img src={potatoImg} alt="" />

    <div className="mini-content">

      <h6>Fresh Cauliflower</h6>

      <h5>$14.99</h5>

      <div className="rating small">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar className="gray-star" />
      </div>

    </div>

    <div className="mini-icons">

      <button className="cart-icon">
        <FaShoppingCart />
      </button>

      <button>
        <FaEye />
      </button>

      <button>
        <FaHeart />
      </button>

    </div>

  </div>

</Col>

    </Row>

  </Col>

  {/* RIGHT SIDE */}
 <Col lg={3}>

  <div
    className="yellow-banner"
    style={{
      backgroundImage: `url(${yellowBannerImg})`,
    }}
  >

    <p>HOT SALE</p>

    <h2>
      Save 37% on <br />
      Every Order
    </h2>

    <Button className="shop-btn">
      Shop Now →
    </Button>

  </div>

</Col>
  </Row>
      </Container>  

    </section>
  );
};

export default FeaturedProducts;