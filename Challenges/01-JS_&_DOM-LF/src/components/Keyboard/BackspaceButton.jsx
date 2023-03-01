import React from "react";
import backspace_svg from "../../img/backspace.svg";

function BackspaceButton() {
    return (
        <div className="letter-button box">
            <img src={backspace_svg} width="17px" style={{ margin: "auto" }} />
        </div>
    );
}

export default BackspaceButton;
