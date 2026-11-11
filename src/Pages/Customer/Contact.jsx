
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaHeadset,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      value: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      value: "support@tiffinwala.com",
      link: "mailto:support@tiffinwala.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      value: "Varanasi, Uttar Pradesh, India",
      link: null
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      value: "Monday - Sunday, 9 AM - 9 PM",
      link: null
    }
  ];

  return (
    <>
      <Header />

      <main className="contact-page">

        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-content">
            <span className="contact-tag">GET IN TOUCH</span>

            <h1>
              We'd Love To
              <span> Hear From You!</span>
            </h1>

            <p>
              Have a question, suggestion or need help with your
              tiffin order? Our team is here to help you.
            </p>

            <div className="contact-hero-note">
              <FaHeadset />
              <span>We're always happy to help you!</span>
            </div>
          </div>

          <div className="contact-hero-image">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900"
              alt="Customer support team"
            />
          </div>
        </section>

        {/* Contact Main Section */}
        <section className="contact-main">

          {/* Contact Information */}
          <div className="contact-info">
            <span className="contact-tag">CONTACT INFORMATION</span>

            <h2>Let's Connect Together</h2>

            <p className="contact-info-description">
              Feel free to contact us. Whether you are a customer
              or a home chef, we would love to hear from you.
            </p>

            <div className="contact-details-list">
              {contactDetails.map((item, index) => (
                <div className="contact-detail-item" key={index}>
                  <div className="contact-detail-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h3>{item.title}</h3>

                    {item.link ? (
                      <a href={item.link}>{item.value}</a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <h3>Follow Us</h3>

              <div className="contact-social-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>

                <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="contact-form-heading">
              <h2>Send Us A Message</h2>
              <p>Fill out the form below and tell us how we can help.</p>
            </div>

            {submitted && (
              <div className="contact-success">
                Thank you! Your message has been submitted successfully.
                <br />
                Note: This is a frontend demo. Your message has not been
                sent to a server yet.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">

              <div className="contact-form-row">
                <div className="contact-input-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-input-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter 10 digit mobile number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label>Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="Order Related">Order Related</option>
                    <option value="Tiffin Provider">Tiffin Provider</option>
                    <option value="Payment Issue">Payment Issue</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="contact-input-group">
                <label>Your Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="contact-location">
          <div className="contact-section-heading">
            <span className="contact-tag">FIND US</span>
            <h2>Our Location</h2>
            <p>We are here to make your food experience better.</p>
          </div>

          <div className="contact-map">
            <iframe
              title="TiffinWala Location"
              src="https://www.google.com/maps?q=Varanasi,Uttar%20Pradesh,India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="contact-faq">
          <div className="contact-section-heading">
            <span className="contact-tag">NEED HELP?</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="contact-faq-grid">
            <div className="contact-faq-card">
              <h3>How can I place a tiffin order?</h3>
              <p>
                Visit our Explore Tiffins page, choose your favourite
                meal and follow the checkout process.
              </p>
            </div>

            <div className="contact-faq-card">
              <h3>How can I become a food provider?</h3>
              <p>
                Contact our support team to learn about joining
                TiffinWala as a home chef or food provider.
              </p>
            </div>

            <div className="contact-faq-card">
              <h3>How can I get help with my order?</h3>
              <p>
                You can contact our support team and share your
                order details for assistance.
              </p>
            </div>

            <div className="contact-faq-card">
              <h3>Can I share feedback?</h3>
              <p>
                Absolutely! Use the contact form and select
                Feedback as your subject.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="contact-bottom-cta">
          <h2>Hungry For Something Delicious?</h2>
          <p>Explore homemade meals and order your favourite tiffin today.</p>

          <Link to="/explore-tiffin">
            Explore Tiffins
          </Link>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Contact;
