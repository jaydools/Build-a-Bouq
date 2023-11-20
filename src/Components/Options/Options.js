import React from "react";
import "./Options.scss";
import Dropdown from "../Dropdown/Dropdown";

function Options() {
    return (
        <div className="option-container">
            <div className="selector">
                <div className="dropdown-one">
                    Focal <Dropdown />
                </div>
                <div className="dropdown-two">
                    Secondary <Dropdown />
                </div>
                <div className="dropdown-three">
                    Foliage <Dropdown />
                </div>
                <div className="dropdown-four">
                    Container <Dropdown />
                </div>
                <div className="dropdown-five">
                    Add To Cart <Dropdown />
                </div>
                <div className="total">TOTAL:</div>{" "}
                {/*  Insert Order Value In Here ----------------------// */}
            </div>
        </div>
    );
}

export default Options;
