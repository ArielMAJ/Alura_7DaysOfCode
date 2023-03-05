import React from "react";
import backspace_svg from "../../assets/imgs/backspace.svg";

function BackspaceButton() {
    return (
        <button type="button" className="letter-button box">
            <img className="backspace" src={backspace_svg} />
        </button>
    );
}

export default BackspaceButton;
