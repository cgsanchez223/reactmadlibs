import React, { useState } from 'react';
import Story from './Story';
import PromptsForm from './PromptsForm';

// Madlib game

function Madlib({ prompts, template }) {

    // Render a story if answers are complete
    const [answers, setAnswers] = useState(null);

    // else render given prompts to create Madlib
    return (
        <div className='Madlib'>
            <h1>Create Your Own Madlibs</h1>
            {answers
                ? <Story 
                    answers={answers}
                    template={template}
                    restart={() => setAnswers(null)} />

                : <PromptsForm 
                    prompts={prompts}
                    completeStory={setAnswers} />
            }        
        </div>
    );
}

// prompts give subjects that users can sub into the story
// template give placeholders for the prompts and layout of story
Madlib.defaultProps = {
    prompts: ["noun", "noun 2", "adjective", "color"],
    template: "There was a [color] [noun] who wanted to play with a [adjective] [noun 2]."
};

export default Madlib;