import React from "react";

function LetterButton(props) {
    return (
        <div className="letter-button box" style={props.style}>
            {props.letter_to_display}
        </div>
    );
}

export default LetterButton;
