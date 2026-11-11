
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheck,
  FaClock,
  FaCalendarAlt,
  FaUtensils,
  FaStar,
  FaArrowRight,
  FaCrown,
  FaLeaf,
  FaGift
} from "react-icons/fa";
import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/Subscription.css";

const plans = [
  {
    id: "daily",
    name: "Daily Plan",
    subtitle: "Perfect for trying our meals",
    price: 149,
    duration: "Per Day",
    meals: "1 Meal Per Day",
    features: [
      "Fresh homemade food",
      "Choose Veg or Non-Veg",
      "Daily menu options",
      "Quality ingredients",
      "Easy meal ordering"
    ],
    icon: <FaUtensils />,
    popular: false
  },
  {
    id: "weekly",
    name: "Weekly Plan",
    subtitle: "Your weekly food companion",
    price: 899,
    duration: "Per Week",
    meals: "2 Meals Per Day",
    features: [
      "Fresh homemade food",
      "2 meals every day",
      "Free delivery",
      "Flexible meal selection",
      "Priority customer support",
      "Save more on every meal"
    ],
    icon: <FaStar />,
    popular: true
  },
  {
    id: "monthly",
    name: "Monthly Plan",
    subtitle: "Best value for everyday meals",
    price: 2999,
    duration: "Per Month",
    meals: "2 Meals Per Day",
    features: [
      "Fresh homemade food",
      "2 meals every day",
      "Free delivery",
      "Personalized meal choices",
      "Priority customer support",
      "Special monthly discounts",
      "Flexible subscription options"
    ],
    icon: <FaCrown />,
    popular: false
  }
];

const Subscription = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(
    localStorage.getItem("selectedSubscription") || ""
  );

  const handleSubscribe = (plan) => {
  setSelectedPlanData(plan);
  setShowPlanModal(true);
};

const continueToCheckout = () => {
  localStorage.setItem(
    "selectedSubscription",
    JSON.stringify(selectedPlanData)
  );

  navigate("/subscription-checkout");
};

  const [showPlanModal, setShowPlanModal] = useState(false);
const [selectedPlanData, setSelectedPlanData] = useState(null);

  return (
    <>
      <Header />

      <main className="subscription-page">
        {showPlanModal && selectedPlanData && (
  <div
    className="subscription-modal-overlay"
    onClick={() => setShowPlanModal(false)}
  >
    <div
      className="subscription-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="subscription-modal-close"
        onClick={() => setShowPlanModal(false)}
      >
        ×
      </button>

      <div className="subscription-plan-icon">
        {selectedPlanData.icon}
      </div>

      <h2>{selectedPlanData.name}</h2>
      <p>{selectedPlanData.subtitle}</p>

      <h3>
        ₹{selectedPlanData.price}
        <small> / {selectedPlanData.duration}</small>
      </h3>

      <p>{selectedPlanData.meals}</p>

      <h4>Plan Benefits</h4>

      <ul>
        {selectedPlanData.features.map((feature, index) => (
          <li key={index}>
            <FaCheck /> {feature}
          </li>
        ))}
      </ul>

      <button
        className="subscribe-btn"
        onClick={continueToCheckout}
      >
        Continue to Checkout <FaArrowRight />
      </button>
    </div>
  </div>
)}

        {/* Hero Section */}
        <section className="subscription-hero">
          <div className="subscription-hero-content">
            <span className="subscription-tag">
              <FaGift /> EAT HEALTHY, LIVE HAPPY
            </span>

            <h1>
              Choose Your Perfect <span>Meal Plan</span>
            </h1>

            <p>
              Enjoy fresh, homemade and delicious meals every day.
              Choose a subscription plan that fits your lifestyle.
            </p>

            <button
              className="subscription-hero-btn"
              onClick={() =>
                document.getElementById("subscription-plans")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Plans <FaArrowRight />
            </button>
          </div>

          <div className="subscription-hero-image">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
              alt="Healthy homemade meal"
            />
          </div>
        </section>

        {/* Benefits */}
        <section className="subscription-benefits">
          <div>
            <FaLeaf />
            <h3>Fresh & Healthy</h3>
            <p>Homemade meals with fresh ingredients.</p>
          </div>

          <div>
            <FaClock />
            <h3>On-Time Delivery</h3>
            <p>Enjoy your meals at your preferred time.</p>
          </div>

          <div>
            <FaCalendarAlt />
            <h3>Flexible Plans</h3>
            <p>Choose a plan according to your needs.</p>
          </div>

          <div>
            <FaUtensils />
            <h3>Homemade Taste</h3>
            <p>Delicious food prepared with care.</p>
          </div>
        </section>

        {/* Plans */}
        <section
          className="subscription-plans-section"
          id="subscription-plans"
        >
          <div className="subscription-heading">
            <span>OUR SUBSCRIPTIONS</span>
            <h2>Choose Your <span>Meal Plan</span></h2>
            <p>
              Save time and money with our affordable meal subscriptions.
            </p>
          </div>

          <div className="subscription-plans">
            {plans.map((plan) => (
              <div
                className={`subscription-card ${
                  plan.popular ? "popular-plan" : ""
                }`}
                key={plan.id}
              >
                {plan.popular && (
                  <div className="popular-label">
                    <FaStar /> MOST POPULAR
                  </div>
                )}

                <div className="subscription-plan-icon">
                  {plan.icon}
                </div>

                <h3>{plan.name}</h3>
                <p className="plan-subtitle">{plan.subtitle}</p>

                <div className="subscription-price">
                  <span>₹</span>
                  {plan.price}
                  <small>/{plan.duration.replace("Per ", "").toLowerCase()}</small>
                </div>

                <div className="plan-meals">
                  <FaUtensils /> {plan.meals}
                </div>

                <div className="plan-divider"></div>

                <ul className="subscription-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <FaCheck /> {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`subscribe-btn ${
                    selectedPlan === plan.id ? "selected-plan-btn" : ""
                  }`}
                  onClick={() => handleSubscribe(plan)}
                >
                  {selectedPlan === plan.id
                    ? "Selected ✓"
                    : "Choose Plan"}
                  <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="subscription-how">
          <div className="subscription-heading">
            <span>SIMPLE PROCESS</span>
            <h2>How Subscription <span>Works</span></h2>
          </div>

          <div className="subscription-steps">
            <div>
              <span>01</span>
              <h3>Choose Your Plan</h3>
              <p>Select a daily, weekly or monthly meal plan.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Select Your Meals</h3>
              <p>Explore available homemade meals and menus.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Enjoy Your Food</h3>
              <p>Get delicious meals delivered to your doorstep.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="subscription-faq">
          <div className="subscription-heading">
            <span>HAVE QUESTIONS?</span>
            <h2>Frequently Asked <span>Questions</span></h2>
          </div>

          <div className="subscription-faq-list">
            <details>
              <summary>Can I change my subscription plan?</summary>
              <p>
                You can select another plan. In this frontend demo,
                the newly selected plan replaces the previous selection.
              </p>
            </details>

            <details>
              <summary>Can I choose my meals?</summary>
              <p>
                Meal selection can be managed according to the available
                menu and provider options.
              </p>
            </details>

            <details>
              <summary>Is delivery included in the subscription?</summary>
              <p>
                Delivery benefits depend on the selected plan and provider.
              </p>
            </details>

            <details>
              <summary>Is online payment available?</summary>
              <p>
                This page is currently a frontend demo. Real payments
                are not connected.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="subscription-cta">
          <h2>Good Food, Great Health!</h2>
          <p>
            Make every meal special with fresh homemade food.
          </p>
          <button onClick={() => navigate("/explore-tiffin")}>
            Explore Tiffins <FaArrowRight />
          </button>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Subscription;
