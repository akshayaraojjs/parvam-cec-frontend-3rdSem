import React from "react";

function Cards(props) {
    const {
        cardHeading = "Card Heading",
        cardTitle = "Card Title",
        titleColor = "danger",
        cardText = "Card Description",
        textSize = "font-size-4",
        textColor = "primary",
        linkContent = "Know More",
        buttonColor = "dark"
    } = props;
    return (
        <div className="card">
            <div className={`card-header bg-${titleColor} text-light`}>
                {cardHeading}
            </div>
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className={`card-text text-${textColor} ${textSize}`}>{cardText}</p>
                <a href="#" className={`btn btn-${buttonColor}`}>{linkContent}</a>
            </div>
        </div>
    );
}

export default Cards;