import React, { useState } from "react";
import Prompt from "./Prompt";

// Have a collection of prompts from madlibs.
// Prompts include an array of user inputs ["noun", "another noun", "adjective", "color"]
// Answers for a State will look like:
// {'noun': 'dog', 'noun 2': 'bird', 'adjective': 'pretty', 'color': 'blue'}

function PromptsForm({ prompts, completeStory }) {
    // For state of single answer
    const [promptForm, setPromptForm] = useState({});

    function changeAnswer(prompt, val) {
        setPromptForm(f => ({...f, [prompt]: val}));
    }

    // handleSubmit for completed forms
    function handleSubmit(e) {
        e.preventDefault();
        completeStory(promptForm);
    }

    // Bonus
    // Makes sure all prompts are filled before submission
    let pleaseFinish = (
        Object.keys(promptForm).length < prompts.length
    );

    return (
        <form className="Prompts" onSubmit={handleSubmit}>
            {prompts.map((p, i) => (
                <Prompt key={i}
                        prompt={p}
                        answer={promptForm[p]}
                        changeAnswer={changeAnswer} />
            ))}
            <button disabled={pleaseFinish}>Create Story</button>
        </form>
    );
}

export default PromptsForm;