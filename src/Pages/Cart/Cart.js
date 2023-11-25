import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { useCart } from "../../Components/CartContext/CartContext";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};

function Cart() {
    const { cartItems, removeFromCart } = useCart();
    const [clientSecret, setClientSecret] = useState(null);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const fetchClientSecret = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/create-payment-intent`
            );
            const data = await response.json();
            setClientSecret(data.clientSecret);
        };

        fetchClientSecret();
    }, []);

    const getPrice = (item) => (item ? item.price : 0);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.confirmPayment({});

        if (result.error) {
        } else {
        }
    };

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
                    <div key={index} className="selections">
                        <div className="cart-item">
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
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </div>
                    </div>
                );
            })}

            <div className="cart-total">
                <h3>
                    Total Cart Price: $
                    {cartItems
                        .reduce((total, selections) => {
                            return (
                                total +
                                getPrice(selections.focal) +
                                getPrice(selections.secondary) +
                                getPrice(selections.foliage) +
                                getPrice(selections.container)
                            );
                        }, 0)
                        .toFixed(2)}
                </h3>
            </div>

            {clientSecret && (
                <form onSubmit={handleSubmit}>
                    <PaymentElement options={CARD_ELEMENT_OPTIONS} />
                    <button disabled={!stripe}>Submit</button>
                </form>
            )}
        </div>
    );
}

export default Cart;
