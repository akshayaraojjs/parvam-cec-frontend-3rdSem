import React from "react";
import ProductCard from "../components/ProductCard";
import TestimonialCard from "../components/TestimonialCard";

function Home() {
    return (
        <div className="home text-center">
            <h1 className="text-primary">Welcome to Home Page.</h1>
            <hr />
            <div className="products my-4">
                <h3 className="text-secondary">List of Products</h3>
                <div className="row">
                    <div className="col-md-3">
                        <ProductCard />
                    </div>
                    <div className="col-md-3">
                        <ProductCard />
                    </div>
                    <div className="col-md-3">
                        <ProductCard />
                    </div>
                    <div className="col-md-3">
                        <ProductCard />
                    </div>
                </div>
            </div>
            <hr />
            <div className="testimonials my-4">
                <h3 className="text-secondary">Client Testimonials</h3>
                <TestimonialCard />
            </div>
        </div>
    );
}

export default Home;