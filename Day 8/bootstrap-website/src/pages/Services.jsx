import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

function Services() {
    const handleReadMore = () => {
        alert("We work on CRM, ERP applications...");
    };
    return (
        <div className="text-center">
            <h1 className="text-primary">Services Page</h1>
            <Hero 
            title = "Welcome to Services Page"
            subTitle = "We prioritize the Customer Satisfaction."
            paraSize = "font-size-4"
            buttonText = "Read More"
            buttonColor = "outline-secondary"
            onButtonClick = {handleReadMore}
            />
            <div className="row my-3">
                <div className="col-md-4">
                    <Cards />
                </div>
                <div className="col-md-4">
                    <Cards />
                </div>
                <div className="col-md-4">
                    <Cards />
                </div>
            </div>
        </div>
    );
}

export default Services;