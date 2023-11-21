import React from "react";
import "./Perks.scss";
import showcase from "../../Assets/Images/showcase.png";

function Perks() {
    return (
        <div className="perks">
            <img className="perks__img" src={showcase} />
        </div>
    );
}

export default Perks;
