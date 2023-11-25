import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Cart from "./Pages/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import About from "./Pages/AboutUs/About";
import { CartProvider } from "./Components/CartContext/CartContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Footer from "./Components/Footer/Footer";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function App() {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Homepage />} />

                            <Route path="/cart" element={<Cart />} />

                            <Route path="/about-us" element={<About />} />
                        </Routes>
                    </Elements>
                </CartProvider>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
