
import React from "react";
import TiffinCard from "./TiffinCard";
import "./CSS/TiffinList.css";

// Demo Tiffin Data
// Baad me ye data Backend API se aayega
const demoTiffins = [
  {
    _id: "1",
    name: "Homemade Veg Thali",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
    description: "Fresh homemade food with roti, sabzi, dal and rice.",
    providerName: "Anjali Kitchen",
    mealType: "Lunch",
    deliveryTime: "30-40 min",
    rating: 4.8,
    price: 99,
    originalPrice: 129,
    discount: 23,
    isPopular: true,
  },
  {
    _id: "2",
    name: "Special North Indian Thali",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    description: "Delicious North Indian meal prepared with fresh ingredients.",
    providerName: "Sharma Food House",
    mealType: "Lunch",
    deliveryTime: "25-35 min",
    rating: 4.6,
    price: 119,
    originalPrice: 149,
    discount: 20,
    isPopular: false,
  },
  {
    _id: "3",
    name: "Healthy Diet Tiffin",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
    description: "Healthy and balanced meal for your daily routine.",
    providerName: "Healthy Bowl",
    mealType: "Dinner",
    deliveryTime: "30-45 min",
    rating: 4.9,
    price: 149,
    originalPrice: 179,
    discount: 17,
    isPopular: true,
  },
  {
    _id: "4",
    name: "Homemade Dal Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    description: "Simple, tasty and fresh dal rice made at home.",
    providerName: "Maa Ka Kitchen",
    mealType: "Lunch",
    deliveryTime: "20-30 min",
    rating: 4.5,
    price: 79,
    originalPrice: 99,
    discount: 20,
    isPopular: false,
  },
  {
    _id: "5",
    name: "Special Paneer Thali",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
    description: "Rich paneer curry served with roti, rice and salad.",
    providerName: "Food Corner",
    mealType: "Dinner",
    deliveryTime: "35-45 min",
    rating: 4.7,
    price: 159,
    originalPrice: 199,
    discount: 20,
    isPopular: true,
  },
  {
    _id: "6",
    name: "South Indian Meal",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600",
    description: "Fresh South Indian food with traditional flavours.",
    providerName: "South Taste",
    mealType: "Breakfast",
    deliveryTime: "25-35 min",
    rating: 4.6,
    price: 109,
    originalPrice: 139,
    discount: 22,
    isPopular: false,
  },
];

const TiffinList = ({
  tiffins = demoTiffins,
  onAddToCart,
  onViewDetails,
}) => {
  return (
    <section className="tiffin-list-section">
      <div className="tiffin-list-container">

        {/* Section Heading */}
        <div className="tiffin-list-heading">
          <div>
            <span className="tiffin-list-subtitle">
              OUR BEST COLLECTION
            </span>

            <h2>
              Popular <span>Tiffins</span>
            </h2>

            <p>
              Fresh, homemade and delicious meals delivered to your doorstep.
            </p>
          </div>

          <a href="/explore-tiffin" className="tiffin-view-all">
            View All Tiffins <span>→</span>
          </a>
        </div>

        {/* Tiffin Cards */}
        <div className="tiffin-list-grid">
          {tiffins.length > 0 ? (
            tiffins.map((tiffin) => (
              <TiffinCard
                key={tiffin._id}
                tiffin={tiffin}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
              />
            ))
          ) : (
            <div className="tiffin-empty-message">
              <h3>No Tiffins Available</h3>
              <p>Please check again later.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default TiffinList;
