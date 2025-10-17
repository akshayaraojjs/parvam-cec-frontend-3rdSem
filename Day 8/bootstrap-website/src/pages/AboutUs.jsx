import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

function AboutUs() {
    const handleContactUs = () => {
        alert("Redirecting to contact us page...");
    };

    return (
        <div className="text-center">
            <h1 className="text-warning">About Us Page</h1>
            <Hero
                title="About ParvaM"
                subTitle="We are a Software Development Company, we work on client projects and specilized in ERP & CRM applications"
                buttonText="Contact Us"
                textColor = "danger"
                buttonColor="primary"
                onButtonClick={handleContactUs}
                paraSize="font-size-4"
            />

            <div className="row mt-5">
                <div className="col-md-3">
                    <Cards />
                </div>
                <div className="col-md-9">
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed magni beatae voluptates optio, amet recusandae laudantium pariatur aliquid soluta.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;