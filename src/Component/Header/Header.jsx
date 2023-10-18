import React, { useState } from "react";
import './Header.css'

const Header = () => {
    const [toggle,settoggle]=useState(false);
  return (
    <div className="header">
      <div className="top-header">
        <div className="nav-icon" onClick={()=>{settoggle(!toggle)}}> <i class="bi bi-list"></i></div>
        <div className="top-header-phone">
          <i className="bi bi-telephone-fill"></i>
          123-456-789 101
        </div>
        <div className="top-header-title">Welcome To Online Book Store </div>
        <div className="top-header-login">
          <i class="bi bi-person-fill"></i>
          Login
        </div>
      </div>

      <div className="middle-header">
        <div className="middle-header-logo">
          <b>Book</b>
          <i class="bi bi-book"></i>
          <b>Store</b>
        </div>
        <div className="middle-header-search">
          <input
            type="search"
            placeholder="Search in book store ... "
            className="input-search"
          />
          <i class="bi bi-search"></i>
        </div>
        <div className="middle-header-icon">
          <i class="bi bi-cart3"></i>
        </div>
      </div>

      <div className="header-navbar" style={{left: toggle&& "0"}}>

        <ul className="navbar-links">
          <li className="navbar-link"> Home</li>
          <li className="navbar-link">Authors</li>
          <li className="navbar-link">About Us </li>
          <li className="navbar-link">Contact Us </li>
          <li className="navbar-link">Register </li>
        </ul>

      </div>
    </div>
  );
};

export default Header;
