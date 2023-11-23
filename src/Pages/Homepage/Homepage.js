import React from "react";
import "./Homepage.scss";
import Builder from "../../Components/Builder/Builder";
import Perks from "../../Components/Perks/Perks";
import Hero from "../../Components/Hero/Hero";

function Homepage() {
    return (
        <div className="homepage-container">
            <Hero />
            <Builder />
            <Perks />
        </div>
    );
}

export default Homepage;
