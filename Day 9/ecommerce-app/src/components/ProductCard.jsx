import React from "react";

function ProductCard() {
    return (
        <div className="card">
            {/* For self-closing tags: we need to end the tag by /
            Ex: <img> => <img />, <br> => <br /> */}
            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6273/6273508_sd.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Laptop</h5>
                <p className="card-text">Superfast Laptop with i7 13th gen processor</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
        </div>
    );
}

export default ProductCard;