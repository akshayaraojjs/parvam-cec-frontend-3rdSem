import React from "react";
import ProductCard from "../components/ProductCard";

function Products() {
    return (
        <div className="products text-center my-4">
            <h3 className="text-danger">Browse our Product Catelogue</h3>
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
    );
}

export default Products;