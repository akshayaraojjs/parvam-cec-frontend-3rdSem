import React from "react";

function MenuBar() {
    return (
        // <h1>Hello World</h1>
        // We are grouping the ul in a nav tag
        // Because We need to pass the data in a group
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about-us">About Us</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/contact-us">Contact Us</a>
                </li>
            </ul>
        </nav>
    );
}

export default MenuBar;