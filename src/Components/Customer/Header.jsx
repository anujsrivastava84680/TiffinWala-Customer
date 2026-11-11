
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./CSS/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  // Cart Count State
  const [cartCount, setCartCount] = useState(0);
  // Wishlist Count State
const [wishlistCount, setWishlistCount] = useState(0);
const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("isLoggedIn") === "true"
);
  const navigate = useNavigate();

  // Cart Count Automatically Update
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const totalItems = cart.reduce(
        (total, item) => total + Number(item.quantity || 0),
        0
      );

      setCartCount(totalItems);
    };

    // Initial Cart Count
    updateCartCount();

    // Listen for Cart Updates
    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  // Wishlist Count Automatically Update
useEffect(() => {
  const updateWishlistCount = () => {
    const wishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    setWishlistCount(wishlist.length);
  };

  // Initial Wishlist Count
  updateWishlistCount();

  // Listen for Wishlist Updates
  window.addEventListener("wishlistUpdated", updateWishlistCount);
  window.addEventListener("storage", updateWishlistCount);

  return () => {
    window.removeEventListener("wishlistUpdated", updateWishlistCount);
    window.removeEventListener("storage", updateWishlistCount);
  };
}, []);
// Login Status Automatically Update
useEffect(() => {
  const updateAuthStatus = () => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  };

  updateAuthStatus();

  window.addEventListener("authUpdated", updateAuthStatus);
  window.addEventListener("storage", updateAuthStatus);

  return () => {
    window.removeEventListener("authUpdated", updateAuthStatus);
    window.removeEventListener("storage", updateAuthStatus);
  };
}, []);

// Logout Function
const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");

  setIsLoggedIn(false);
  setProfileDropdownOpen(false);

  window.dispatchEvent(new Event("authUpdated"));

  alert("Logout Successful!");
  navigate("/login");
};

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/explore-tiffin?search=${encodeURIComponent(search)}`);
      setSearch("");
      setSearchOpen(false);
      setMenuOpen(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <header className="main-header">
      <div className="header-container">

        {/* Logo */}
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <svg viewBox="0 0 48 48" fill="none">
              <path
                d="M8 23C8 14.2 15.2 7 24 7C32.8 7 40 14.2 40 23"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M7 24H41C40 34 33 41 24 41C15 41 8 34 7 24Z"
                fill="currentColor"
              />
              <path
                d="M17 25C18.5 22 21 21 24 23C27 20 30 22 31 25"
                stroke="#FFF9F0"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="19" cy="30" r="1.5" fill="#FFF9F0" />
              <circle cx="28" cy="31" r="1.5" fill="#FFF9F0" />
            </svg>
          </div>

          <div className="logo-text">
            <span className="logo-name">
              Tiffin<span>Wala</span>
            </span>
            <small>Freshness in every bite</small>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/explore-tiffin" onClick={closeMenu}>
            Explore Tiffin
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/my-orders" onClick={closeMenu}>
              My Orders
          </NavLink>
         
<div
  className="profile-dropdown"
  onMouseEnter={() => setProfileDropdownOpen(true)}
  onMouseLeave={() => setProfileDropdownOpen(false)}
>
  <button
    type="button"
    className="profile-dropdown-btn"
    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
    aria-expanded={profileDropdownOpen}
  >
     Profile
    {/* <span className="profile-dropdown-arrow">⌄</span> */}
  </button>

  {profileDropdownOpen && (
    <div className="profile-dropdown-menu">
      <NavLink
        to="/profile"
        onClick={() => {
          setProfileDropdownOpen(false);
          closeMenu();
        }}
      >
        My Profile
      </NavLink>

      <NavLink
        to="/my-subscriptions"
        onClick={() => {
          setProfileDropdownOpen(false);
          closeMenu();
        }}
      >
        My Subscriptions
      </NavLink>
    </div>
  )}
</div>

<NavLink to="/subscription" onClick={closeMenu}>
            Subscription
          </NavLink>
          

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          {/* Mobile only links */}
          <div className="mobile-nav-links">
            <Link to="/wishlist" onClick={closeMenu}>
    ♡ My Wishlist ({wishlistCount})
  </Link>

            <Link to="/cart" onClick={closeMenu}>
              🛒 My Cart ({cartCount})
            </Link>
          </div>

          <div className="mobile-auth">
  {isLoggedIn ? (
    <button
      className="mobile-login"
      onClick={handleLogout}
    >
      Logout
    </button>
  ) : (
    <>
      <Link to="/login" className="mobile-login" onClick={closeMenu}>
        Login
      </Link>

      <Link to="/signup" className="mobile-signup" onClick={closeMenu}>
        Get Started
      </Link>
    </>
  )}
</div>
        </nav>

        {/* Header Right Side */}
        <div className="header-actions">

          {/* Location */}
          <button
            className="location-btn"
            onClick={() => alert("Location selection feature coming soon!")}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M20 10C20 15 12 22 12 22S4 15 4 10A8 8 0 1 1 20 10Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="10"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>

            <span>
              <small>Deliver to</small>
              <strong>Select Location</strong>
            </span>
          </button>

          {/* Search */}
          <button
            className="icon-btn search-toggle"
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M16 16L21 21"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Wishlist */}
          {/* Wishlist */}
<Link
  to="/wishlist"
  className="icon-btn wishlist-btn"
  aria-label={`Wishlist with ${wishlistCount} items`}
>
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M20.8 8.8C20.8 14 12 20 12 20S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>

  <span className="wishlist-count">{wishlistCount}</span>
</Link>

          {/* Cart with Dynamic Count */}
          <Link
            to="/cart"
            className="icon-btn cart-btn"
            aria-label={`Cart with ${cartCount} items`}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M3 4H5L7.5 16H18L21 7H6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="20" r="1.5" fill="currentColor" />
              <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            </svg>

            <span className="cart-count">{cartCount}</span>
          </Link>

          {/* Login & Signup */}
          {/* Login, Signup & Logout */}
<div className="desktop-auth">
  {isLoggedIn ? (
    <button className="login-btn" onClick={handleLogout}>
      Logout
    </button>
  ) : (
    <>
      <Link to="/login" className="login-btn">
        Login
      </Link>

      <Link to="/signup" className="signup-btn">
        Sign Up <span>→</span>
      </Link>
    </>
  )}
</div>

          {/* Mobile Menu Button */}
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Search Box */}
      {searchOpen && (
        <div className="header-search-box">
          <form onSubmit={handleSearch}>
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M16 16L21 21"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>

            <input
              type="text"
              placeholder="Search homemade tiffin..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />

            <button type="submit">Search</button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
