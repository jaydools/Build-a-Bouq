import "./AddToCart.scss";
import cartimg from "../../Assets/Images/cart.png";
import success from "../../Assets/Images/success.gif";
import React, { useState } from "react";
import { useCart } from "../CartContext/CartContext";

function AddToCart({ selections }) {
    const [isOpen, setIsOpen] = useState(false);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        // Add items to the cart
        addToCart(selections);

        // Toggle button state
        setIsOpen(!isOpen);
    };

    return (
        <div className="cart-button">
            <button onClick={handleAddToCart} className="cart-button__button--2">
                {isOpen ? (
                    <img src={success} alt="success" className="cart-button__img--2" />
                ) : (
                    <img src={cartimg} alt="add to cart" className="cart-button__img--2" />
                )}
                <span className="cart-button__add-cart">Order Now</span>
            </button>
        </div>
    );
}

export default AddToCart;
