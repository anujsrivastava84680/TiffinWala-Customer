
import React, { useState } from "react";
import { Link,useNavigate  } from "react-router-dom";
import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/Signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    if (!formData.terms) {
      alert("Please accept Terms & Conditions!");
      return;
    }

    // alert("Signup form working! Backend registration is not connected yet.");
    // Get existing registered users
const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

// Check if email already exists
const userExists = users.some(
  (user) => user.email === formData.email
);

if (userExists) {
  alert("This email is already registered!");
  return;
}

// Save new user
const newUser = {
  fullName: formData.fullName,
  email: formData.email,
  phone: formData.phone,
  password: formData.password,
};

users.push(newUser);

localStorage.setItem("registeredUsers", JSON.stringify(users));

alert("Signup Successful! Please Login.");

navigate("/login");
  };

  return (
    <>
      <Header />

      <div className="signup-page">

        <div className="signup-container">

          {/* LEFT SIDE */}
          <div className="signup-left">

            <div className="signup-brand">
              <div className="signup-brand-icon">🍱</div>
              <h2>Tiffin<span>Wala</span></h2>
            </div>

            <div className="signup-left-content">
              <span className="signup-tag">JOIN OUR FAMILY</span>

              <h1>
                Good Food,
                <br />
                Good Mood,
                <br />
                <span>Every Day!</span>
              </h1>

              <p>
                Discover delicious homemade meals prepared
                with love by trusted home chefs near you.
                Create your account and enjoy fresh food
                every day.
              </p>
            </div>

            <div className="signup-bottom-text">
              Fresh Food • Happy Life
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="signup-right">

            <div className="signup-form-wrapper">

              <h2>Create Account</h2>

              <p className="signup-subtitle">
                Join TiffinWala and enjoy homemade food.
              </p>

              <form onSubmit={handleSubmit}>

                {/* FULL NAME */}
                <div className="signup-field">
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="signup-field">
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* PHONE */}
                <div className="signup-field">
                  <label>Mobile Number</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter 10 digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                  />
                </div>

                {/* PASSWORD */}
                <div className="signup-field">
                  <label>Password</label>

                  <div className="signup-password-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Create password"
                      value={formData.password}
                      onChange={handleChange}
                      minLength="6"
                      required
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="signup-field">
                  <label>Confirm Password</label>

                  <div className="signup-password-input">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* TERMS */}
                <div className="signup-terms">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                  />

                  <label>
                    I agree to the Terms & Conditions and Privacy Policy.
                  </label>
                </div>

                {/* SUBMIT */}
                <button type="submit" className="signup-submit-btn">
                  Create My Account →
                </button>

              </form>

              <p className="signup-login-text">
                Already have an account?
                <Link to="/login"> Login Here</Link>
              </p>

              <Link to="/" className="signup-back-home">
                ← Back to Home
              </Link>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Signup;
