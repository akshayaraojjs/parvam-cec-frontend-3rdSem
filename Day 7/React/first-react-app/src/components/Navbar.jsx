import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="nav-link">Welcome</a> 
            <a href="/about-us" className="nav-link">About Us</a> 
            <a href="/thank-you" className="nav-link">ThankYou</a> 
        </nav>
    );
}

export default Navbar;