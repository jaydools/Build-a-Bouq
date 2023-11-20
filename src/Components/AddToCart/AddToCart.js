import "./AddToCart.scss";
import cart from "../../Assets/Images/cart.png";
import success from "../../Assets/Images/success.gif";

import React, { useState } from "react";

function AddToCart() {
    const [isOpen, setIsOpen] = useState(false);
    const [foliageItems, setFoliageItems] = useState([]); // State to store foliage data
    const [selectedItem, setSelectedItem] = useState(null); // State to store selected flower

    const handleItemSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false); // Close the dropdown menu upon selection
    };

    return (
        <div className="dropdown">
            <button onClick={() => setIsOpen(!isOpen)} className="dropdown__button--2">
                {isOpen ? (
                    <img src={success} alt="sucess" className="dropdown__img--2" />
                ) : (
                    <img src={cart} alt="add to cart" className="dropdown__img--2" />
                )}
                <span className="dropdown__add-cart">Add To Cart</span>
            </button>
        </div>
    );
}

export default AddToCart;
