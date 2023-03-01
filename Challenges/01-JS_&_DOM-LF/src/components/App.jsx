import React from "react";
import LetterContainerGroup from "./LetterContainer/LetterContainerGroup";
import TopBar from "./TopBar/TopBar";
import Keyboard from "./Keyboard/Keyboard";

function App() {
    return (
        <div class="first-page">
            <TopBar />
            <LetterContainerGroup />
            <br></br>
            <Keyboard />
        </div>
    );
}

export default App;
