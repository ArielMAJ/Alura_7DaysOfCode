import React from "react";
import LetterContainerGroup from "./LetterContainer/LetterContainerGroup";
import TopBar from "./TopBar/TopBar";
import Keyboard from "./Keyboard/Keyboard";

function App() {
    return (
        <div className="first-page">
            <TopBar />
            <LetterContainerGroup />
            <Keyboard />
        </div>
    );
}

export default App;
