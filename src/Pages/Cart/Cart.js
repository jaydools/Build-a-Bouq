import React from "react";
import "./Cart.scss";
import { useCart } from "../../Components/CartContext/CartContext";
import TempCheckout from "../../Components/TempCheckout/TempCheckout";

function Cart() {
    const { cartItems, removeFromCart } = useCart();

    const selections = cartItems[0] || {};

    const { focal, secondary, foliage, container } = selections;

    const getPrice = (item) => {
        return item ? item.price : 0;
    };

    const primaryPrice = getPrice(focal);
    const secondaryPrice = getPrice(secondary);
    const foliagePrice = getPrice(foliage);
    const containerPrice = getPrice(container);

    const totalPrice = primaryPrice + secondaryPrice + foliagePrice + containerPrice;

    return (
        <div className="cart-container">
            <h2 className="cart-container-header">Cart Items</h2>

            {cartItems.map((selections, index) => {
                const { focal, secondary, foliage, container } = selections;

                const primaryPrice = getPrice(focal);
                const secondaryPrice = getPrice(secondary);
                const foliagePrice = getPrice(foliage);
                const containerPrice = getPrice(container);
                const totalSelectionPrice =
                    primaryPrice + secondaryPrice + foliagePrice + containerPrice;

                return (
                    <div className="selections">
                        <div key={index} className="cart-item">
                            <p className="cart-items__header">Custom Bouquet {index + 1}</p>
                            {focal && (
                                <p>
                                    Primary: {focal.item_name} - ${primaryPrice.toFixed(2)}
                                </p>
                            )}
                            {secondary && (
                                <p>
                                    Secondary: {secondary.item_name} - ${secondaryPrice.toFixed(2)}
                                </p>
                            )}
                            {foliage && (
                                <p>
                                    Foliage: {foliage.item_name} - ${foliagePrice.toFixed(2)}
                                </p>
                            )}
                            {container && (
                                <p>
                                    Container: {container.item_name} - ${containerPrice.toFixed(2)}
                                </p>
                            )}
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
            <div className="temp-checkout">
                <TempCheckout />
            </div>
        </div>
    );
}

export default Cart;
