import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Cart from "./Pages/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import About from "./Pages/AboutUs/About";
import Login from "./Pages/Login/Login";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/login" element={<Login />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
