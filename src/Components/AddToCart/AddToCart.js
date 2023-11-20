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
        <div className="cart-button">
            <button onClick={() => setIsOpen(!isOpen)} className="cart-button__button--2">
                {isOpen ? (
                    <img src={success} alt="sucess" className="cart-button__img--2" />
                ) : (
                    <img src={cart} alt="add to cart" className="cart-button__img--2" />
                )}
                <span className="cart-button__add-cart">Order Now</span>
            </button>
        </div>
    );
}

export default AddToCart;
