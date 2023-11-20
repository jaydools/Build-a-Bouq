import "./Dropdown.scss";
import React, { useEffect, useState } from "react";
import upArrow from "../../Assets/Images/up-arrow.svg";
import downArrow from "../../Assets/Images/down-arrow.svg";
import axios from "axios";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [primaryItems, setPrimaryItems] = useState([]); // State to store primary data
    const [selectedItem, setSelectedItem] = useState(null); // State to store selected flower

    const handleItemSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false); // Close the dropdown menu upon selection
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_URL}/api/inventories`
                );

                // Filter items with category "primary"
                const primaryItemsFiltered = response.data.filter(
                    (item) => item.category === "primary" && item.quantity > 0
                );

                setPrimaryItems(primaryItemsFiltered); // Set the retrieved items in state
            } catch (error) {
                console.error("Error fetching primary items: ", error);
            }
        };

        // Fetch all items when the component mounts
        fetchItems();
    }, []);

    return (
        <div className="dropdown">
            <button onClick={() => setIsOpen(!isOpen)} className="dropdown__button">
                {isOpen ? (
                    <img src={upArrow} alt="Dropdown Arrow" className="dropdown__img" />
                ) : (
                    <img src={downArrow} alt="Dropdown Arrow" className="dropdown__img" />
                )}
                <span className="dropdown__names">
                    {selectedItem ? selectedItem.item_name : "Select an item"}
                </span>
            </button>
            {isOpen && (
                <div className="dropdown__content">
                    <ul className="dropdown__list">
                        {/* Map over the primaryItems and create list items for each */}
                        {primaryItems.map((item) => (
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

export default Dropdown;
