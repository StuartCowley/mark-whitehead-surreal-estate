import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className="navbar__outer-div">
      <div className="navbar__logo-title">
        <img alt="" className="navbar__logo" />
        <div className="navbar__title">Surreal Estate</div>
      </div>
      <ul className="navbar-links">
        <li className="navbar-links__item">View Properties</li>
        <li className="navbar-links__item">Add a property</li>
      </ul>
    </div>
  );
}

export default Navbar;
