
import React from "react";
import { Link } from "react-router-dom";
import "./CSS/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-badge">
            🍃 Fresh & Homemade Food
          </span>

          <h1>
            Ghar Jaisa Khana,
            <span> Ab Aapke Darwaze Par!</span>
          </h1>

          <p>
            Healthy, fresh aur delicious homemade tiffin
            ab aapke ghar tak. Apne aas-paas ke trusted
            home chefs se order karein.
          </p>

          <div className="hero-buttons">
            <Link to="/explore-tiffin" className="hero-primary-btn">
              Explore Tiffins
              <span>→</span>
            </Link>

            <Link to="/about" className="hero-secondary-btn">
              Know More
            </Link>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <span>🥗</span>
              <div>
                <strong>Fresh Food</strong>
                <small>Daily Prepared</small>
              </div>
            </div>

            <div className="hero-feature">
              <span>🏠</span>
              <div>
                <strong>Home Chefs</strong>
                <small>Made with Love</small>
              </div>
            </div>

            <div className="hero-feature">
              <span>🚴</span>
              <div>
                <strong>Quick Delivery</strong>
                <small>At Your Doorstep</small>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="hero-circle"></div>

          <div className="hero-food-card">
            <div className="hero-food-emoji">🍱</div>
            <span className="food-card-tag">Freshly Made</span>
          </div>

          <div className="hero-floating-card hero-rating-card">
            <span>⭐</span>
            <div>
              <strong>4.9/5</strong>
              <small>Customer Rating</small>
            </div>
          </div>

          <div className="hero-floating-card hero-delivery-card">
            <span>🥘</span>
            <div>
              <strong>100% Homemade</strong>
              <small>Fresh & Healthy</small>
            </div>
          </div>

          <div className="hero-decoration hero-dot-one"></div>
          <div className="hero-decoration hero-dot-two"></div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
