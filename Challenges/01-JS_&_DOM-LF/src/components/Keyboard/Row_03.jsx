import React from "react";
import LetterButton from "./LetterButton";
import BackspaceButton from "./BackspaceButton";

function Row_03() {
    return (
        <div className="row">
            <LetterButton letter_to_display="Enter" />
            <LetterButton letter_to_display="Z" />
            <LetterButton letter_to_display="X" />
            <LetterButton letter_to_display="C" />
            <LetterButton letter_to_display="V" />
            <LetterButton letter_to_display="B" />
            <LetterButton letter_to_display="N" />
            <LetterButton letter_to_display="M" />
            <BackspaceButton />
        </div>
    );
}

export default Row_03;
