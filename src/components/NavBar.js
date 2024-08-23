import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo"><a href="#home">InventoryLogo</a></h1>
      <ul className="nav-links">
        <li><a href="#home">Features</a></li>
        <li><a href="#signIn">Add Organization</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#signIn">signIn</a></li>
        <li><a href="#signUp">signUp</a></li>

      </ul>
    </nav>
  );
};

export default NavBar;
