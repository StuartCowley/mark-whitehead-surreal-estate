import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar__outer-div">
      <div className="navbar__logo-title">
        <img alt="" className="navbar__logo" />
        <div className="navbar__title">Surreal Estate</div>
      </div>
      <ul className="navbar-links">
        <Link className="navbar-links__item" to="/">
          View Properties
        </Link>
        <Link to="/add-property" className="navbar-links__item">
          Add a property
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
