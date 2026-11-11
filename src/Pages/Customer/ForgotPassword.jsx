
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [verified, setVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Check Registered Email
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your registered email!");
      return;
    }

    const users = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );

    const userExists = users.some(
      (user) =>
        user.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (!userExists) {
      alert("This email is not registered!");
      return;
    }

    setVerified(true);
  };

  // Update New Password
  const handlePasswordUpdate = (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );

    const updatedUsers = users.map((user) =>
      user.email.toLowerCase() === email.trim().toLowerCase()
        ? { ...user, password: newPassword }
        : user
    );

    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(updatedUsers)
    );

    alert("Password Updated Successfully!");

    setVerified(false);
    setSubmitted(true);
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <Header />

      <div className="forgot-page">
        <div className="forgot-container">

          <div className="forgot-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              width="42"
              height="42"
            >
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </div>

          {/* STEP 1: Create New Password */}
          {verified ? (
            <div className="forgot-success">

              <h1>Create New Password</h1>

              <p className="forgot-description">
                Enter your new password below.
              </p>

              <form onSubmit={handlePasswordUpdate}>

                <div className="forgot-field">
                  <label>New Password</label>

                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    minLength="6"
                    required
                  />
                </div>

                <div className="forgot-field">
                  <label>Confirm New Password</label>

                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="forgot-submit-btn">
                  Update Password →
                </button>

              </form>

              <Link to="/login" className="forgot-back-link">
                ← Back to Login
              </Link>

            </div>

          ) : submitted ? (

            /* STEP 3: Password Updated */
            <div className="forgot-success">

              <h1>Password Updated!</h1>

              <p>Your password has been changed successfully.</p>

              <Link to="/login" className="forgot-back-link">
                Login Now →
              </Link>

            </div>

          ) : (

            /* STEP 1: Enter Registered Email */
            <>
              <span className="forgot-tag">ACCOUNT RECOVERY</span>

              <h1>Forgot Password?</h1>

              <p className="forgot-description">
                Don't worry! Enter your registered email address
                and we'll help you reset your password.
              </p>

              <form onSubmit={handleSubmit}>

                <div className="forgot-field">
                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="forgot-submit-btn">
                  Send Reset Link →
                </button>

              </form>

              <Link to="/login" className="forgot-back-link">
                ← Back to Login
              </Link>
            </>

          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default ForgotPassword;
