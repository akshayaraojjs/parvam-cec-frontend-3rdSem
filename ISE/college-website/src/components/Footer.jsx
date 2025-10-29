import React from "react";

function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="col-md-4">
                    <img src="/images/cec.webp" alt="" />
                    <h4>City Engineering College</h4>
                    <h6>Address:</h6>
                    <p>Doddakallasandra, Off Kanakapura Road, Next to Gokulam Apartment, Bangalore - 560 062</p>
                </div>
                <div className="custom-links col-md-4">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Departments</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    <h5>Social Media Links</h5>
                    <ul className="social-media">
                        <li>
                            <a href="https://facebook.com"><i class="bi bi-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://whatsapp.com"><i class="bi bi-whatsapp"></i></a>
                        </li>
                        <li>
                            <a href="https://instagram.com"><i class="bi bi-instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://linkedin.com"><i class="bi bi-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>Affliations</h4>
                    <ul>
                        <li>
                            <p className="paragraph">For Admissions:</p>
                            <ul>
                                <li>+91 9880411361</li>
                                <li>+91 9880411364</li>
                                <li>+91 7349032929</li>
                            </ul>
                        </li>
                        <li>
                            <p className="paragraph">Approvals and Affilation</p>
                            <ol>
                                <li>Approved by AICTE, New Delhi</li>
                                <li>Affilated to VTU, Belagavi.</li>
                            </ol>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;