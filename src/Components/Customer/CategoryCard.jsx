
import React from "react";
import "./CSS/CategoryCard.css";

const CategoryCard = ({ category, onSelect }) => {

  // Default category
  const safeCategory = category || {
    name: "Category",
    description: "Explore our food categories",
    color: "#E7F3EB",
    emoji: "🍱"
  };

  return (
    <div
      className="cc-card"
      onClick={() => onSelect && onSelect(safeCategory)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect && onSelect(safeCategory);
        }
      }}
    >
      {/* Category Icon */}
      <div
        className="cc-icon-box"
        style={{ backgroundColor: safeCategory.color || "#E7F3EB" }}
      >
        <span>{safeCategory.emoji || "🍱"}</span>
      </div>

      {/* Category Details */}
      <div className="cc-content">
        <h3>{safeCategory.name}</h3>

        <p>{safeCategory.description}</p>

        <span className="cc-explore">
          Explore Category <span>→</span>
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
