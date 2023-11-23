import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.svg";
import cartStatic from "../../Assets/Images/cart-static.png";

function Header() {
    return (
        <nav className="navbar">
            <div className="leftside">
                <p className="leftside__logo">
                    <img src={logo} alt="logo" className="logo" />
                </p>
            </div>
            <div className="rightside">
                <ul className="rightside__list-parent">
                    <li className="rightside__list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="rightside__list-item">
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li className="rightside__list-item">
                        <Link to="/cart">
                            Cart
                            <img src={cartStatic} alt="shopping cart" className="cart-static" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
