import "./Dropdown.scss";
import React, { useEffect, useState } from "react";
import upArrow from "../../Assets/Images/up-arrow.svg";
import downArrow from "../../Assets/Images/down-arrow.svg";
import axios from "axios";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]); // State to store category data

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/inventories/");
                setCategories(response.data); // Set the retrieved categories in state
            } catch (error) {
                console.error("Error fetching categories: ", error);
            }
        };

        fetchCategories(); // Call the async function to fetch categories when the component mounts
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
                <div className="dropdown__list">
                    <ul>
                        {/* Map over the categories and create list items for each */}
                        {categories.map((category) => (
                            <li key={category.id}>{category.category}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
