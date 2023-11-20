import React from "react";
import "./Options.scss";
import Dropdown from "../Dropdown/Dropdown";
import DropdownFoliage from "../DropdownFoliage/DropdownFoliage";
import AddToCart from "../AddToCart/AddToCart";
import DropdownContainer from "../Container/Container";

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
                    Foliage <DropdownFoliage />
                </div>
                <div className="dropdown-four">
                    Container <DropdownContainer />
                </div>
                <div className="dropdown-five">
                    Add To Cart <AddToCart />
                </div>
                <div className="total">TOTAL:</div>{" "}
                {/*  Insert Order Value In Here ----------------------// */}
            </div>
        </div>
    );
}

export default Options;
