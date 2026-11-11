
import React from "react";
import "./CSS/TiffinCard.css";

const TiffinCard = ({ tiffin, onAddToCart, onViewDetails }) => {

  // Prevent undefined or null errors
  const safeTiffin = tiffin || {};

  const handleAddToCart = (e) => {
    e.stopPropagation();

    if (onAddToCart) {
      onAddToCart(safeTiffin);
    }
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(safeTiffin);
    }
  };

  return (
    <div
      className="tiffin-card"
      onClick={handleViewDetails}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleViewDetails();
        }
      }}
    >
      {/* Tiffin Image */}
      <div className="tiffin-image-container">
        <img
          src={
            safeTiffin.image ||
            "https://placehold.co/600x400?text=Homemade+Tiffin"
          }
          alt={safeTiffin.name || "Homemade Tiffin"}
          className="tiffin-image"
          loading="lazy"
        />

        {safeTiffin.isPopular && (
          <span className="tiffin-popular-badge">
            ⭐ Popular
          </span>
        )}

        {safeTiffin.discount && (
          <span className="tiffin-discount-badge">
            {safeTiffin.discount}% OFF
          </span>
        )}

        <button
          type="button"
          className="tiffin-wishlist-btn"
          aria-label="Add to wishlist"
          onClick={(e) => e.stopPropagation()}
        >
          ♡
        </button>
      </div>

      {/* Tiffin Details */}
      <div className="tiffin-details">

        <div className="tiffin-title-row">
          <h3>
            {safeTiffin.name || "Homemade Special Thali"}
          </h3>

          <span className="tiffin-rating">
            ⭐ {safeTiffin.rating || "4.5"}
          </span>
        </div>

        <p className="tiffin-description">
          {safeTiffin.description ||
            "Fresh and delicious homemade food."}
        </p>

        {/* Provider Details */}
        <div className="tiffin-provider">
          <span>👨‍🍳</span>
          <span>
            {safeTiffin.providerName || "Home Chef"}
          </span>
          <span className="provider-verified">
            ✓ Verified
          </span>
        </div>

        {/* Food Details */}
        <div className="tiffin-info">
          <span>🍽️ {safeTiffin.mealType || "Lunch"}</span>
          <span>🕒 {safeTiffin.deliveryTime || "30-45 min"}</span>
        </div>

        {/* Price and Cart */}
        <div className="tiffin-bottom">

          <div className="tiffin-price">
            <strong>₹{safeTiffin.price ?? 99}</strong>

            {safeTiffin.originalPrice && (
              <del>₹{safeTiffin.originalPrice}</del>
            )}
          </div>

          <button
            type="button"
            className="tiffin-add-btn"
            onClick={handleAddToCart}
          >
            + Add
          </button>

        </div>

      </div>
    </div>
  );
};

export default TiffinCard;
