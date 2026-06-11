import React from "react";
import { Card } from "react-bootstrap";

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
  return (
    <Card className="product-card">
      <div className="product-img-wrapper">

        <div className="hover-icons">
          <button>
            <FaHeart />
          </button>

          <button
            onClick={() =>
              onQuickView(product)
            }
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

        <button className="cart-btn">
          <FaShoppingCart />
        </button>

      </Card.Body>
    </Card>
  );
}

export default ProductCard;