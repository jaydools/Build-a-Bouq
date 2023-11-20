import "./AddToCart.scss";
import cart from "../../Assets/Images/cart.png";
import success from "../../Assets/Images/success.gif";

import React, { useState } from "react";

function AddToCart() {
    const [isOpen, setIsOpen] = useState(false);
    const [foliageItems, setFoliageItems] = useState([]); // State to store foliage data
    const [selectedItem, setSelectedItem] = useState(null); // State to store selected flower

    const handleItemSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false); // Close the dropdown menu upon selection
    };

    return (
        <div className="dropdown">
            <button onClick={() => setIsOpen(!isOpen)} className="dropdown__button--2">
                {isOpen ? (
                    <img src={success} alt="sucess" className="dropdown__img--2" />
                ) : (
                    <img src={cart} alt="add to cart" className="dropdown__img--2" />
                )}
                <span className="dropdown__add-cart">
                    {selectedItem ? selectedItem.item_name : "Add To Cart"}
                </span>
            </button>
            {isOpen && (
                <div className="dropdown__content">
                    <ul className="dropdown__list">
                        {/* Map over the foliageItems and create list items for each */}
                        {foliageItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => handleItemSelect(item)}
                                className={`dropdown__item ${
                                    selectedItem === item ? "selected" : ""
                                }`}
                            >
                                {selectedItem === item ? selectedItem.item_name : item.item_name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default AddToCart;
