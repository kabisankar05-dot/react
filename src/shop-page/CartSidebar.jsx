import React, { useContext } from "react";
import {
  Offcanvas,
  Button,
} from "react-bootstrap";

import { CartContext } from "../shop-page/CartContext";

function CartSidebar({
  show,
  handleClose,
}) {
  const {
    cartItems,
    removeFromCart,
  } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) =>
      sum +
      item.price *
        item.quantity,
    0
  );

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="cart-sidebar"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          Shopping Cart (
          {cartItems.length})
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column">
        <div className="flex-grow-1">

          {cartItems.length === 0 ? (
            <p className="text-center">
              Cart is Empty
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  width="90"
                  height="60"
                />

                <div className="cart-info">
                  <h6>
                    {item.name}
                  </h6>

                  <small>
                 {item.quantity}kg x
                  <strong> ${item.price}</strong>
                </small>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="d-flex justify-content-between mb-3">
            <span>
              {cartItems.length}
              {" "}Products
            </span>

            <strong>
              $
              {total.toFixed(
                2
              )}
            </strong>
          </div>

          <Button className="checkout-btn w-100 mb-2">
            Checkout
          </Button>

          <Button
            variant="light"
            className="w-100"
          >
            Go To Cart
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartSidebar;