import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {
  FaHeart,
  FaEye,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

function ProductCard({
  product,
  onQuickView,
}) {
  const navigate = useNavigate();

  return (
    <Card
      className="product-card"
      onClick={() =>
        navigate(`/Product/${product.id}`)
      }
      style={{ cursor: "pointer" }}
    >
      <div className="product-img-wrapper">

        <div className="hover-icons">

          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <FaHeart />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
          >
            <FaEye />
          </button>

        </div>

        <div
          className="product-img"
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        ></div>
      </div>

      <Card.Body>
        <p className="product-name">
          {product.name}
        </p>

        <h5 className="product-price">
          ${product.price}
        </h5>

        <div className="rating">
          {[...Array(product.rating)].map(
            (_, index) => (
              <FaStar key={index} />
            )
          )}
        </div>

        <button
          className="cart-btn"
          onClick={(e) => e.stopPropagation()}
        >
          <FaShoppingCart />
        </button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;