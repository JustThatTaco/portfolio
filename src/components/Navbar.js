import React from 'react';
import './Navbar.css'; // Import the CSS file with the styles

const Navbar = () => {
  return (
    <div>
    <nav>
      <ul className="navbar">
        <li className="navbar-item">
          <a href= '/portfolio/#/' className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="/portfolio/#/resume" className="navbar-link">
            Resume
          </a>
        </li>
        <li className="navbar-item">
          <a href="/portfolio/#/projects" className="navbar-link">
            Projects
          </a>
        </li>
        <li className="navbar-item">
          <a href="/portfolio/#/blog" className="navbar-link">
            Blog?
          </a>
        </li>
        <li className="last-navbar-item">
          <a href="/portfolio/#/notes" className="navbar-link">
            Notes
          </a>
        </li>
      </ul>
    </nav>
    <div className ="line"></div>
    </div>
  );
};

export default Navbar;