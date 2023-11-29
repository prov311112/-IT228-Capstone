// Navbar.js
import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <input type="text" className="search-input" placeholder="Search..." />
            <button className="search-button">Search</button>
        </nav>
    );
}

export default Navbar;