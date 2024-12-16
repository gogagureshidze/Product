'use client'

import React, { useState } from "react";
import "./footer.css"

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [noAlert, setNoAlert] = useState(false);

  const handleSubscribe = () => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
    } else {
      setNoAlert(true);  
      setEmail(""); // Clear invalid email
      setTimeout(() => setNoAlert(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="newsletter">
        <div className="newsletter-1">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter and get 20% off your first purchase</p>
        </div>
        <div className="subscription">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
          <button onClick={handleSubscribe}>SUBSCRIBE</button>
        </div>
      </div>
        {showAlert && (
            <div className="alert">
                <p>Pin code is sent on this Gmail <br /> waiting for validation</p>
                <a href=""><i>more info</i></a>
            
            </div>
        
      )}

        {noAlert && (
        <div className="alertn">
            <p>Email is not valid</p>
            <a href=""><i>more info</i></a>
        </div>
      )}
      <div className="footer-links">
        <ul>
          <li>Blog</li>
          <li>FAQs</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>©2024 vai axla mongo maq dasakavshirebeli</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-skype"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
