import React from "react";

function Footer() {
    return (
        <footer className="p-5">
            <div className="row">
                <div className="col-md-4">
                    <img className="mb-3" src="/images/parvam_logo_white.png" alt="" width="100px" />
                    <h5>ParvaM Consul-tech Pvt. Ltd.</h5>
                    <h6>Next is Now</h6>
                </div>
                <div className="col-md-4">
                    <h4>Quick Links</h4>
                    <ul className="links">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>Technologies</h4>
                    <ul className="links">
                        <li>
                            <a href="#">Web Design & Development</a>
                        </li>
                        <li>
                            <a href="#">Java - Full Stack</a>
                        </li>
                        <li>
                            <a href="#">Python - Full Stack</a>
                        </li>
                        <li>
                            <a href="#">MERN Stack</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;