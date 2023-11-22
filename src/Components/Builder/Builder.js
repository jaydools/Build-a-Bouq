import React from "react";
import Previewer from "../Previewer/Previewer";
import Options from "../Options/Options";
import "./Builder.scss";
import { ImageProvider } from "../Context/ImageContext";

function Builder() {
    return (
        <div className="builder-container">
            <ImageProvider>
                <Previewer />
                <Options />
            </ImageProvider>
        </div>
    );
}

export default Builder;
