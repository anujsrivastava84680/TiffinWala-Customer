
import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Footer.css";

const Footer = ()=> {
  return (
    <footer className="main-footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">🍱</div>

            <div>
              <h2>Tiffin<span>Wala</span></h2>
              <small>Freshness in every bite</small>
            </div>
          </Link>

          <p className="footer-description">
            Enjoy fresh, healthy and homemade food delivered
            straight to your doorstep. Bringing homemade
            happiness to your everyday meals.
          </p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              f
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              ◎
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              ▶
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore-tiffin">Explore Tiffin</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/my-orders">My Orders</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/wishlist">My Wishlist</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h3>Explore More</h3>

          <ul>
            <li><Link to="/explore-tiffin">Daily Tiffin</Link></li>
            <li><Link to="/explore-tiffin">Healthy Meals</Link></li>
            <li><Link to="/explore-tiffin">Homemade Food</Link></li>
            <li><Link to="/subscription">Subscription Plans</Link></li>
            <li><Link to="/cart">My Cart</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-column">
          <h3>Customer Support</h3>

          <ul>
            <li><Link to="/contact">Help & Support</Link></li>
            <li><Link to="/contact">FAQs</Link></li>
            <li><Link to="/my-orders">Track My Order</Link></li>
            <li><Link to="/contact">Privacy Policy</Link></li>
            <li><Link to="/contact">Terms & Conditions</Link></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} TiffinWala.
          All Rights Reserved.
        </p>

        <p>
          Made with <span>♥</span> for homemade food lovers
        </p>

      </div>

    </footer>
  );
}

export default Footer;
