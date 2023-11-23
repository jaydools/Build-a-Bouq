import React from "react";
import "./hero.scss";
import hero from "../../Assets/Images/hero.png";

function Hero() {
    return (
        <div className="hero">
            <h1 className="hero__text">Build your custom bouquet below</h1>
            <img src={hero} alt="flower store" className="hero__img" />
        </div>
    );
}

export default Hero;
