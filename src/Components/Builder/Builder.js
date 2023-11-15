import React from "react";
import Previewer from "../Previewer/Previewer";
import Options from "../Options/Options";
import "./Builder.scss";

function Builder() {
    return (
        <div className="builder-container">
            <Previewer />
            <Options />
        </div>
    );
}

export default Builder;
