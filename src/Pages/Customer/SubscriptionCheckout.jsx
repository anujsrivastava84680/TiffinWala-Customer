
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/SubscriptionCheckout.css";

const SubscriptionCheckout = () => {
  const navigate = useNavigate();

  const plan = JSON.parse(
    localStorage.getItem("selectedSubscription") || "null"
  );

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    payment: "COD"
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!plan) {
      alert("Please select a subscription plan first.");
      navigate("/subscription");
      return;
    }

    const subscription = {
      ...plan,
      customer: formData,
      orderId: "SUB" + Date.now(),
      subscribedAt: new Date().toISOString(),
      status: "Active"
    };

    const oldSubscriptions = JSON.parse(
      localStorage.getItem("subscriptions") || "[]"
    );

    localStorage.setItem(
      "subscriptions",
      JSON.stringify([...oldSubscriptions, subscription])
    );

    setSuccess(true);
  };

  if (!plan) {
    return (
      <>
        <Header />
        <div className="subscription-checkout-empty">
          <h2>No Plan Selected</h2>
          <button onClick={() => navigate("/subscription")}>
            Explore Plans
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="subscription-checkout-page">
        {success ? (
          <div className="subscription-success">
            <FaCheckCircle />
            <h2>Subscription Confirmed!</h2>
            <p>Your {plan.name} has been saved successfully.</p>
            <p>Order ID: SUB{""}</p>
            <button onClick={() => navigate("/my-orders")}>
              Go to My Orders
            </button>
            <button
              className="subscription-back-btn"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>
        ) : (
          <>
            <div className="subscription-checkout-heading">
              <button onClick={() => navigate("/subscription")}>
                <FaArrowLeft /> Back to Plans
              </button>
              <h1>Subscription Checkout</h1>
              <p>Complete your details to confirm your meal plan.</p>
            </div>

            <div className="subscription-checkout-layout">
              <form
                className="subscription-checkout-form"
                onSubmit={handleSubmit}
              >
                <h2>Customer Details</h2>

                <label>Full Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />

                <label>Mobile Number</label>
                <input
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter 10 digit mobile number"
                  pattern="[6-9][0-9]{9}"
                  required
                />

                <label>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />

                <label>Delivery Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter complete delivery address"
                  required
                />

                <h2>Payment Method</h2>

                <label className="subscription-payment-option">
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    checked={formData.payment === "COD"}
                    onChange={handleChange}
                  />
                  Cash on Delivery
                </label>

                <label className="subscription-payment-option">
                  <input
                    type="radio"
                    name="payment"
                    value="Online"
                    checked={formData.payment === "Online"}
                    onChange={handleChange}
                  />
                  Online Payment (Demo)
                </label>

                <button type="submit">
                  Confirm Subscription
                </button>
              </form>

              <div className="subscription-order-summary">
                <h2>Your Selected Plan</h2>
                <h3>{plan.name}</h3>
                <p>{plan.meals}</p>
                <p>Duration: {plan.duration}</p>
                <div>
                  Total Amount: <strong>₹{plan.price}</strong>
                </div>
                <small>Demo checkout — no real payment is processed.</small>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default SubscriptionCheckout;
