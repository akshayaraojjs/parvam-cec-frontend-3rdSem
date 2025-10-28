import React from "react";

const ServiceCard = (props) => {
    return (
        <div class="card my-3 text-center d-flex justify-content-center align-items-center shadow-sm">
            <img src={props.image} class="card-img-top service-image" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
            </div>
        </div>
    );
}

export default ServiceCard;