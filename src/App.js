import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Cart from "./Pages/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import About from "./Pages/AboutUs/About";
import { CartProvider } from "./Components/CartContext/CartContext";

import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/about-us" element={<About />} />
                    </Routes>
                </CartProvider>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
