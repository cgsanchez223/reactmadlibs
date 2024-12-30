import React from "react";

// Summons a prompt for the madlib.

function Prompt({ changeAnswer, prompt }) {

    // event listener to handle change in input box
    function handleChange(e) {
        const {value} = e.target;
        changeAnswer(prompt, value);
    }

    return (
        <div className="Prompt">
            <input 
                placeholder={prompt}
                onChange={handleChange} />
        </div>
    );
}

export default Prompt;