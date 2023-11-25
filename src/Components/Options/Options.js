import React, { useEffect, useState } from "react";
import "./Options.scss";
import Dropdown from "../Dropdown/Dropdown";
import DropdownFoliage from "../DropdownFoliage/DropdownFoliage";
import AddToCart from "../AddToCart/AddToCart";
import DropdownContainer from "../Container/Container";
import axios from "axios";
import { useImages } from "../Context/ImageContext";

function Options() {
    const { setImages } = useImages();
    const [selections, setSelections] = useState({
        focal: null,
        secondary: null,
        foliage: null,
        container: null,
    });

    const [primaryItems, setPrimaryItems] = useState([]);
    const [foliageItems, setFoliageItems] = useState([]);
    const [containerItems, setContainerItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = process.env.REACT_APP_MOCK_API_KEY;

                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_URL}/api/inventories?apiKey=${apiKey}`
                );

                setPrimaryItems(
                    response.data.filter((item) => item.category === "primary" && item.quantity > 0)
                );

                setFoliageItems(
                    response.data.filter((item) => item.category === "foliage" && item.quantity > 0)
                );
                setContainerItems(
                    response.data.filter(
                        (item) => item.category === "container" && item.quantity > 0
                    )
                );
            } catch (error) {
                console.error("Error fetching items: ", error);
            }
        };

        fetchData();
    }, []);

    const handleSelection = (category, item) => {
        setSelections((prev) => ({ ...prev, [category]: item }));
    };
    return (
        <div className="option-container">
            <div className="selector">
                <div className="dropdown-one">
                    Focal
                    <Dropdown
                        category="focal"
                        selected={selections.focal}
                        items={primaryItems}
                        onSelectionChange={handleSelection}
                        setImages={setImages}
                    />
                </div>
                <div className="dropdown-two">
                    <Dropdown
                        category="secondary"
                        selected={selections.secondary}
                        items={primaryItems}
                        onSelectionChange={handleSelection}
                        setImages={setImages}
                    />
                </div>
                <div className="dropdown-three">
                    Foliage
                    <DropdownFoliage
                        category="foliage"
                        selected={selections.foliage}
                        onSelectionChange={handleSelection}
                        setImages={setImages}
                        items={foliageItems}
                    />
                </div>
                <div className="dropdown-four">
                    Container
                    <DropdownContainer
                        category="container"
                        selected={selections.container}
                        onSelectionChange={handleSelection}
                        setImages={setImages}
                        items={containerItems}
                    />
                </div>
                <div className="dropdown-five">
                    <AddToCart selections={selections} />
                </div>
                <div className="total">TOTAL:</div>{" "}
                {/*  Insert Order Value In Here ----------------------// */}
            </div>
        </div>
    );
}

export default Options;
