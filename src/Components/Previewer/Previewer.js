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
            {/* Iterating over each category and its images */}
            {Object.entries(images).map(([category, imageUrls]) =>
                imageUrls.map(
                    (
                        // Map each image URL to an image element
                        url,
                        index
                    ) => (
                        <div
                            key={`${category}-${index}`} // Unique key for React list rendering
                            className="image-container__container"
                            // Conditional styling: if category is 'container', set z-index to 1000, otherwise use random z-index
                            style={{ zIndex: category === "container" ? 1000 : zIndexRando() }}
                        >
                            <img
                                key={index}
                                className="image-container__image"
                                src={url}
                                alt={`Preview ${index}`}
                            />
                        </div>
                    )
                )
            )}
            {/* Fallback content: if there are no images, display a placeholder image */}
            {Object.keys(images).every((category) => images[category].length === 0) && (
                <div className="image-container__container">
                    <img className="image-container__image" src={placeholder} alt="Placeholder" />
                </div>
            )}
        </div>
    );
}

export default Previewer;
