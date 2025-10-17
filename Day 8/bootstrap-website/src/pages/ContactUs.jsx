import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

function ContactUs() {
    const handleCall = () => {
        alert("Calling ParvaM Support Team...");
    };
    return (
        <div className="text-center">
            <h1 className="text-success">Contact Us Page</h1>
            <Hero 
            title = "Welcome to Contact Us Page"
            buttonText = "Call Us"
            buttonColor = "outline-success"
            onButtonClick = {handleCall}
            paraSize = "font-size-3"
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

export default ContactUs;