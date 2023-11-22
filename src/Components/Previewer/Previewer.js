import React from "react";
import "./Previewer.scss";
import { useImages } from "../Context/ImageContext";

function Previewer() {
    const { images } = useImages(); // Access the images from context
    const allImages = [
        ...images.focal,
        ...images.secondary,
        ...images.foliage,
        ...images.container,
    ];

    return (
        <div className="image-container">
            {allImages.map((url, index) => (
                <div key={index} className="image-container__container" style={{ zIndex: index }}>
                    <img className="image-container__image" src={url} alt={`Preview ${index}`} />
                </div>
            ))}
        </div>
    );
}

export default Previewer;
