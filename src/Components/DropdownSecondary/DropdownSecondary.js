import React, { useEffect, useState } from "react";
import upArrow from "../../Assets/Images/up-arrow.svg";
import downArrow from "../../Assets/Images/down-arrow.svg";
import axios from "axios";
import { useImages } from "../../Components/Context/ImageContext";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [secondaryItems, setSecondaryItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const { images, setImages } = useImages();

    const handleItemSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
        setImages((prevImages) => ({
            ...prevImages,
            secondary: item.images,
        }));
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_URL}/api/inventories`
                );

                const secondaryItemsFiltered = response.data.filter(
                    (item) => item.category === "primary" && item.quantity > 0
                );

                setSecondaryItems(secondaryItemsFiltered);
            } catch (error) {
                console.error("Error fetching primary items: ", error);
            }
        };

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
