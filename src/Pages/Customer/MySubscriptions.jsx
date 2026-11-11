
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCrown,
  FaCalendarAlt,
  FaUtensils,
  FaPause,
  FaPlay,
  FaTimes,
  FaArrowRight
} from "react-icons/fa";

import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/MySubscriptions.css";

const MySubscriptions = () => {
  const navigate = useNavigate();

  const [subscriptions, setSubscriptions] = useState(() =>
    JSON.parse(localStorage.getItem("subscriptions") || "[]")
  );

  const updateSubscriptions = (updated) => {
    setSubscriptions(updated);
    localStorage.setItem("subscriptions", JSON.stringify(updated));
  };

  const handlePause = (index) => {
    const updated = [...subscriptions];
    updated[index].status = "Paused";
    updateSubscriptions(updated);
  };

  const handleResume = (index) => {
    const updated = [...subscriptions];
    updated[index].status = "Active";
    updateSubscriptions(updated);
  };

  const handleCancel = (index) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this subscription?"
    );

    if (!confirmCancel) return;

    const updated = [...subscriptions];
    updated[index].status = "Cancelled";
    updated[index].cancelledAt = new Date().toISOString();

    updateSubscriptions(updated);
  };

  const activeSubscriptions = subscriptions.filter(
    (item) => item.status === "Active" || item.status === "Paused"
  );

  const previousSubscriptions = subscriptions.filter(
    (item) => item.status === "Cancelled" ||
              item.status === "Completed"
  );

  const formatDate = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };

  return (
    <>
      <Header />

      <main className="my-subscriptions-page">

        <section className="my-subscriptions-hero">
          <div>
            <span>MY ACCOUNT</span>
            <h1>My <strong>Subscriptions</strong></h1>
            <p>
              Manage your meal plans and enjoy fresh homemade food.
            </p>
          </div>

          <button onClick={() => navigate("/subscription")}>
            Explore Plans <FaArrowRight />
          </button>
        </section>

        <section className="my-subscriptions-content">

          <div className="subscription-section-heading">
            <h2>Active Subscriptions</h2>
            <span>{activeSubscriptions.length} Plans</span>
          </div>

          {activeSubscriptions.length === 0 ? (
            <div className="my-subscription-empty">
              <FaCrown />
              <h3>No Active Subscription</h3>
              <p>
                You have not selected any active meal plan yet.
              </p>
              <button onClick={() => navigate("/subscription")}>
                Explore Subscription Plans
              </button>
            </div>
          ) : (
            <div className="my-subscription-grid">
              {activeSubscriptions.map((item) => {
                const index = subscriptions.indexOf(item);

                return (
                  <div className="my-subscription-card" key={item.orderId || index}>
                    <div className="my-subscription-card-top">
                      <div className="my-subscription-icon">
                        <FaCrown />
                      </div>

                      <span className={`subscription-status ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </div>

                    <h3>{item.name}</h3>

                    <p className="my-subscription-price">
                      ₹{item.price}
                      <small> / {item.duration}</small>
                    </p>

                    <div className="my-subscription-info">
                      <p>
                        <FaUtensils />
                        {item.meals}
                      </p>

                      <p>
                        <FaCalendarAlt />
                        Started: {formatDate(item.subscribedAt)}
                      </p>

                      <p>
                        Subscription ID: {item.orderId || "Demo"}
                      </p>
                    </div>

                    <div className="my-subscription-actions">
                      {item.status === "Active" && (
                        <button
                          className="pause-subscription-btn"
                          onClick={() => handlePause(index)}
                        >
                          <FaPause /> Pause
                        </button>
                      )}

                      {item.status === "Paused" && (
                        <button
                          className="resume-subscription-btn"
                          onClick={() => handleResume(index)}
                        >
                          <FaPlay /> Resume
                        </button>
                      )}

                      <button
                        className="cancel-subscription-btn"
                        onClick={() => handleCancel(index)}
                      >
                        <FaTimes /> Cancel
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="subscription-section-heading previous-heading">
            <h2>Subscription History</h2>
            <span>{previousSubscriptions.length} Records</span>
          </div>

          {previousSubscriptions.length === 0 ? (
            <div className="subscription-history-empty">
              Your previous subscription history will appear here.
            </div>
          ) : (
            <div className="subscription-history-list">
              {previousSubscriptions.map((item, index) => (
                <div className="subscription-history-card" key={item.orderId || index}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>₹{item.price} / {item.duration}</p>
                    <small>
                      Started: {formatDate(item.subscribedAt)}
                    </small>
                  </div>

                  <span className={`subscription-status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          )}

        </section>
      </main>

      <Footer />
    </>
  );
};

export default MySubscriptions;
