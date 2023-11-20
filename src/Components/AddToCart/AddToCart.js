import "./AddToCart.scss";
import cart from "../../Assets/Images/cart.png";
import success from "../../Assets/Images/success.gif";

import React, { useState } from "react";

function AddToCart() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null); // will need to add state here to add all items to cart

    const handleItemSelect = (item) => {
        setSelectedItem(item);
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
