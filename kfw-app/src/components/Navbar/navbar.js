import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './navbar.css';

const NavBar = () => {
  return (
    <div className='text-light sticky-nav-bar'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 position-sticky">
        <Link className="navbar-brand text-light" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse nav-bar-text-elements" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-light">
            <li className="nav-item active nav-bar-spacing">
              <Link className="nav-link text-light" to="/shopping">Shop</Link>
            </li>
            <li className="nav-item active nav-bar-spacing">
              <Link className="nav-link text-light" to="/tastings">Wine Tastings</Link>
            </li>
            <li className="nav-item active nav-bar-spacing">
              <Link className="nav-link text-light" to="/story">Our Story</Link>
            </li>
            <li className="nav-item nav-bar-spacing">
              <Link className="nav-link text-light" to="/newsletter">Newsletter</Link>
            </li>
            <li className="nav-item nav-bar-spacing">
              <Link className="nav-link text-light" to="/international">International</Link>
            </li>
            <li className="nav-item nav-bar-spacing">
              <Link className="nav-link text-light" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item nav-bar-spacing">
              <Link className="nav-link text-light" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;