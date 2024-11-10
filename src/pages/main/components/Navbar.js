import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="descarga__4_-removebg-preview.png" alt="BMW Logo" />
      </Link>
      <ul className="navbar-menu">
        <li><Link to="/">Modelos</Link></li>
        <li><Link to="/models">Eléctrico</Link></li>
        <li><Link to="/about">Más BMW</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;