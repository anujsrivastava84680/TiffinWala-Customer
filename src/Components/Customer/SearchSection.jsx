
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/SearchSection.css";

const SearchSection = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const searchValue = search.trim();

    if (!searchValue && !location.trim()) {
      navigate("/explore-tiffin");
      return;
    }

    navigate(
      `/explore-tiffin?search=${encodeURIComponent(searchValue)}&location=${encodeURIComponent(location.trim())}`
    );
  };

  return (
    <section className="search-section">
      <div className="search-container">

        {/* Heading */}
        <div className="search-heading">
          <span>🍃 Find Your Favourite Food</span>

          <h2>
            What are you <span>craving today?</span>
          </h2>

          <p>
            Discover delicious homemade tiffins from trusted
            home chefs near you.
          </p>
        </div>

        {/* Search Box */}
        <form className="main-search-box" onSubmit={handleSearch}>

          {/* Location Input */}
          <div className="search-input-group location-group">
            <span className="search-icon">📍</span>

            <div className="search-input-content">
              <label htmlFor="search-location">Your Location</label>

              <input
                id="search-location"
                type="text"
                placeholder="Enter your city or area"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="search-divider"></div>

          {/* Food Search Input */}
          <div className="search-input-group food-group">
            <span className="search-icon">🍱</span>

            <div className="search-input-content">
              <label htmlFor="food-search">Search Food</label>

              <input
                id="food-search"
                type="text"
                placeholder="Search tiffin, thali, meals..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Search Button */}
          <button type="submit" className="main-search-button">
            <span>⌕</span>
            Search Tiffins
          </button>

        </form>

        {/* Popular Searches */}
        <div className="popular-searches">
          <strong>Popular:</strong>

          <button
            type="button"
            onClick={() => setSearch("Veg Thali")}
          >
            Veg Thali
          </button>

          <button
            type="button"
            onClick={() => setSearch("Homemade Roti")}
          >
            Homemade Roti
          </button>

          <button
            type="button"
            onClick={() => setSearch("Healthy Meals")}
          >
            Healthy Meals
          </button>

          <button
            type="button"
            onClick={() => setSearch("Monthly Tiffin")}
          >
            Monthly Tiffin
          </button>
        </div>

      </div>
    </section>
  );
};

export default SearchSection;
