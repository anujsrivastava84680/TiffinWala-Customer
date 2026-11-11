
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [reviewItem, setReviewItem] = useState(null);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");

  const [reviews, setReviews] = useState(() => {
    return JSON.parse(localStorage.getItem("tiffinReviews") || "[]");
  });

  // Load Orders
  useEffect(() => {
    const loadOrders = () => {
      const savedOrders = JSON.parse(
        localStorage.getItem("orders") || "[]"
      );

      setOrders(
        [...savedOrders].sort(
          (a, b) =>
            new Date(b.orderDate) - new Date(a.orderDate)
        )
      );
    };

    loadOrders();

    window.addEventListener("ordersUpdated", loadOrders);

    return () => {
      window.removeEventListener("ordersUpdated", loadOrders);
    };
  }, []);

  // Listen for Review Updates
  useEffect(() => {
    const loadReviews = () => {
      const savedReviews = JSON.parse(
        localStorage.getItem("tiffinReviews") || "[]"
      );

      setReviews(savedReviews);
    };

    window.addEventListener("reviewsUpdated", loadReviews);

    return () => {
      window.removeEventListener("reviewsUpdated", loadReviews);
    };
  }, []);

  const filters = [
    "All",
    "Pending",
    "Accepted",
    "Preparing",
    "Out for Delivery",
    "Delivered",
    "Cancelled",
  ];

  const filteredOrders =
    selectedFilter === "All"
      ? orders
      : orders.filter(
          (order) => order.orderStatus === selectedFilter
        );

  // Format Date
  const formatDate = (date) => {
    if (!date) return "Date unavailable";

    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Status CSS Class
  const getStatusClass = (status) => {
    return (status || "Pending")
      .toLowerCase()
      .replaceAll(" ", "-");
  };

  // Get Order Progress Step
  const getStatusStep = (status) => {
    const steps = [
      "Pending",
      "Accepted",
      "Preparing",
      "Out for Delivery",
      "Delivered",
    ];

    if (status === "Cancelled") return -1;

    return steps.indexOf(status || "Pending");
  };

  // Cancel Order
  const handleCancelOrder = (orderId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (!confirmCancel) return;

    const updatedOrders = orders.map((order) =>
      order.orderId === orderId
        ? { ...order, orderStatus: "Cancelled" }
        : order
    );

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    window.dispatchEvent(new Event("ordersUpdated"));

    setSelectedOrder(null);

    alert("Order cancelled successfully!");
  };

  // Reorder
  const handleReorder = (order) => {
    const savedCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const updatedCart = [...savedCart];

    (order.items || []).forEach((item) => {
      const existingItem = updatedCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity =
          Number(existingItem.quantity || 1) +
          Number(item.quantity || 1);
      } else {
        updatedCart.push({
          ...item,
          quantity: Number(item.quantity || 1),
        });
      }
    });

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(new Event("cartUpdated"));

    alert("Items added to cart successfully!");

    window.location.href = "/cart";
  };

  // Open Review Form
  const handleOpenReview = (order, item) => {
    const existingReview = reviews.find(
      (review) =>
        review.orderId === order.orderId &&
        review.tiffinId === item.id
    );

    setReviewItem({
      orderId: order.orderId,
      tiffinId: item.id,
      tiffinName:
        item.name ||
        item.title ||
        item.tiffinName ||
        "Tiffin",
    });

    setReviewRating(existingReview?.rating || 5);
    setReviewComment(existingReview?.comment || "");
  };

  // Submit or Update Review
  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (!reviewItem) return;

    if (!reviewComment.trim()) {
      alert("Please write your review.");
      return;
    }

    const existingReview = reviews.find(
      (review) =>
        review.orderId === reviewItem.orderId &&
        review.tiffinId === reviewItem.tiffinId
    );

    let updatedReviews;

    if (existingReview) {
      updatedReviews = reviews.map((review) =>
        review.orderId === reviewItem.orderId &&
        review.tiffinId === reviewItem.tiffinId
          ? {
              ...review,
              rating: reviewRating,
              comment: reviewComment.trim(),
              updatedAt: new Date().toISOString(),
            }
          : review
      );
    } else {
      updatedReviews = [
        ...reviews,
        {
          orderId: reviewItem.orderId,
          tiffinId: reviewItem.tiffinId,
          tiffinName: reviewItem.tiffinName,
          rating: reviewRating,
          comment: reviewComment.trim(),
          createdAt: new Date().toISOString(),
        },
      ];
    }

    setReviews(updatedReviews);

    localStorage.setItem(
      "tiffinReviews",
      JSON.stringify(updatedReviews)
    );

    window.dispatchEvent(new Event("reviewsUpdated"));

    setReviewItem(null);
    setReviewComment("");
    setReviewRating(5);

    alert(
      existingReview
        ? "Review updated successfully!"
        : "Review submitted successfully!"
    );
  };

  // Render Order Status
  const renderOrderStatus = (status) => {
    const currentStep = getStatusStep(status);

    if (status === "Cancelled") {
      return (
        <div className="cancelled-message">
          This order has been cancelled.
        </div>
      );
    }

    const steps = [
      "Pending",
      "Accepted",
      "Preparing",
      "Out for Delivery",
      "Delivered",
    ];

    return (
      <div className="order-progress">
        {steps.map((step, index) => (
          <div
            className={`progress-step ${
              index <= currentStep ? "completed" : ""
            }`}
            key={step}
          >
            <div className="progress-circle">
              {index < currentStep ? "✓" : index + 1}
            </div>

            <span>{step}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Header />

      <main className="my-orders-page">
        <div className="my-orders-container">

          <div className="my-orders-heading">
            <div>
              <h1>My Orders</h1>
              <p>Track and manage all your tiffin orders.</p>
            </div>

            <Link
              to="/explore-tiffin"
              className="order-explore-btn"
            >
              Explore Tiffins
            </Link>
          </div>

          {/* Order Filters */}
          <div className="order-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  selectedFilter === filter ? "active" : ""
                }
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Orders List */}
          {filteredOrders.length === 0 ? (
            <div className="no-orders">
              <div className="no-orders-icon">📦</div>

              <h2>
                {orders.length === 0
                  ? "No Orders Yet!"
                  : "No Orders Found"}
              </h2>

              <p>
                {orders.length === 0
                  ? "You haven't placed any orders yet. Explore our delicious tiffins and order your first meal."
                  : `You don't have any ${selectedFilter} orders.`}
              </p>

              <Link to="/explore-tiffin">
                Browse Tiffins
              </Link>
            </div>
          ) : (
            <div className="orders-list">
              {filteredOrders.map((order) => (
                <article
                  className="order-card"
                  key={order.orderId}
                >
                  <div className="order-card-header">
                    <div>
                      <span className="order-label">
                        ORDER ID
                      </span>

                      <h3>{order.orderId}</h3>

                      <p>{formatDate(order.orderDate)}</p>
                    </div>

                    <span
                      className={`order-status ${getStatusClass(
                        order.orderStatus
                      )}`}
                    >
                      {order.orderStatus || "Pending"}
                    </span>
                  </div>

                  <div className="order-card-body">
                    <div className="ordered-items">
                      {order.items?.map((item, index) => (
                        <div
                          className="ordered-item"
                          key={`${item.id || item.name || "item"}-${index}`}
                        >
                          <div className="ordered-item-info">
                            <h4>
                              {item.name ||
                                item.title ||
                                item.tiffinName ||
                                "Tiffin"}
                            </h4>

                            <p>
                              Quantity: {item.quantity || 1}
                            </p>
                          </div>

                          {order.orderStatus === "Delivered" && (
                            <button
                              className="review-order-btn"
                              onClick={() =>
                                handleOpenReview(order, item)
                              }
                            >
                              {reviews.some(
                                (review) =>
                                  review.orderId === order.orderId &&
                                  review.tiffinId === item.id
                              )
                                ? "Edit Review"
                                : "Write Review"}
                            </button>
                          )}

                          <strong>
                            ₹
                            {Number(item.price || 0) *
                              Number(item.quantity || 1)}
                          </strong>
                        </div>
                      ))}
                    </div>

                    <div className="order-total-row">
                      <span>Total Amount</span>
                      <strong>₹{order.totalAmount}</strong>
                    </div>
                  </div>

                  <div className="order-card-footer">
                    <span>
                      Payment:{" "}
                      {order.paymentMethod === "COD"
                        ? "Cash on Delivery"
                        : "Online Payment"}
                    </span>

                    <div className="order-action-buttons">
                      <button
                        className="view-order-btn"
                        onClick={() => setSelectedOrder(order)}
                      >
                        View Details
                      </button>

                      <button
                        className="reorder-btn"
                        onClick={() => handleReorder(order)}
                      >
                        Reorder
                      </button>

                      {!["Delivered", "Cancelled"].includes(
                        order.orderStatus || "Pending"
                      ) && (
                        <button
                          className="cancel-order-btn"
                          onClick={() =>
                            handleCancelOrder(order.orderId)
                          }
                        >
                          Cancel Order
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="order-tracking">
                    <h4>Order Tracking</h4>
                    {renderOrderStatus(order.orderStatus)}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div
          className="order-modal-overlay"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            className="order-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedOrder(null)}
            >
              ×
            </button>

            <h2>Order Details</h2>

            <div className="modal-detail-row">
              <span>Order ID</span>
              <strong>{selectedOrder.orderId}</strong>
            </div>

            <div className="modal-detail-row">
              <span>Order Date</span>
              <strong>{formatDate(selectedOrder.orderDate)}</strong>
            </div>

            <div className="modal-detail-row">
              <span>Customer Name</span>
              <strong>
                {selectedOrder.customer?.fullName || "N/A"}
              </strong>
            </div>

            <div className="modal-detail-row">
              <span>Mobile</span>
              <strong>
                {selectedOrder.customer?.phone || "N/A"}
              </strong>
            </div>

            <div className="modal-address">
              <span>Delivery Address</span>

              <p>
                {selectedOrder.customer?.address || "N/A"},
                {" "}{selectedOrder.customer?.city || ""},
                {" "}{selectedOrder.customer?.state || ""}
                {" - "}{selectedOrder.customer?.pincode || ""}
              </p>
            </div>

            <div className="modal-detail-row">
              <span>Subtotal</span>
              <strong>₹{selectedOrder.subtotal}</strong>
            </div>

            <div className="modal-detail-row">
              <span>Delivery Charge</span>
              <strong>₹{selectedOrder.deliveryCharge}</strong>
            </div>

            <div className="modal-detail-row modal-grand-total">
              <span>Total Amount</span>
              <strong>₹{selectedOrder.totalAmount}</strong>
            </div>

            <div className="modal-detail-row">
              <span>Payment Method</span>
              <strong>
                {selectedOrder.paymentMethod === "COD"
                  ? "Cash on Delivery"
                  : "Online Payment"}
              </strong>
            </div>

            <div className="modal-detail-row">
              <span>Order Status</span>
              <strong>
                {selectedOrder.orderStatus || "Pending"}
              </strong>
            </div>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {reviewItem && (
        <div
          className="review-modal-overlay"
          onClick={() => setReviewItem(null)}
        >
          <div
            className="review-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="review-modal-close"
              onClick={() => setReviewItem(null)}
            >
              ×
            </button>

            <h2>Rate Your Experience</h2>

            <p className="review-tiffin-name">
              {reviewItem.tiffinName}
            </p>

            <form onSubmit={handleSubmitReview}>
              <label>Your Rating</label>

              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={
                      star <= reviewRating ? "active" : ""
                    }
                    onClick={() => setReviewRating(star)}
                  >
                    ★
                  </button>
                ))}
              </div>

              <label htmlFor="reviewComment">
                Write Your Review
              </label>

              <textarea
                id="reviewComment"
                rows="4"
                placeholder="Tell us about your food quality and experience..."
                value={reviewComment}
                onChange={(e) =>
                  setReviewComment(e.target.value)
                }
                required
              />

              <button
                type="submit"
                className="submit-review-btn"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default MyOrders;
