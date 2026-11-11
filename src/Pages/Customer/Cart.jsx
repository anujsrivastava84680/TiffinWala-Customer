import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaTrash,
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaUtensils,
  FaArrowRight
} from "react-icons/fa";

import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/Cart.css";

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  // Load Cart Items
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // Update Cart in LocalStorage
  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
     window.dispatchEvent(new Event("cartUpdated"));
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    updateCart(updatedCart);
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );

    updateCart(updatedCart);
  };

  // Remove Item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  // Calculate Total
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = cartItems.length > 0 ? 20 : 0;
  const grandTotal = subtotal + deliveryFee;

  return (
    <>
      <Header />

      <main className="cart-page">

        {/* Heading */}
        <div className="cart-heading">
          <span>YOUR FOOD SELECTION</span>
          <h1>My Shopping Cart</h1>
          <p>Review your selected homemade meals before checkout.</p>
        </div>

        <div className="cart-container">

          {cartItems.length > 0 ? (
            <div className="cart-layout">

              {/* Cart Items */}
              <div className="cart-items-section">

                <div className="cart-items-heading">
                  <h2>
                    <FaShoppingCart /> Cart Items
                  </h2>
                  <span>{cartItems.length} Items</span>
                </div>

                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="cart-item-info">
                      <span>{item.category}</span>
                      <h3>{item.name}</h3>
                      <p>{item.chef}</p>

                      <h4>₹{item.price} / meal</h4>

                      <div className="cart-quantity">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          <FaMinus />
                        </button>

                        <strong>{item.quantity}</strong>

                        <button onClick={() => increaseQuantity(item.id)}>
                          <FaPlus />
                        </button>
                      </div>
                    </div>

                    <div className="cart-item-right">
                      <h3>₹{item.price * item.quantity}</h3>

                      <button
                        className="cart-remove-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        <FaTrash /> Remove
                      </button>
                    </div>

                  </div>
                ))}

                <button
                  className="continue-shopping-btn"
                  onClick={() => navigate("/explore-tiffin")}
                >
                  <FaArrowLeft /> Continue Shopping
                </button>

              </div>

              {/* Order Summary */}
              <div className="cart-summary">

                <h2>Order Summary</h2>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <strong>₹{subtotal}</strong>
                </div>

                <div className="summary-row">
                  <span>Delivery Fee</span>
                  <strong>₹{deliveryFee}</strong>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-total">
                  <span>Total Amount</span>
                  <strong>₹{grandTotal}</strong>
                </div>

                <button
                  className="checkout-btn"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout <FaArrowRight />
                </button>

                <p className="cart-secure-note">
                  Your order details will be confirmed at checkout.
                </p>

              </div>

            </div>
          ) : (

            /* Empty Cart */
            <div className="empty-cart">
              <div className="empty-cart-icon">
                <FaShoppingCart />
              </div>

              <h2>Your Cart is Empty!</h2>

              <p>
                Looks like you haven't added any homemade meals yet.
              </p>

              <button
                onClick={() => navigate("/explore-tiffin")}
              >
                <FaUtensils /> Explore Tiffins
              </button>
            </div>

          )}

        </div>

      </main>

      <Footer />
    </>
  );
};

export default Cart;