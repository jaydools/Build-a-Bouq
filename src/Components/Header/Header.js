import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar">
            <div className="leftside">
                <p className="leftside__logo">Logo</p>
            </div>
            <div className="rightside">
                <ul className="rightside__list-parent">
                    <li className="rightside__list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="rightside__list-item">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="rightside__list-item">
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li className="rightside__list-item">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
