import React from "react";
import "./Previewer.scss";
import { useImages } from "../Context/ImageContext";

function Previewer() {
    const { images } = useImages(); // Access the images from context

    return (
        <div className="image-container">
            {images &&
                images.length > 0 &&
                images.map((url, index) => (
                    <div key={index} className="image-container__container">
                        <img
                            className="image-container__image"
                            src={url}
                            alt={`Preview ${index}`}
                        />
                    </div>
                ))}
        </div>
    );
}

export default Previewer;
