import React from "react";
import "./Cart.scss";
import { useCart } from "../../Components/CartContext/CartContext";

function Cart() {
    const { cartItems, removeFromCart } = useCart(); // get cart items from state

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

            {cartItems.map((selections, index) => {
                // Extract individual selection prices
                const { focal, secondary, foliage, container } = selections;

                // Calculate prices for each selection
                const primaryPrice = getPrice(focal);
                const secondaryPrice = getPrice(secondary);
                const foliagePrice = getPrice(foliage);
                const containerPrice = getPrice(container);
                const totalSelectionPrice =
                    primaryPrice + secondaryPrice + foliagePrice + containerPrice;

                return (
                    <div className="selections">
                        <div key={index} className="cart-item">
                            <p className="cart-items__header">Item: Custom Bouquet {index + 1}</p>
                            {focal && <p>Primary: ${primaryPrice.toFixed(2)}</p>}
                            {secondary && <p>Secondary: ${secondaryPrice.toFixed(2)}</p>}
                            {foliage && <p>Foliage: ${foliagePrice.toFixed(2)}</p>}
                            {container && <p>Container: ${containerPrice.toFixed(2)}</p>}
                            <p className="cart-items__total">
                                Total: ${totalSelectionPrice.toFixed(2)}
                            </p>
                            <button
                                className="cart-items__delete"
                                onClick={() => removeFromCart(index)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                );
            })}

            <div className="cart-total">
                <h3>
                    Total Cart Price: $
                    {cartItems
                        .reduce((total, selections) => {
                            const { focal, secondary, foliage, container } = selections;
                            return (
                                total +
                                getPrice(focal) +
                                getPrice(secondary) +
                                getPrice(foliage) +
                                getPrice(container)
                            );
                        }, 0)
                        .toFixed(2)}
                </h3>
            </div>
        </div>
    );
}

export default Cart;
