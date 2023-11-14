import React from "react";
import "./Header.scss";

function Header() {
    return (
        <nav className="navbar">
            <div className="leftside">
                <p className="leftside__logo">Logo</p>
            </div>
            <div className="rightside">
                <ul className="rightside__list-parent">
                    <li className="rightside__list-item">Cart</li> {/* "Link to" this part */}
                    <li className="rightside__list-item">About Us</li>
                    <li className="rightside__list-item">Login</li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
