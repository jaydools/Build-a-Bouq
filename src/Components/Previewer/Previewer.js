import React from "react";
import "./Previewer.scss";
import { useImages } from "../Context/ImageContext";
import placeholder from "../../Assets/Images/placeholder.png";

function Previewer() {
    const { images } = useImages(); // Access the images from context
    const allImages = [
        ...images.focal,
        ...images.secondary,
        ...images.foliage,
        ...images.container,
    ];

    const zIndexRando = () => Math.floor(Math.random() * 100); // function to create a random z index

    return (
        <div className="image-container">
            {allImages.length > 0 ? (
                allImages.map((url, index) => (
                    <div
                        key={index}
                        className="image-container__container"
                        style={{ zIndex: zIndexRando() }}
                    >
                        <img
                            className="image-container__image"
                            src={url}
                            alt={`Preview ${index}`}
                        />
                    </div>
                ))
            ) : (
                // Render a placeholder image if allImages is empty
                <div className="image-container__container">
                    <img className="image-container__image" src={placeholder} alt="Placeholder" />
                </div>
            )}
        </div>
    );
}

export default Previewer;
