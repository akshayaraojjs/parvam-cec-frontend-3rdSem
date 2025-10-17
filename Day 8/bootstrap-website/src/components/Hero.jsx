import React from "react";

function Hero(props) {
    const {
        title = "Welcome to our website",
        subTitle = "We are designing the website using React & Bootstrap",
        buttonText = "Learn More",
        buttonColor = "danger",
        backgroundColor = "light",
        textColor = "primary",
        centered = true,
        onButtonClick,
        paraSize = "font-size-3"
    } = props;

    const handleButtonClick = () => {
        if (onButtonClick) {
            onButtonClick();
        } else {
            alert("Button clicked!");
        }
    };

    const containerClass = `bg-${backgroundColor} text-${textColor} p-5 rounded-3 ${centered ? 'text-center' : ''}`;

    return (
        <div className={containerClass}>
            <h1 className="display-3 fw-bold">{title}</h1>
            <p className={paraSize}>{subTitle}</p>

            {buttonText && (
            <button className={`btn btn-${buttonColor} mt-3`} onClick={handleButtonClick}>{buttonText}</button>
            )}
        </div>
    );
}

export default Hero;