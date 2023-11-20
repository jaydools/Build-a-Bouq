import "./Dropdown.scss";
import React, { useEffect, useState } from "react";
import upArrow from "../../Assets/Images/up-arrow.svg";
import downArrow from "../../Assets/Images/down-arrow.svg";
import axios from "axios";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [primaryItems, setPrimaryItems] = useState([]); // State to store primary data

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/inventories/");

                // Filter items with category "primary"
                const primaryItemsFiltered = response.data.filter(
                    (item) => item.category === "primary"
                );

                // Extract "item_name" values from filtered items
                const primaryItemNames = primaryItemsFiltered.map((item) => item.item_name);

                setPrimaryItems(primaryItemNames); // Set the retrieved "item_name" values in state
            } catch (error) {
                console.error("Error fetching primary items: ", error);
            }
        };

        // Fetch all items when the component mounts
        fetchItems();
    }, []);

    return (
        <div className="dropdown">
            <button onClick={() => setIsOpen((prev) => !prev)} className="dropdown__button">
                {isOpen ? (
                    <img src={upArrow} alt="Dropdown Arrow" className="dropdown__img" />
                ) : (
                    <img src={downArrow} alt="Dropdown Arrow" className="dropdown__img" />
                )}
            </button>
            {isOpen && (
                <div className="dropdown__content">
                    <ul className="dropdown__list">
                        {/* Map over the primaryItems and create list items for each */}
                        {primaryItems.map((item) => (
                            <li className="dropdown__item" key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
