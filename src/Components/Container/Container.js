import "./Container.scss";
import React, { useState } from "react";
import upArrow from "../../Assets/Images/up-arrow.svg";
import downArrow from "../../Assets/Images/down-arrow.svg";

function Container({ category, selected, onSelectionChange, items, setImages }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleItemSelect = (item) => {
        onSelectionChange(category, item);
        setIsOpen(false);
        setImages((prevImages) => ({
            ...prevImages,
            container: item.images,
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
                        {items.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => handleItemSelect(item)}
                                className={`dropdown__item ${selected === item ? "selected" : ""}`}
                            >
                                {item.item_name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Container;
