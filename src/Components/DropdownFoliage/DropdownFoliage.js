import "./DropdownFoliage.scss";
import React, { useEffect, useState } from "react";
import upArrow from "../../Assets/Images/up-arrow.svg";
import downArrow from "../../Assets/Images/down-arrow.svg";
import axios from "axios";
import { useImages } from "../../Components/Context/ImageContext";

function DropdownFoliage({ category, selected, onSelectionChange, items, setImages }) {
    const [isOpen, setIsOpen] = useState(false);
    const [foliageItems, setFoliageItems] = useState([]); // State to store foliage data
    const [selectedItem, setSelectedItem] = useState(null); // State to store selected flower

    const handleItemSelect = (item) => {
        onSelectionChange(category, item);
        setIsOpen(false);
        setImages((prevImages) => ({
            ...prevImages,
            [category]: item.images,
        }));
    };

    return (
        <div className="dropdown">
            <button onClick={() => setIsOpen(!isOpen)} className="dropdown__button">
                {isOpen ? (
                    <img src={upArrow} alt="Dropdown Arrow" className="dropdown__img" />
                ) : (
                    <img src={downArrow} alt="Dropdown Arrow" className="dropdown__img" />
                )}
                <span className="dropdown__names">
                    {selected ? selected.item_name : "Select an item"}
                </span>
            </button>
            {isOpen && (
                <div className="dropdown__content">
                    <ul className="dropdown__list">
                        {foliageItems.map((foliageItems) => (
                            <li
                                key={item.id}
                                onClick={() => handleItemSelect(item)}
                                className={`dropdown__item ${selected === item ? "selected" : ""}`}
                            >
                                {foliageItems.item_name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropdownFoliage;
