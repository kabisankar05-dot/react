import React, { useState } from "react";
import {
  Modal,
  Row,
  Col,
  Button,
  Badge,
  Toast,
  ToastContainer,
} from "react-bootstrap";

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

import "./ProductQuickView.css";

function ProductQuickView({
  show,
  handleClose,
  product,
}) {
  const [quantity, setQuantity] = useState(1);

  const [showCartToast, setShowCartToast] =
    useState(false);

  const [showWishToast, setShowWishToast] =
    useState(false);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) return null;

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        dialogClassName="quickview-modal"
      >
        <Modal.Header closeButton />

        <Modal.Body className="p-4">
          <Row>
            {/* LEFT */}
            <Col lg={6}>
              <div className="gallery-wrapper">
                <div className="thumbnail-list">
                  <div className="thumb-box active-thumb">
                    <img
                      src={product.image}
                      alt=""
                    />
                  </div>

                  <div className="thumb-box">
                    <img
                      src={product.image}
                      alt=""
                    />
                  </div>

                  <div className="thumb-box">
                    <img
                      src={product.image}
                      alt=""
                    />
                  </div>

                  <div className="thumb-box">
                    <img
                      src={product.image}
                      alt=""
                    />
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

            {/* RIGHT */}
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
                consequat nec, ultrices et
                ipsum. Nulla varius magna a
                consequat pulvinar.
              </p>

              <div className="cart-section">
                <div className="qty-box">
                  <button
                    onClick={decreaseQty}
                  >
                    <FaMinus />
                  </button>

                  <span>{quantity}</span>

                  <button
                    onClick={increaseQty}
                  >
                    <FaPlus />
                  </button>
                </div>

                <Button
                  className="add-cart-btn"
                  onClick={() =>
                    setShowCartToast(true)
                  }
                >
                  Add To Cart
                  <FaShoppingCart className="ms-2" />
                </Button>

                <button
                  className="wishlist-btn"
                  onClick={() =>
                    setShowWishToast(true)
                  }
                >
                  <FaHeart />
                </button>
              </div>

              <hr />

              <div className="meta-info">
                <p>
                  <strong>
                    Category:
                  </strong>{" "}
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
        </Modal.Body>
      </Modal>

      {/* Add To Cart Toast */}
      <ToastContainer
        position="top-end"
        className="p-3"
      >
        <Toast
          bg="success"
          show={showCartToast}
          autohide
          delay={2000}
          onClose={() =>
            setShowCartToast(false)
          }
        >
          <Toast.Body className="text-white">
            Product Added To Cart
          </Toast.Body>
        </Toast>
      </ToastContainer>

      {/* Wishlist Toast */}
      <ToastContainer
        position="top-end"
        className="p-3"
      >
        <Toast
          bg="danger"
          show={showWishToast}
          autohide
          delay={2000}
          onClose={() =>
            setShowWishToast(false)
          }
        >
          <Toast.Body className="text-white">
            Added To Wishlist ❤️
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default ProductQuickView;