import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/TiffinDetails.css";
import {
  FaStar,
  FaUser ,
  FaShoppingCart,
  FaMinus,
  FaPlus,
  FaCheckCircle,
  FaHome,
  FaChevronRight,
  FaArrowLeft,
  FaUtensils
} from "react-icons/fa";

const TiffinDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  // Demo Tiffin Data
  const tiffins = [
    {
      id: 1,
      name: "Homely Veg Thali",
      chef: "Priya Home Kitchen",
      price: 100,
      rating: 4.8,
      category: "Pure Veg",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=900",
      description:
        "Enjoy fresh and delicious homemade food prepared with love and quality ingredients.",
      items: ["4 Fresh Chapatis", "Dal Tadka", "Seasonal Sabzi", "Steamed Rice", "Salad", "Pickle"],
    },
    {
      id: 2,
      name: "Special Punjabi Thali",
      chef: "Amritsar Food House",
      price: 140,
      rating: 4.9,
      category: "North Indian",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900",
      description:
        "A delicious Punjabi meal prepared with traditional spices and fresh ingredients.",
      items: ["4 Butter Rotis", "Dal Makhani", "Paneer Sabzi", "Jeera Rice", "Salad"],
    },
    {
      id: 3,
      name: "Healthy Diet Tiffin",
      chef: "Fit Food Kitchen",
      price: 120,
      rating: 4.7,
      category: "Healthy",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900",
      description:
        "A balanced homemade meal for people who prefer healthy and nutritious food.",
      items: ["Multigrain Roti", "Mixed Vegetable", "Dal", "Brown Rice", "Fresh Salad"],
    },
    {
      id: 4,
      name: "Homemade Chicken Meal",
      chef: "Royal Kitchen",
      price: 180,
      rating: 4.8,
      category: "Non-Veg",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=900",
      description:
        "Freshly prepared chicken meal with delicious curry and rice.",
      items: ["Chicken Curry", "3 Chapatis", "Steamed Rice", "Salad"],
    },
    {
      id: 5,
      name: "South Indian Meal",
      chef: "Chennai Home Foods",
      price: 110,
      rating: 4.6,
      category: "South Indian",
      image:
        "https://images.unsplash.com/photo-1630383249896-424e482df921?w=900",
      description:
        "Enjoy a traditional South Indian homemade meal.",
      items: ["4 Idlis", "Sambar", "Coconut Chutney", "Medu Vada"],
    },
    {
      id: 6,
      name: "Daily Special Veg Meal",
      chef: "Annapurna Kitchen",
      price: 90,
      rating: 4.5,
      category: "Veg",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900",
      description:
        "A tasty and affordable homemade meal for your everyday lunch.",
      items: ["4 Chapatis", "Dal", "Seasonal Sabzi", "Rice", "Pickle"],
    },
  ];

  // URL se Tiffin ID ke according data find karna
  const tiffin = tiffins.find((item) => item.id === Number(id));

  // Add to Cart
  const handleAddToCart = () => {
    if (!tiffin) return;

    const cartItem = {
      ...tiffin,
      quantity,
    };

    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = oldCart.find(
      (item) => item.id === cartItem.id
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = oldCart.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [...oldCart, cartItem];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    alert("Tiffin added to cart successfully!");
  };

  // Tiffin not found
  if (!tiffin) {
    return (
      <>
        <Header />
        <div className="tiffin-not-found">
          <h2>Tiffin Not Found!</h2>
          <button onClick={() => navigate("/explore-tiffin")}>
            Explore Tiffins
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="tiffin-details-page">

        {/* Breadcrumb */}
       <div className="tiffin-breadcrumb">
  <span onClick={() => navigate("/")}>
    <FaHome /> Home
  </span>
  <FaChevronRight />
  <span onClick={() => navigate("/explore-tiffin")}>
    Explore Tiffins
  </span>
  <FaChevronRight />
  <strong>{tiffin.name}</strong>
</div>

        {/* Details Container */}
        <section className="tiffin-details-container">

          {/* Image */}
          <div className="tiffin-details-image">
            <img src={tiffin.image} alt={tiffin.name} />
          </div>

          {/* Information */}
          <div className="tiffin-details-info">

            <span className="tiffin-details-category">
              {tiffin.category}
            </span>

            <h1>{tiffin.name}</h1>

            <p className="tiffin-details-chef">
  <FaUser /> Prepared by <strong>{tiffin.chef}</strong>
</p>

<div className="tiffin-details-rating">
  <FaStar /> {tiffin.rating} <span>Customer Rating</span>
</div>

            <h2 className="tiffin-details-price">
              ₹{tiffin.price}
              <small> / meal</small>
            </h2>

            <p className="tiffin-details-description">
              {tiffin.description}
            </p>

            {/* Quantity */}
            <div className="tiffin-quantity">
              <span>Quantity:</span>

              <div className="quantity-controls">
  <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
    <FaMinus />
  </button>

  <strong>{quantity}</strong>

  <button onClick={() => setQuantity((prev) => prev + 1)}>
    <FaPlus />
  </button>
</div>
            </div>

            <h3 className="tiffin-total-price">
              Total: ₹{tiffin.price * quantity}
            </h3>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
  <FaShoppingCart /> Add to Cart
</button>

          </div>
        </section>

        {/* Food Items */}
        <section className="tiffin-menu-section">
          <h2>What's Included in This Tiffin?</h2>

          <div className="tiffin-menu-grid">
            {tiffin.items.map((item, index) => (
              <div className="tiffin-menu-item" key={index}>
                <FaCheckCircle />
                {item}
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default TiffinDetails;