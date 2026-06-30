import React, { useContext } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { CartContext } from "../shop-page/CartContext";
import "../shop-page/CartSiderbar.css";

function CartSidebar({ show, handleClose }) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
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
          Shopping Cart ({cartItems.length})
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="cart-body">

        <div className="cart-items">

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              Cart is Empty
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-info">

                  <h6>{item.name}</h6>

                  <span>
                    {item.quantity} kg x
                    <strong> ${item.price}</strong>
                  </span>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ×
                </button>

              </div>
            ))
          )}

        </div>

        <div className="cart-footer">

          <div className="cart-total">

            <span>
              {cartItems.length} Product
            </span>

            <strong>
              ${total.toFixed(2)}
            </strong>

          </div>

          <Button className="checkout-btn">
            Checkout
          </Button>

          <Button className="goto-cart-btn">
            Go To Cart
          </Button>

        </div>

      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartSidebar;