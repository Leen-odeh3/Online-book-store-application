import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-component">
      <div className="foooooter">
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
      {/* -------------------------------- */}

      <div className="footer-wrapper">
        <div className="footer-links">
          <div className="footer-title">Usefull Links </div>
          <div className="items-link">
            <ul>
              <li>Home</li>
              <li>Authors</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="footer-info">
          <div className="footer-title">Contact Information</div>
          <div className="items-link-contact">
            <ul>
              <li>
                <i class="bi bi-geo-alt-fill"></i>
                Tulkarm, Palestine
              </li>
              <li>
                <i class="bi bi-telephone-fill"></i>
                123-456-789
              </li>
              <li>
                <i class="bi bi-envelope"></i>
                leenodeh287@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-aboutUs">
          <div className="footer-title">About Us</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsam
            non vitae similique ex possimus quia aliquid est nemo, commodi
            dolores? Temporibus suscipit debitis dicta perferendis, soluta
            tenetur itaque vel!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
