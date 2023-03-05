import React from "react";

function LetterButton(props) {
    return (
        <button type="button" className="letter-button box" style={props.style}>
            {props.letter_to_display}
        </button>
    );
}

export default LetterButton;
