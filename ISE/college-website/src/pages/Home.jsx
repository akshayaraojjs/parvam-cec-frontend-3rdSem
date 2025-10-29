import React from "react";

function Home() {
    return (
        <div>
            <img className="img-fluid" src="/images/bg-image.jpg" alt="Background Image" />
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Where Innovation Meets Opportunity</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Join a campus that inspires creativity and critical thinking. Step into an environment where your ambitions are fueled by technology and mentorship.</p>
                    <a href="#" className="btn btn-success">View Departments ➡️</a>
                </div>
            </div>
            <div className="text-block p-3 bg-success text-center text-light">
                <p>City Engineering College Campus Tour</p>
            </div>
            <section className="about-us">
                <h1 className="text-center section-heading"><span className="split-text">About</span> Us</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img className="about-us-images" src="/images/boy.jpg" alt="" />
                        <img className="about-us-images ms-4 mt-3" src="/images/girl.jpg" alt="" />
                    </div>
                    <div className="col-md-6">

                        <p>City Engineering College (CEC), established under Jayanagar Education Society by Dr K.R Paramahamsa, Chairman in the year 2001. CEC is one of the most sought colleges by students from across the country for Engineering and Management Education. The college believe in providing a high-quality education to the prospective professionals of the country for which necessary quality bench marks have been put in place, in the areas of faculty recruitment, training and development, teaching and learning process, student’s grooming, external academic audits and feedback system for academic enhancement.</p>
                    </div>
                </div>
            </section>
            <hr />
            <section className="courses">
                <h1 className="text-center section-heading"><span className="split-text">Courses</span> Offered</h1>
                <h2>Undergraduate Programs</h2>
                <ul className="courses-list">
                    <li>
                        <a href="">B.E - Computer Science and Engineering</a>
                    </li>
                    <li>
                        <a href="">B.E - Information Science and Engineering</a>
                    </li>
                    <li>
                        <a href="">B.E - Electronics & Communication Engineering</a>
                    </li>
                    <li>
                        <a href="">B.E - Artificial Intelligence and Machine Learning</a>
                    </li>
                </ul>
                <h2 className="mt-5">Post-graduate Programs</h2>
                <ul className="courses-list">
                    <li>
                        <a href="">MBA - Master of Business Administration</a>
                    </li>
                    <li>
                        <a href="">MCA - Master of Computer Applications</a>
                    </li>
                    <li>
                        <a href="">M.Tech in CSE</a>
                    </li>
                    <li>
                        <a href="">B.E - Artificial Intelligence and Machine Learning</a>
                    </li>
                </ul>
            </section>
            <hr />
            <section className="courses">
                <h1 className="text-center section-heading"><span className="split-text">Our</span> Statistics</h1>
                <div className="row">
                    <div className="col-md-3">
                        <h4>2000+</h4>
                        <p>STRONG ALUMNI</p>
                    </div>
                    <div className="col-md-3">
                        <h4>32+</h4>
                        <p>MOUS COLLABORATIONS</p>
                    </div>
                    <div className="col-md-3">
                        <h4>2001</h4>
                        <p>ESTABLISHED</p>
                    </div>
                    <div className="col-md-3">
                        <h4>100%</h4>
                        <p>PLACEMENT SUPPORT</p>
                    </div>
                </div>
            </section>
            <hr />
            <section className="courses">
                <h1 className="text-center section-heading"><span className="split-text">Our</span> Gallery</h1>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/images/campus.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/library.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/skills.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg" className="d-block w-100" alt="..." />
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
            </section>
            <hr />
            <section className="courses">
                <h1 className="text-center section-heading"><span className="split-text">Contact</span> Us</h1>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3792993536244!2d77.54942329051157!3d12.890255891036672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3eecdc883cc1%3A0x1d44e022ac75925a!2sCity%20Engineering%20College!5e0!3m2!1sen!2sin!4v1761732238407!5m2!1sen!2sin" width="450" height="450"  loading="lazy"></iframe>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="name" className="form-label">Name:</label>
                                <input type="email" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label for="email-id" className="form-label">Email ID:</label>
                                <input type="email-id" className="form-control" id="name" placeholder="Enter your email address" />
                            </div>
                            <div className="mb-3">
                                <label for="phone" className="form-label">Phone:</label>
                                <input type="phone" className="form-control" id="name" placeholder="Enter your phone number" />
                            </div>
                            <div className="mb-3">
                                <label for="enquiry" className="form-label">Admission Enquiry</label>
                                <textarea className="form-control" id="enquiry" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-success">Enquire</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Home;