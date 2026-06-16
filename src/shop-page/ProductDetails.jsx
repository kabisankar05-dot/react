import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import {
  FaStar,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaHeart,
  FaMinus,
  FaPlus,
  FaShoppingCart,
} from "react-icons/fa";

import Header from "./Header";
import Navbars from "./Navbar";
import ShopBanner from "./ShopBanner";
import products from "./Products";

import "./ProductQuickView.css"; // இதே CSS reuse பண்ணலாம்

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <Navbars />
      <ShopBanner />

      <Container className="py-5">
        <Row>
          {/* LEFT SIDE */}
          <Col lg={6}>
            <div className="gallery-wrapper">
              <div className="thumbnail-list">
                <div className="thumb-box active-thumb">
                  <img src={product.image} alt="" />
                </div>

                <div className="thumb-box">
                  <img src={product.image} alt="" />
                </div>

                <div className="thumb-box">
                  <img src={product.image} alt="" />
                </div>

                <div className="thumb-box">
                  <img src={product.image} alt="" />
                </div>
              </div>

              <div className="main-image-box">
                <img
                  src={product.image}
                  alt={product.name}
                  className="main-product-image"
                />
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={6}>
            <h2 className="product-title">
              {product.name}

              <span className="stock-badge">
                In Stock
              </span>
            </h2>

            <div className="rating-row">
              {[...Array(product.rating)].map(
                (_, index) => (
                  <FaStar
                    key={index}
                    className="star-icon"
                  />
                )
              )}

              <span className="review-text">
                4 Reviews
              </span>

              <span className="sku">
                SKU: 251594
              </span>
            </div>

            <div className="price-row">
              <span className="old-price">
                $48.00
              </span>

              <span className="sale-price">
                ${product.price}
              </span>

              <span className="discount-badge">
                64% Off
              </span>
            </div>

            <hr />

            <div className="brand-share">
              <div className="brand-box">
                <span>Brand:</span>

                <img
                  src={product.image}
                  alt=""
                />
              </div>

              <div className="share-icons">
                <FaFacebookF />
                <FaTwitter />
                <FaPinterestP />
                <FaInstagram />
              </div>
            </div>

            <p className="product-desc">
              Class aptent taciti sociosqu ad
              litora torquent per conubia
              nostra, per inceptos himenaeos.
              Nulla nibh diam, blandit vel
              consequat nec.
            </p>

            <div className="cart-section">
              <div className="qty-box">
                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                >
                  <FaMinus />
                </button>

                <span>{quantity}</span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                >
                  <FaPlus />
                </button>
              </div>

              <Button className="add-cart-btn">
                Add To Cart
                <FaShoppingCart className="ms-2" />
              </Button>

              <button className="wishlist-btn">
                <FaHeart />
              </button>
            </div>

            <hr />

            <div className="meta-info">
              <p>
                <strong>Category:</strong>{" "}
                {product.category}
              </p>

              <p>
                <strong>Tags:</strong>{" "}
                Healthy, Organic,
                Vegetable, Fresh
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetails;