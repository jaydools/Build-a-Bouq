import React from "react";
import "./TempCheckout.scss";

function TempCheckout() {
    return (
        <div className="mock-payment-form">
            <h2>Mock Payment System</h2>
            <form>
                <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 1234 1234 1234" />
                </div>

                <div className="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="John Doe" />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Expiration Date</label>
                        <input type="text" placeholder="MM/YY" />
                    </div>
                    <div className="form-group">
                        <label>CVC</label>
                        <input type="text" placeholder="123" />
                    </div>
                </div>

                <button className="temp-button" type="submit">
                    Pay Now
                </button>
            </form>
        </div>
    );
}
export default TempCheckout;
