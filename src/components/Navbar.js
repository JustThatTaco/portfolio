import React from 'react';
import './Navbar.css'; // Import the CSS file with the styles

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="navbar-link">
            Resume
          </a>
        </li>
        <li className="navbar-item">
          <a href="/services" className="navbar-link">
            Projects
          </a>
        </li>
        <li className="navbar-item">
          <a href="/services" className="navbar-link">
            Blogs?
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
