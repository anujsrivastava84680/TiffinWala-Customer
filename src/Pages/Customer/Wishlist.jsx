
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaTrash,
  FaShoppingBag,
  FaArrowRight,
  FaStar,
  FaUtensils
} from "react-icons/fa";

import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/Wishlist.css";

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Load Wishlist
  useEffect(() => {
    const savedWishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    setWishlist(savedWishlist);
  }, []);

  // Remove Item
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.id !== id
    );

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  // Clear All
  const clearWishlist = () => {
    setWishlist([]);
    localStorage.setItem("wishlist", JSON.stringify([]));

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  // Open Details
  const viewDetails = (id) => {
    navigate(`/tiffin-details/${id}`);
  };

  return (
    <>
      <Header />

      <main className="wishlist-page">

        {/* Hero Section */}
        <section className="wishlist-hero">
          <div>
            <span className="wishlist-tag">YOUR FAVOURITES</span>

            <h1>
              Your Wishlist
              <FaHeart />
            </h1>

            <p>
              All your favourite homemade meals, saved in one place.
              Order whenever you feel like enjoying them!
            </p>
          </div>

          <div className="wishlist-hero-icon">
            <FaHeart />
          </div>
        </section>

        {/* Wishlist Content */}
        <section className="wishlist-container">

          <div className="wishlist-heading">
            <div>
              <h2>Saved Tiffins</h2>
              <p>
                {wishlist.length} {wishlist.length === 1 ? "Item" : "Items"} saved
              </p>
            </div>

            {wishlist.length > 0 && (
              <button
                className="wishlist-clear-btn"
                onClick={clearWishlist}
              >
                <FaTrash /> Clear All
              </button>
            )}
          </div>

          {wishlist.length === 0 ? (

            /* Empty Wishlist */
            <div className="wishlist-empty">
              <div className="wishlist-empty-icon">
                <FaRegHeart />
              </div>

              <h2>Your Wishlist Is Empty!</h2>

              <p>
                You haven't saved any tiffins yet.
                Explore delicious homemade meals and add your favourites here.
              </p>

              <button
                onClick={() => navigate("/explore-tiffin")}
                className="wishlist-explore-btn"
              >
                <FaShoppingBag /> Explore Tiffins
                <FaArrowRight />
              </button>
            </div>

          ) : (

            /* Wishlist Cards */
            <div className="wishlist-grid">
              {wishlist.map((item) => (
                <div className="wishlist-card" key={item.id}>

                  <div className="wishlist-card-image">
                    <img
                      src={item.image || item.img || "https://images.unsplash.com/photo-1547592180-85f173990554?w=600"}
                      alt={item.name || item.title || "Tiffin"}
                    />

                    <button
                      className="wishlist-remove-icon"
                      onClick={() => removeFromWishlist(item.id)}
                      title="Remove from wishlist"
                    >
                      <FaHeart />
                    </button>
                  </div>

                  <div className="wishlist-card-content">

                    <div className="wishlist-card-title">
                      <h3>{item.name || item.title || "Homemade Tiffin"}</h3>

                      <div className="wishlist-rating">
                        <FaStar />
                        <span>{item.rating || "4.5"}</span>
                      </div>
                    </div>

                    <p className="wishlist-chef">
                      <FaUtensils />
                      {item.chef || item.chefName || "Home Chef"}
                    </p>

                    <div className="wishlist-card-bottom">
                      <div className="wishlist-price">
                        ₹{item.price || 0}
                        <span> / meal</span>
                      </div>

                      <button
                        onClick={() => viewDetails(item.id)}
                        className="wishlist-details-btn"
                      >
                        View Details <FaArrowRight />
                      </button>
                    </div>

                    <button
                      className="wishlist-remove-btn"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <FaTrash /> Remove
                    </button>

                  </div>
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

export default Wishlist;
