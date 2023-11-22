import React, { useEffect, useState } from "react";
import upArrow from "../../Assets/Images/up-arrow.svg";
import downArrow from "../../Assets/Images/down-arrow.svg";
import axios from "axios";
import { useImages } from "../../Components/Context/ImageContext";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [secondaryItems, setSecondaryItems] = useState([]); // State to store primary data
    const [selectedItem, setSelectedItem] = useState(null); // State to store selected flower
    const { images, setImages } = useImages(); // Get the setImages function from context and destructure

    const handleItemSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false); // Close the dropdown menu upon selection
        setImages((prevImages) => ({
            ...prevImages,
            secondary: item.images,
        })); // grab each image url
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_URL}/api/inventories`
                );

                // Filter items with category "primary"
                const secondaryItemsFiltered = response.data.filter(
                    (item) => item.category === "primary" && item.quantity > 0
                );

                setSecondaryItems(secondaryItemsFiltered); // Set the retrieved items in state
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
                        {/* Map over the secondaryItems and create list items for each */}
                        {secondaryItems.map((item) => (
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
