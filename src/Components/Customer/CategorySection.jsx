
import React from "react";
import { useNavigate } from "react-router-dom";
import ".CSS/CategorySection.css";

const categories = [
  {
    id: 1,
    name: "Veg Thali",
    emoji: "🥗",
    description: "Healthy vegetarian meals",
    color: "#E7F3EB",
    search: "Veg Thali",
  },
  {
    id: 2,
    name: "North Indian",
    emoji: "🍛",
    description: "Traditional Indian taste",
    color: "#FFF0DB",
    search: "North Indian",
  },
  {
    id: 3,
    name: "South Indian",
    emoji: "🥞",
    description: "Dosa, Idli & More",
    color: "#FCE9E4",
    search: "South Indian",
  },
  {
    id: 4,
    name: "Healthy Food",
    emoji: "🥦",
    description: "Fresh & nutritious food",
    color: "#E6F2F5",
    search: "Healthy Food",
  },
  {
    id: 5,
    name: "Homemade Roti",
    emoji: "🫓",
    description: "Soft homemade rotis",
    color: "#F8EDDA",
    search: "Homemade Roti",
  },
  {
    id: 6,
    name: "Monthly Tiffin",
    emoji: "🍱",
    description: "Daily meal subscriptions",
    color: "#F1EAF8",
    search: "Monthly Tiffin",
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(
      `/explore-tiffin?category=${encodeURIComponent(category.search)}`
    );
  };

  return (
    <section className="category-section">
      <div className="category-container">

        {/* Section Heading */}
        <div className="category-heading">
          <div className="category-heading-text">
            <span className="category-subtitle">
              🍃 Explore Our Menu
            </span>

            <h2>
              Explore Food <span>Categories</span>
            </h2>

            <p>
              Find your favourite homemade meals from
              different food categories.
            </p>
          </div>

          <button
            className="category-view-all"
            onClick={() => navigate("/explore-tiffin")}
          >
            View All Categories →
          </button>
        </div>

        {/* Categories Grid */}
        <div className="category-grid">
          {categories.map((category) => (
            <div
              className="category-card"
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCategoryClick(category);
                }
              }}
            >
              <div
                className="category-icon-box"
                style={{ backgroundColor: category.color }}
              >
                <span>{category.emoji}</span>
              </div>

              <h3>{category.name}</h3>

              <p>{category.description}</p>

              <span className="category-arrow">Explore →</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;
