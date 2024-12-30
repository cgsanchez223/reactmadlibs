import React from "react";

// Story will show the template for the completed story.

function Story({ template, answers, restart}) {
    function storyCreator() {
        let tale = template;

        for (let key in answers) {
            tale = tale.replace(`[${key}]`, answers[key]);
        }

        return tale;
    }

    // Bonus - Reset story
    return (
        <div className="Story">
            <p> { storyCreator() } </p>
            <button onClick={restart}>Restart</button>
        </div>
    );
}

export default Story;