import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-component">
      <div className="desc-footer">Follow Us on social media </div>
      <div className="footer-icons">
        <div className="social-icon">
     
          <i class="bi bi-instagram insta"></i>
        </div>

        <div className="social-icon">
       
          <i class="bi bi-telegram telegram"></i>
        </div>

        <div className="social-icon">
          <i class="bi bi-facebook facebook"></i>
        </div>

        <div className="social-icon">
          <i class="bi bi-youtube youtube"></i>{" "}
        </div>

        <div className="social-icon">
          <i class="bi bi-twitter-x twitter"></i>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
