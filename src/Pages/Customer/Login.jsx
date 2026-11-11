
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/Login.css";
import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    alert("Please enter email and password!");
    return;
  }

  // Get registered users
  const users = JSON.parse(
    localStorage.getItem("registeredUsers") || "[]"
  );

  // Check email and password
  const loggedInUser = users.find(
    (user) =>
      user.email.toLowerCase() === formData.email.trim().toLowerCase() &&
      user.password === formData.password
  );

  if (!loggedInUser) {
    alert("Invalid Email or Password!");
    return;
  }

  // Save login session
  localStorage.setItem("isLoggedIn", "true");

  localStorage.setItem(
    "currentUser",
    JSON.stringify({
      fullName: loggedInUser.fullName,
      email: loggedInUser.email,
      phone: loggedInUser.phone,
    })
  );

  window.dispatchEvent(new Event("authUpdated"));

  alert("Login Successful!");

  navigate("/");
};

  return (
    <>
    <Header />
      <div className="login-page">

      <div className="login-container">
        

        {/* Left Side */}
        <div className="login-left">
          <div className="login-brand">
            <div className="login-brand-icon">🍱</div>
            <h2>Tiffin<span>Wala</span></h2>
          </div>

          <div className="login-left-content">
            <span className="login-tag">WELCOME BACK</span>

            <h1>
              Homemade Food,
              <br />
              Delivered With
              <br />
              <span>Love.</span>
            </h1>

            <p>
              Freshness in every bite. Login to discover
              delicious homemade meals from your favourite
              home chefs.
            </p>
          </div>

          <div className="login-bottom-text">
            Fresh Food • Happy Life
          </div>
        </div>

        {/* Right Side */}
        <div className="login-right">

          <div className="login-form-wrapper">

            <h2>Welcome Back!</h2>

            <p className="login-subtitle">
              Please login to your account
            </p>

            <form onSubmit={handleSubmit}>

              <div className="login-field">
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

              <div className="login-field">
                <label>Password</label>

                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
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

              <div className="login-options">

                <label className="remember-option">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                  />
                  Remember me
                </label>

                <Link to="/forgot-password">
                  Forgot Password?
                </Link>

              </div>

              <button type="submit" className="login-submit-btn">
                Login to Account →
              </button>

            </form>

            <div className="login-divider">
              <span>OR</span>
            </div>

            <p className="signup-text">
              Don't have an account?
              <Link to="/signup"> Create Account</Link>
            </p>

            <Link to="/" className="back-home">
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

export default Login;
