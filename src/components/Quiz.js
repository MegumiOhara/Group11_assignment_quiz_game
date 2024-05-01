//Quiz questions - multiple choice 
import React, { useState } from 'react';
function Quiz(){
    const questions = [
        {
            questionVocab: 'femton',
            answerOptions: [
                {answerVocab: 'fear' , isCorrect: false},
                {answerVocab: 'fifteen', isCorrect: true},
                {answerVocab: 'famish' , isCorrect: false},
                {answerVocab: 'fetch' , isCorrect: false},
            ],
        },
        {
            questionVocab: 'flicka',
            answerOptions: [
                {answerVocab: 'girl' , isCorrect: true},
                {answerVocab: 'flicker', isCorrect: false},
                {answerVocab: 'find' , isCorrect: false},
                {answerVocab: 'boy' , isCorrect: false},
            ],
        },
        {
            questionVocab: 'boy',
            answerOptions: [
                {answerVocab: 'flicka' , isCorrect: false},
                {answerVocab: 'pojke', isCorrect: true},
                {answerVocab: 'punkt' , isCorrect: false},
                {answerVocab: 'kvinna' , isCorrect: false},
            ],
        },
        {
            questionVocab: 'man',
            answerOptions: [
                {answerVocab: 'one' , isCorrect: false},
                {answerVocab: 'man', isCorrect: true},
                {answerVocab: 'but' , isCorrect: false},
                {answerVocab: 'mango' , isCorrect: false},
            ],
        },
        {
            questionVocab: 'dog',
            answerOptions: [
                {answerVocab: 'katt' , isCorrect: false},
                {answerVocab: 'valp', isCorrect: false},
                {answerVocab: 'hund' , isCorrect: true},
                {answerVocab: 'fetch' , isCorrect: false},
            ],
        },
        {
            questionVocab: 'cat',
            answerOptions: [
                {answerVocab: 'cat' , isCorrect: false},
                {answerVocab: 'kattmynta', isCorrect: false},
                {answerVocab: 'hund' , isCorrect: false},
                {answerVocab: 'katt' , isCorrect: true},
            ],
        },
        {
            questionVocab: 'ordentlig',
            answerOptions: [
                {answerVocab: 'word' , isCorrect: false},
                {answerVocab: 'order', isCorrect: false},
                {answerVocab: 'orderly' , isCorrect: true},
                {answerVocab: 'ordning' , isCorrect: false},
            ],
        },
        {
            questionVocab: 'cat',
            answerOptions: [
                {answerVocab: 'cat' , isCorrect: false},
                {answerVocab: 'kattmynta', isCorrect: false},
                {answerVocab: 'hund' , isCorrect: false},
                {answerVocab: 'katt' , isCorrect: true},
            ],
        },
        {
            questionVocab: 'cat',
            answerOptions: [
                {answerVocab: 'cat' , isCorrect: false},
                {answerVocab: 'kattmynta', isCorrect: false},
                {answerVocab: 'hund' , isCorrect: false},
                {answerVocab: 'katt' , isCorrect: true},
            ],
        },
        {
            questionVocab: 'cat',
            answerOptions: [
                {answerVocab: 'cat' , isCorrect: false},
                {answerVocab: 'kattmynta', isCorrect: false},
                {answerVocab: 'hund' , isCorrect: false},
                {answerVocab: 'katt' , isCorrect: true},
            ],
        }
    ];

    return(
        <div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>This is where the question text should go</div>
					</div>
					<div className='answer-section'>
						<button>Answer 1</button>
						<button>Answer 2</button>
						<button>Answer 3</button>
						<button>Answer 4</button>
					</div>
				</>
			)}
		</div>
	);
}
//activeQuestions - keep track of current question
//selectdAnswer- which answer user has selected



export default Quiz;