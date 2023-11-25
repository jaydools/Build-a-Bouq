import React from "react";
import "./Cart.scss";
import { useCart } from "../../Components/CartContext/CartContext";

function Cart() {
    const { cartItems } = useCart(); // get cart items from state

    const selections = cartItems[0] || {}; /* works with only one selection in cart */

    // Extract individual selection prices
    const { focal, secondary, foliage, container } = selections;

    // Function to calculate the total price for each category
    const getPrice = (item) => {
        return item ? item.price : 0;
    };

    // Get prices
    const primaryPrice = getPrice(focal);
    const secondaryPrice = getPrice(secondary);
    const foliagePrice = getPrice(foliage);
    const containerPrice = getPrice(container);

    // Calculate total price
    const totalPrice = primaryPrice + secondaryPrice + foliagePrice + containerPrice;

    return (
        <div className="cart-container">
            <h2>Cart Items</h2>

            <div className="cart-item">
                <p>Item: Custom Bouquet</p>
                <p>Primary: ${primaryPrice.toFixed(2)}</p>
                <p>Secondary: ${secondaryPrice.toFixed(2)}</p>
                <p>Foliage: ${foliagePrice.toFixed(2)}</p>
                <p>Container: ${containerPrice.toFixed(2)}</p>
            </div>

            <div className="cart-total">
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>
        </div>
    );
}
export default Cart;
