import React from 'react';
import './navbar.css'; // Use relative path for importing CSS

const Navbar = ({ role }) => {
  return (
    <nav className={`navbar ${role}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">SEHAT</a>
        </div>
        <ul className="navbar-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
