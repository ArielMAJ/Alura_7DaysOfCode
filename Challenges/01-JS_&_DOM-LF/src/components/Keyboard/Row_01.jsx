import React from "react";
import LetterButton from "./LetterButton";

function Row_01() {
    return (
        <div className="row">
            <LetterButton letter_to_display="Q" />
            <LetterButton letter_to_display="W" />
            <LetterButton letter_to_display="E" />
            <LetterButton letter_to_display="R" />
            <LetterButton letter_to_display="T" />
            <LetterButton letter_to_display="Y" />
            <LetterButton letter_to_display="U" />
            <LetterButton letter_to_display="I" />
            <LetterButton letter_to_display="O" />
            <LetterButton letter_to_display="P" />
        </div>
    );
}

export default Row_01;
