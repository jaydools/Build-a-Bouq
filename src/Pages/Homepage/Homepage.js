import React from "react";
import "./Homepage.scss";
import Builder from "../../Components/Builder/Builder";
import Perks from "../../Components/Perks/Perks";

function Homepage() {
    return (
        <div className="homepage-container">
            <Builder />
            <Perks />
        </div>
    );
}

export default Homepage;
