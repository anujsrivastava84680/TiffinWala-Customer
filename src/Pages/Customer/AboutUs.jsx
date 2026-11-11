
import React from "react";
import { Link } from "react-router-dom";
import {
  FaUtensils,
  FaHeart,
  FaLeaf,
  FaHome,
  FaShippingFast,
  FaShieldAlt,
  FaUsers,
  FaBullseye,
  FaEye
} from "react-icons/fa";

import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/AboutUs.css";

const AboutUs = () => {
  const features = [
    {
      icon: <FaHome />,
      title: "Homemade Food",
      description:
        "Enjoy fresh, hygienic and delicious homemade meals prepared with care."
    },
    {
      icon: <FaLeaf />,
      title: "Fresh Ingredients",
      description:
        "We focus on quality ingredients and healthy food for your everyday meals."
    },
    {
      icon: <FaShippingFast />,
      title: "Home Delivery",
      description:
        "Get your favourite homemade tiffin delivered directly to your doorstep."
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted Providers",
      description:
        "Discover local home chefs and tiffin providers in one convenient platform."
    }
  ];

  return (
    <>
      <Header />

      <main className="about-page">

        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="about-tag">ABOUT TIFFINWALA</span>

            <h1>
              Bringing Homemade
              <span> Happiness To Your Table</span>
            </h1>

            <p>
              We connect food lovers with local home chefs and tiffin
              providers, making fresh, tasty and homemade food easier
              to discover and enjoy.
            </p>

            <Link to="/explore-tiffin" className="about-hero-btn">
              Explore Tiffins <FaUtensils />
            </Link>
          </div>

          <div className="about-hero-image">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
              alt="Fresh homemade food"
            />
            <div className="about-image-badge">
              <FaHeart />
              <span>Made With Love</span>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="about-story">
          <div className="about-story-image">
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900"
              alt="Homemade cooking"
            />
          </div>

          <div className="about-story-content">
            <span className="about-tag">OUR STORY</span>

            <h2>Good Food, Just Like Home</h2>

            <p>
              Finding healthy, affordable and homemade food away
              from home can be difficult. That's why TiffinWala
              aims to make this experience simple and convenient.
            </p>

            <p>
              Our platform brings customers and local food providers
              together. Customers can explore different tiffin options,
              compare meals and place orders conveniently.
            </p>

            <p>
              We also help home chefs and small food businesses
              showcase their cooking and reach more customers.
            </p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="about-mission">
          <div className="mission-card">
            <div className="mission-icon">
              <FaBullseye />
            </div>
            <h3>Our Mission</h3>
            <p>
              To make fresh, hygienic and affordable homemade food
              accessible to everyone while supporting local home chefs
              and small food businesses.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>
              To build a trusted platform where people can easily
              discover homemade meals and local food providers can
              grow their businesses.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="about-features">
          <div className="about-section-heading">
            <span className="about-tag">WHY CHOOSE US</span>
            <h2>More Than Just A Tiffin Service</h2>
            <p>
              We bring convenience, quality and the comfort of
              homemade food together.
            </p>
          </div>

          <div className="about-feature-grid">
            {features.map((feature, index) => (
              <div className="about-feature-card" key={index}>
                <div className="about-feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="about-values">
          <div className="about-values-content">
            <span className="about-tag">OUR VALUES</span>
            <h2>What Makes Us Different?</h2>

            <div className="about-value-item">
              <FaHeart />
              <div>
                <h3>Made With Care</h3>
                <p>We believe homemade food brings comfort and happiness.</p>
              </div>
            </div>

            <div className="about-value-item">
              <FaUsers />
              <div>
                <h3>Supporting Local Chefs</h3>
                <p>We help local food providers connect with more customers.</p>
              </div>
            </div>

            <div className="about-value-item">
              <FaUtensils />
              <div>
                <h3>Customer First</h3>
                <p>We aim to make finding and ordering meals simple.</p>
              </div>
            </div>
          </div>

          <div className="about-values-image">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900"
              alt="Healthy homemade meal"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h2>Ready To Enjoy Homemade Food?</h2>
          <p>
            Discover delicious tiffins from local home chefs
            and find your next favourite meal.
          </p>

          <Link to="/explore-tiffin" className="about-cta-btn">
            Explore Tiffins <FaUtensils />
          </Link>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
