import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Varanasi");

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(
      `/explore-tiffin?search=${encodeURIComponent(search)}&location=${encodeURIComponent(location)}`
    );
  };

  const handleExplore = () => {
    navigate("/explore-tiffin");
  };

  
const addToCart = (tiffin) => {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = savedCart.find(
    (item) => item.id === tiffin.id
  );

  let updatedCart;

  if (existingItem) {
    updatedCart = savedCart.map((item) =>
      item.id === tiffin.id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
  } else {
    updatedCart = [
      ...savedCart,
      { ...tiffin, quantity: 1 },
    ];
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));

  alert(`${tiffin.name} added to cart!`);
};

  return (
    <>
      <Header />

     {/* ================= HERO SECTION ================= */}

<section className="hero-section">
  <div className="hero-container">

    <div className="hero-content">

      <div className="hero-tag">
        <span>🍱</span>
        Fresh & Healthy Homemade Food
      </div>

      <h1>
        Ghar Jaisa Khana,
        <br />
        Ab Aapke <span>Darwaze Par!</span>
      </h1>

      <p className="hero-description">
        Enjoy fresh, healthy and delicious homemade tiffins
        prepared with love by trusted home chefs near you.
      </p>

      <form className="hero-search-form" onSubmit={handleSearch}>

        <div className="hero-search-input">
          <span className="hero-search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search your favourite tiffin..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="hero-location-input">
          <span>📍</span>
          <input
            type="text"
            placeholder="Your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button type="submit" className="hero-search-btn">
          Search <span>→</span>
        </button>

      </form>

      <button
        className="hero-explore-btn"
        onClick={() => navigate("/explore-tiffin")}
      >
        Explore Tiffins <span>→</span>
      </button>

      <div className="hero-highlights">

        <div className="hero-highlight-item">
          <span className="highlight-icon">🥗</span>
          <div>
            <strong>Fresh Food</strong>
            <small>Made with love</small>
          </div>
        </div>

        <div className="hero-highlight-divider"></div>

        <div className="hero-highlight-item">
          <span className="highlight-icon">👨‍🍳</span>
          <div>
            <strong>Home Chefs</strong>
            <small>Trusted providers</small>
          </div>
        </div>

        <div className="hero-highlight-divider"></div>

        <div className="hero-highlight-item">
          <span className="highlight-icon">🚴</span>
          <div>
            <strong>Doorstep</strong>
            <small>Fresh delivery</small>
          </div>
        </div>

      </div>
    </div>

    <div className="hero-image-area">

      <div className="hero-image-circle"></div>

      <img
        src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1000&q=85"
        alt="Fresh homemade Indian thali"
        className="hero-food-image"
      />

      <div className="hero-floating-card hero-fresh-card">
        <span className="floating-icon">🌿</span>
        <div>
          <strong>100% Homemade</strong>
          <small>Freshly prepared meals</small>
        </div>
      </div>

      <div className="hero-floating-card hero-rating-card">
        <span className="floating-icon">⭐</span>
        <div>
          <strong>4.9 / 5 Rating</strong>
          <small>Loved by customers</small>
        </div>
      </div>

      <div className="hero-image-label">
        ❤️ Made with Love
      </div>

    </div>

  </div>
</section>

{/* ================= HERO SECTION END ================= */}

{/* ================= CATEGORY SECTION ================= */}

<section className="category-section">

  <div className="category-container">

    <div className="category-heading">
      <div>
        <span className="section-tag">EXPLORE OUR MENU</span>
        <h2>Explore Food <span>Categories</span></h2>
        <p>Find your favourite homemade food from our categories.</p>
      </div>

      <button   type="button" className="category-view-btn "  onClick={() => navigate("/explore-tiffin")}>
        View All <span>→</span>
      </button>
    </div>

    <div className="category-grid">

      <div className="category-card">
        <div className="category-image">
          <img
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500"
            alt="Veg Thali"
          />
        </div>
        <h3>Veg Thali</h3>
        <p>Fresh & Healthy Meals</p>
      </div>

      <div className="category-card">
        <div className="category-image">
          <img
            src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500"
            alt="North Indian"
          />
        </div>
        <h3>North Indian</h3>
        <p>Traditional Indian Taste</p>
      </div>

      <div className="category-card">
        <div className="category-image">
          <img
            src="https://images.unsplash.com/photo-1630383249896-424e482df921?w=500"
            alt="South Indian"
          />
        </div>
        <h3>South Indian</h3>
        <p>Delicious South Flavours</p>
      </div>

      <div className="category-card">
        <div className="category-image">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500"
            alt="Healthy Food"
          />
        </div>
        <h3>Healthy Food</h3>
        <p>Nutritious Daily Meals</p>
      </div>

      <div className="category-card">
        <div className="category-image">
          <img
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500"
            alt="Homemade Roti"
          />
        </div>
        <h3>Homemade Roti</h3>
        <p>Soft & Fresh Rotis</p>
      </div>

      <div className="category-card">
        <div className="category-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=500"
            alt="Monthly Tiffin"
          />
        </div>
        <h3>Monthly Tiffin</h3>
        <p>Daily Meal Subscription</p>
      </div>

    </div>

  </div>

</section>

{/* ================= CATEGORY SECTION END ================= */}

{/* ================= POPULAR TIFFINS SECTION ================= */}

<section className="popular-tiffins-section">

  <div className="tiffins-container">

    <div className="tiffins-heading">
      <div>
        <span className="section-tag">CUSTOMER FAVOURITES</span>
        <h2>Popular <span>Tiffins</span></h2>
        <p>Discover delicious homemade meals loved by our customers.</p>
      </div>

      <button className="tiffins-view-btn" type="button"  onClick={() => navigate("/explore-tiffin")}>
        View All <span>→</span>
      </button>
    </div>

    <div className="tiffins-grid">

      <div className="popular-tiffin-card">
        <div className="tiffin-card-image">
          <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600" alt="Special Veg Thali" />
          <span className="tiffin-badge">Bestseller</span>
          <button className="tiffin-wishlist">♡</button>
        </div>

        <div className="tiffin-card-content">
          <div className="tiffin-card-top">
            <span>🍱 Veg Thali</span>
            <span className="tiffin-rating">★ 4.8</span>
          </div>

          <h3>Special Homemade Veg Thali</h3>
          <p>By Priya Home Kitchen</p>

          <div className="tiffin-card-details">
            <span>🥗 Freshly Prepared</span>
            <span>🕒 30-40 min</span>
          </div>

          <div className="tiffin-card-bottom">
            <div>
              <strong>₹120</strong>
              <small>/ meal</small>
            </div>
           
<button
  onClick={() =>
    addToCart({
      id: "home-1",
      name: "Special Homemade Veg Thali",
      chef: "Priya Home Kitchen",
      category: "Veg",
      price: 120,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600"
    })
  }
>
  Add +
</button>

          </div>
        </div>
      </div>

      <div className="popular-tiffin-card">
        <div className="tiffin-card-image">
          <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600" alt="North Indian Thali" />
          <span className="tiffin-badge">Popular</span>
          <button className="tiffin-wishlist">♡</button>
        </div>

        <div className="tiffin-card-content">
          <div className="tiffin-card-top">
            <span>🍛 North Indian</span>
            <span className="tiffin-rating">★ 4.7</span>
          </div>

          <h3>Traditional North Indian Meal</h3>
          <p>By Sharma Ji Kitchen</p>

          <div className="tiffin-card-details">
            <span>🥗 Freshly Prepared</span>
            <span>🕒 35-45 min</span>
          </div>

          <div className="tiffin-card-bottom">
            <div>
              <strong>₹150</strong>
              <small>/ meal</small>
            </div>
            
<button
  onClick={() =>
    addToCart({
      id: "home-2",
      name: "Traditional North Indian Meal",
      chef: "Sharma Ji Kitchen",
      category: "North Indian",
      price: 150,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600"
    })
  }
>
  Add +
</button>

          </div>
        </div>
      </div>

      <div className="popular-tiffin-card">
        <div className="tiffin-card-image">
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600" alt="Healthy Meal" />
          <span className="tiffin-badge healthy-badge">Healthy Choice</span>
          <button className="tiffin-wishlist">♡</button>
        </div>

        <div className="tiffin-card-content">
          <div className="tiffin-card-top">
            <span>🥗 Healthy Food</span>
            <span className="tiffin-rating">★ 4.9</span>
          </div>

          <h3>Healthy Daily Meal Box</h3>
          <p>By Healthy Home Foods</p>

          <div className="tiffin-card-details">
            <span>🥬 Low Oil Food</span>
            <span>🕒 25-35 min</span>
          </div>

          <div className="tiffin-card-bottom">
            <div>
              <strong>₹130</strong>
              <small>/ meal</small>
            </div>
            
<button
  onClick={() =>
    addToCart({
      id: "home-2",
      name: "Traditional North Indian Meal",
      chef: "Sharma Ji Kitchen",
      category: "North Indian",
      price: 150,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600"
    })
  }
>
  Add +
</button>

          </div>
        </div>
      </div>

    </div>

  </div>

</section>

{/* ================= POPULAR TIFFINS SECTION END ================= */}

{/* ================= SPECIAL OFFER SECTION ================= */}

<section className="special-offer-section">

  <div className="offer-container">

    <div className="offer-content">

      <span className="offer-tag">🎉 LIMITED TIME OFFER</span>

      <h2>
        Get <span>20% OFF</span>
        <br />
        On Your First Order!
      </h2>

      <p>
        Enjoy delicious homemade meals at an amazing price.
        Order your favourite tiffin today!
      </p>

      <div className="offer-code-box">
        <span>Use Coupon Code</span>
        <strong>FIRST20</strong>
      </div>

      <button
        className="offer-order-btn"
        onClick={() => navigate("/explore-tiffin")}
      >
        Order Now <span>→</span>
      </button>

      <small className="offer-note">
        *Terms & conditions apply.
      </small>

    </div>

    <div className="offer-image-area">

      <div className="offer-circle"></div>

      <img
        src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=85"
        alt="Delicious homemade Indian thali"
        className="offer-food-image"
      />

      <div className="offer-discount">
        <strong>20%</strong>
        <span>OFF</span>
      </div>

    </div>

  </div>

</section>

{/* ================= SPECIAL OFFER SECTION END ================= */}
{/* ================= POPULAR HOME CHEFS SECTION ================= */}

<section className="popular-chefs-section">

  <div className="chefs-container">

    <div className="chefs-heading">
      <div>
        <span className="section-tag">MEET OUR FOOD MAKERS</span>
        <h2>Popular Home <span>Chefs</span></h2>
        <p>Discover talented home chefs serving fresh meals near you.</p>
      </div>

      <button
        className="chefs-view-btn"
        onClick={() => navigate("/explore-tiffin")}
      >
        Explore Chefs <span>→</span>
      </button>
    </div>

    <div className="chefs-grid">

      <div className="chef-card">
        <div className="chef-image">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500"
            alt="Home chef Priya"
          />
          <span className="chef-verified">✓ Verified</span>
        </div>

        <div className="chef-info">
          <h3>Priya Sharma</h3>
          <p className="chef-location">📍 Maldahiya, Varanasi</p>

          <div className="chef-stats">
            <span>⭐ 4.9 Rating</span>
            <span>🍱 120+ Orders</span>
          </div>

          <p className="chef-speciality">
            Speciality: North Indian Food
          </p>

          <button
            className="chef-profile-btn"
            onClick={() => navigate("/explore-tiffin")}
          >
            View Tiffins <span>→</span>
          </button>
        </div>
      </div>

      <div className="chef-card">
        <div className="chef-image">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
            alt="Home chef Rahul"
          />
          <span className="chef-verified">✓ Verified</span>
        </div>

        <div className="chef-info">
          <h3>Rahul Verma</h3>
          <p className="chef-location">📍 Lanka, Varanasi</p>

          <div className="chef-stats">
            <span>⭐ 4.8 Rating</span>
            <span>🍱 95+ Orders</span>
          </div>

          <p className="chef-speciality">
            Speciality: Healthy Homemade Meals
          </p>

          <button
            className="chef-profile-btn"
            onClick={() => navigate("/explore-tiffin")}
          >
            View Tiffins <span>→</span>
          </button>
        </div>
      </div>

      <div className="chef-card">
        <div className="chef-image">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
            alt="Home chef Neha"
          />
          <span className="chef-verified">✓ Verified</span>
        </div>

        <div className="chef-info">
          <h3>Neha Gupta</h3>
          <p className="chef-location">📍 Sigra, Varanasi</p>

          <div className="chef-stats">
            <span>⭐ 4.7 Rating</span>
            <span>🍱 80+ Orders</span>
          </div>

          <p className="chef-speciality">
            Speciality: Homemade Veg Thali
          </p>

          <button
            className="chef-profile-btn"
            onClick={() => navigate("/explore-tiffin")}
          >
            View Tiffins <span>→</span>
          </button>
        </div>
      </div>

    </div>

  </div>

</section>

{/* ================= POPULAR HOME CHEFS SECTION END ================= */}
{/* ================= SUBSCRIPTION PLANS SECTION ================= */}

<section className="subscription-section">

  <div className="subscription-container">

    <div className="subscription-heading">
      <span className="section-tag">SAVE MORE WITH US</span>
      <h2>Choose Your <span>Meal Plan</span></h2>
      <p>
        Enjoy fresh homemade food every day with flexible
        subscription plans.
      </p>
    </div>

    <div className="subscription-grid">

      {/* Daily Plan */}

      <div className="subscription-card">

        <div className="plan-icon">🍱</div>

        <h3>Daily Plan</h3>
        <p className="plan-description">Perfect for trying our food</p>

        <div className="plan-price">
          <strong>₹120</strong>
          <span>/ day</span>
        </div>

        <div className="plan-divider"></div>

        <ul className="plan-features">
          <li>✓ Fresh homemade meal</li>
          <li>✓ Daily menu options</li>
          <li>✓ Flexible food choices</li>
          <li>✓ No long-term commitment</li>
        </ul>

        <button
          className="plan-button"
          onClick={() => navigate("/explore-tiffin")}
        >
          Choose Daily
        </button>

      </div>

      {/* Weekly Plan */}

      <div className="subscription-card featured-plan">

        <span className="popular-plan-badge">MOST POPULAR</span>

        <div className="plan-icon">🥗</div>

        <h3>Weekly Plan</h3>
        <p className="plan-description">Great for busy weekdays</p>

        <div className="plan-price">
          <strong>₹750</strong>
          <span>/ week</span>
        </div>

        <div className="plan-savings">Save ₹90 compared to daily</div>

        <div className="plan-divider"></div>

        <ul className="plan-features">
          <li>✓ 7 days of homemade meals</li>
          <li>✓ Flexible menu selection</li>
          <li>✓ Fresh daily preparation</li>
          <li>✓ Priority order support</li>
        </ul>

        <button
          className="plan-button featured-button"
          onClick={() => navigate("/explore-tiffin")}
        >
          Choose Weekly
        </button>

      </div>

      {/* Monthly Plan */}

      <div className="subscription-card">

        <div className="plan-icon">📅</div>

        <h3>Monthly Plan</h3>
        <p className="plan-description">Your everyday food solution</p>

        <div className="plan-price">
          <strong>₹2,700</strong>
          <span>/ month</span>
        </div>

        <div className="plan-savings">Save ₹900 compared to daily</div>

        <div className="plan-divider"></div>

        <ul className="plan-features">
          <li>✓ 30 days of homemade meals</li>
          <li>✓ Monthly meal scheduling</li>
          <li>✓ Consistent food quality</li>
          <li>✓ Better value for money</li>
        </ul>

        <button
          className="plan-button"
          onClick={() => navigate("/explore-tiffin")}
        >
          Choose Monthly
        </button>

      </div>

    </div>

    

  </div>

</section>

{/* ================= SUBSCRIPTION PLANS SECTION END ================= */}
{/* ================= HOW IT WORKS SECTION ================= */}

<section className="how-it-works-section">

  <div className="how-container">

    <div className="how-heading">
      <span className="section-tag">SIMPLE & EASY PROCESS</span>
      <h2>How It <span>Works</span></h2>
      <p>Get your favourite homemade food delivered in just four simple steps.</p>
    </div>

    <div className="how-steps">

      <div className="how-step">
        <div className="how-icon-box">
          <span>📍</span>
          <div className="step-number">01</div>
        </div>
        <h3>Choose Your Location</h3>
        <p>Enter your location and discover trusted home chefs near you.</p>
      </div>

      <div className="how-step">
        <div className="how-icon-box">
          <span>🍱</span>
          <div className="step-number">02</div>
        </div>
        <h3>Explore Tiffins</h3>
        <p>Browse homemade meals, compare menus and select your favourite.</p>
      </div>

      <div className="how-step">
        <div className="how-icon-box">
          <span>💳</span>
          <div className="step-number">03</div>
        </div>
        <h3>Place Your Order</h3>
        <p>Choose your meal, confirm your order and complete payment.</p>
      </div>

      <div className="how-step">
        <div className="how-icon-box">
          <span>🚴</span>
          <div className="step-number">04</div>
        </div>
        <h3>Enjoy Your Meal</h3>
        <p>Your home chef prepares and delivers fresh food to your doorstep.</p>
      </div>

    </div>

    <div className="how-bottom">
      <span>❤️</span>
      Freshly prepared, delivered with love!
    </div>

  </div>

</section>

{/* ================= HOW IT WORKS SECTION END ================= */}
{/* ================= WHY CHOOSE US SECTION ================= */}

<section className="why-choose-section">

  <div className="why-container">

    <div className="why-heading">
      <span className="section-tag">WHY TIFFINWALA?</span>
      <h2>Why Choose <span>Us</span></h2>
      <p>
        More than just food delivery, we bring the warmth
        and comfort of homemade meals to your doorstep.
      </p>
    </div>

    <div className="why-content">

      <div className="why-image-area">
        <div className="why-image-circle"></div>

        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=85"
          alt="Fresh homemade Indian food"
          className="why-food-image"
        />

        <div className="why-floating-card">
          <span>❤️</span>
          <div>
            <strong>Made With Love</strong>
            <small>Just like home</small>
          </div>
        </div>
      </div>

      <div className="why-features">

        <div className="why-feature-card">
          <div className="why-feature-icon">🏠</div>
          <div>
            <h3>Real Homemade Food</h3>
            <p>
              Enjoy meals prepared by local home chefs
              with the taste and comfort of home.
            </p>
          </div>
        </div>

        <div className="why-feature-card">
          <div className="why-feature-icon">🥗</div>
          <div>
            <h3>Fresh & Quality Ingredients</h3>
            <p>
              Discover freshly prepared meals made with
              carefully selected ingredients.
            </p>
          </div>
        </div>

        <div className="why-feature-card">
          <div className="why-feature-icon">👨‍🍳</div>
          <div>
            <h3>Trusted Home Chefs</h3>
            <p>
              Explore provider profiles and choose
              home chefs that suit your preferences.
            </p>
          </div>
        </div>

        <div className="why-feature-card">
          <div className="why-feature-icon">🚴</div>
          <div>
            <h3>Direct Home Delivery</h3>
            <p>
              Your selected food provider prepares
              and delivers your meal to your doorstep.
            </p>
          </div>
        </div>

        <div className="why-feature-card">
          <div className="why-feature-icon">💰</div>
          <div>
            <h3>Affordable Meal Plans</h3>
            <p>
              Choose daily, weekly or monthly meal
              options according to your budget.
            </p>
          </div>
        </div>

        <div className="why-feature-card">
          <div className="why-feature-icon">📱</div>
          <div>
            <h3>Easy Online Ordering</h3>
            <p>
              Browse menus, place orders and manage
              your meals through one simple platform.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= WHY CHOOSE US SECTION END ================= */}

{/* ================= TESTIMONIALS SECTION ================= */}

<section className="testimonials-section">

  <div className="testimonials-container">

    <div className="testimonials-heading">
      <span className="section-tag">CUSTOMER LOVE</span>
      <h2>What Our Customers <span>Say</span></h2>
      <p>
        Real experiences from people who enjoy homemade food
        with TiffinWala.
      </p>
    </div>

    <div className="testimonials-grid">

      {/* Review 1 */}

      <div className="testimonial-card">

        <div className="testimonial-top">
          <div className="customer-info">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
              alt="Customer Rahul"
            />
            <div>
              <h3>Rahul Sharma</h3>
              <span>Varanasi, UP</span>
            </div>
          </div>

          <span className="quote-icon">“</span>
        </div>

        <div className="testimonial-stars">★★★★★</div>

        <p className="testimonial-message">
          Amazing homemade food! The taste reminds me of
          my home. The food is always fresh and delivery
          is also very convenient.
        </p>

        <span className="review-label">Verified Customer</span>

      </div>

      {/* Review 2 */}

      <div className="testimonial-card featured-testimonial">

        <div className="testimonial-top">
          <div className="customer-info">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
              alt="Customer Priya"
            />
            <div>
              <h3>Priya Verma</h3>
              <span>Varanasi, UP</span>
            </div>
          </div>

          <span className="quote-icon">“</span>
        </div>

        <div className="testimonial-stars">★★★★★</div>

        <p className="testimonial-message">
          I am a student living away from home. TiffinWala
          makes it easy to get healthy and affordable meals
          every day. Really loved the service!
        </p>

        <span className="review-label">Verified Customer</span>

      </div>

      {/* Review 3 */}

      <div className="testimonial-card">

        <div className="testimonial-top">
          <div className="customer-info">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150"
              alt="Customer Amit"
            />
            <div>
              <h3>Amit Singh</h3>
              <span>Varanasi, UP</span>
            </div>
          </div>

          <span className="quote-icon">“</span>
        </div>

        <div className="testimonial-stars">★★★★★</div>

        <p className="testimonial-message">
          Great variety of meals and affordable prices.
          I can easily choose my favourite home chef
          and order delicious food.
        </p>

        <span className="review-label">Verified Customer</span>

      </div>

    </div>

    <div className="testimonial-bottom">
      <strong>❤️ Thank You for Trusting TiffinWala!</strong>
      <p>Your love and feedback inspire us to serve better every day.</p>
    </div>

  </div>

</section>

{/* ================= TESTIMONIALS SECTION END ================= */}
{/* ================= FAQ SECTION ================= */}

<section className="faq-section">

  <div className="faq-container">

    <div className="faq-heading">
      <span className="section-tag">GOT QUESTIONS?</span>
      <h2>Frequently Asked <span>Questions</span></h2>
      <p>
        Find answers to common questions about ordering
        homemade food with TiffinWala.
      </p>
    </div>

    <div className="faq-content">

      <div className="faq-left">
        <div className="faq-image">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=700"
            alt="Fresh homemade food"
          />
        </div>

        <h3>Still Have Questions?</h3>
        <p>
          Can't find the answer you're looking for?
          Our support team is here to help you.
        </p>

        <button
          className="faq-contact-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us <span>→</span>
        </button>
      </div>

      <div className="faq-list">

        <details className="faq-item">
          <summary>What is TiffinWala?</summary>
          <p>
            TiffinWala is a platform that connects customers
            with local home chefs who prepare and deliver
            fresh homemade meals.
          </p>
        </details>

        <details className="faq-item">
          <summary>How can I order a tiffin?</summary>
          <p>
            Browse available tiffins, select your favourite
            meal, choose a suitable provider and place your
            order through our platform.
          </p>
        </details>

        <details className="faq-item">
          <summary>Who will deliver my food?</summary>
          <p>
            The selected food provider prepares your meal
            and handles its delivery directly to your
            doorstep.
          </p>
        </details>

        <details className="faq-item">
          <summary>Can I choose my favourite home chef?</summary>
          <p>
            Yes! You can explore available home chefs,
            check their menus and select the provider
            that best matches your preferences.
          </p>
        </details>

        <details className="faq-item">
          <summary>Do you offer daily, weekly and monthly plans?</summary>
          <p>
            Yes, different meal subscription options can
            be available depending on the selected home
            chef and their service area.
          </p>
        </details>

        <details className="faq-item">
          <summary>What payment methods are available?</summary>
          <p>
            Available payment methods will be displayed
            during checkout. Online payment and cash
            payment options can be supported.
          </p>
        </details>

        <details className="faq-item">
          <summary>Can I cancel my order?</summary>
          <p>
            Order cancellation will depend on the order
            status and the cancellation policy of the
            selected food provider.
          </p>
        </details>

      </div>

    </div>

  </div>

</section>

{/* ================= FAQ SECTION END ================= */}
{/* Newsletter Section */}
<section className="newsletter-section">
  <div className="newsletter-container">

    <div className="newsletter-content">
      <span className="newsletter-tag">STAY CONNECTED</span>

      <h2>
        Get Fresh Tiffin Updates <br />
        <span>Straight to Your Inbox!</span>
      </h2>

      <p>
        Subscribe to our newsletter and get updates about new
        homemade meals, special offers and exclusive discounts.
      </p>

      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email address"
          required
        />

        <button type="submit">
          Subscribe <i className="fas fa-arrow-right"></i>
        </button>
      </form>

      <small>
        <i className="fas fa-lock"></i> We respect your privacy.
        No spam, ever!
      </small>
    </div>

    <div className="newsletter-image">
      <img
        src="https://images.unsplash.com/photo-1547592180-85f173990554?w=700"
        alt="Healthy homemade food"
      />
    </div>

  </div>
</section>
<Footer/>
    </>
  );
};

export default Home;