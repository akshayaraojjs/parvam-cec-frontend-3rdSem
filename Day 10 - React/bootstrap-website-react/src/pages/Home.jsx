import React from "react";
import ServiceCard from "../components/ServiceCard";

function Home() {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/app-dev.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/crm-dev.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/erp-dev.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/training.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <section className="about-us my-5 d-flex justify-content-center align-items-center flex-column">
                <div className="section-heading text-center">
                    <h1>About Us</h1>
                </div>
                <h3 className="text-center"><span className="orange-text">Who</span> We Are</h3>
                <p className="my-5">PARVAM was founded with a passion in providing " Next Is Now " IT Solutions by a team of folks from diverse platforms of corporate world in Chikkabanavara, Bangalore with future focused intention. We are committed in providing customized solutions with future focus by implementing cutting-edge technologies. Our expert team deliver services with a competitive edge by implementing latest trending technology.</p>
                <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        {/* Copy this block */}
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title custom-title"><span className="orange-text">OUR</span> MOTTO</h5>
                                <p className="card-text">We believe in "Next Is Now" adoption in the business which we are into and our priority is implementing Next-Generation technology.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title custom-title"><span className="orange-text">OUR</span> FOCUS</h5>
                                <p className="card-text">We provide quality business and technology services which we emphasize on providing appropriate solutions based on customer needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title custom-title"><span className="orange-text">OUR</span> COMMITMENT</h5>
                                <p className="card-text">We commit to our clients 24/7 Support with apt solutions based on the requirements and needs by our customer support team on time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title custom-title"><span className="orange-text">OUR</span> PASSION</h5>
                                <p className="card-text">ParvaM will attain new heights in the business which we are into by staying ahead of competitor's progress and innovation never ends.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 mt-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title custom-title"><span className="orange-text">OUR</span> TEAM</h5>
                                <p className="card-text">We have a well experienced team with innovative ideas who are able to deliver customized business solutions that perfectly suit customer's requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-us my-5 d-flex justify-content-center align-items-center flex-column">
                <div className="section-heading text-center">
                    <h1>Services</h1>
                </div>
                <h3 className="text-center"><span className="orange-text">What</span> We Do</h3>
                <div className="row">
                    <div className="col-md-6">
                        <ServiceCard
                            image="/images/erp-dev.jpg"
                            title="ERP"
                            description="We help customers to manage the Company Resources for the fruitful development."
                        />
                    </div>
                    <div className="col-md-6">
                        <ServiceCard
                            image="/images/crm-dev.jpg"
                            title="CRM"
                            description="We help customers to manage the Customer Relationships for company growth"
                        />
                    </div>
                    <div className="col-md-6">
                        <ServiceCard
                            image="/images/app-dev.jpg"
                            title="Application Development"
                            description="We will develop the apps based on the customer's requirements"
                        />
                    </div>
                    <div className="col-md-6">
                        <ServiceCard
                            image="/images/training.jpg"
                            title="Technology Trainings"
                            description="We train on Trending technologies to upskill the students for getting placed in top companies."
                        />
                    </div>
                </div>
            </section>
            <section className="about-us my-5 d-flex justify-content-center align-items-center flex-column">
                <div className="section-heading text-center">
                    <h1>Contact Us</h1>
                </div>
                <h3 className="text-center"><span className="orange-text">How</span> to Reach</h3>
                <form className="row border border-dark w-100 p-5">
                    <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.740101722122!2d77.48869465541989!3d13.0715931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae234a96354c45%3A0x42e71bb399c2a5a9!2sParvaM%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1761636701731!5m2!1sen!2sin" width="400" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-6">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name:</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address:</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email address" />
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone Number:</label>
                            <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Your Query:</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="reset" className="btn btn-danger me-2">Reset Form</button>
                        <button type="submit" className="btn btn-success">Submit Query</button>
                    </div>
                    <div className="contact-details">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <p>Contact Number:</p>
                                        <h5 className="contact-details">+91-9876543210</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <p>Email ID:</p>
                                        <h5 className="contact-details">support@parvamm.com</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <p>Address:</p>
                                        <h5 className="contact-details"> Chikkabanavara</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Home;