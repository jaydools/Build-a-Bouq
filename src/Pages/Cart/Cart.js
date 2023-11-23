import React, { useState } from "react";
import "./Cart.scss";
import Dropdown from "../../Components/Dropdown/Dropdown";

function Cart() {
    const [cartItems, setCartItems] = useState([]); // State to manage cart items

    // Function to add an item to the cart
    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <div>
            <Dropdown addItemToCart={addItemToCart} /> {/* Pass the addItemToCart function */}
            <Cart cartItems={cartItems} /> {/* Pass the cartItems to the Cart component */}
        </div>
    );
}

export default Cart;
