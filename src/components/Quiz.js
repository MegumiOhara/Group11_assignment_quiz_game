//Quiz questions - multiple choice 
import React, { useState } from 'react';
import Button from './Button/Button';
import { Link } from 'react-router-dom';


function Quiz(){
    const questions = [
        {
            questionVocab: 'vatten',
            answerOptions: [
                {answerVocab: 'vet' , isCorrect: false},
                {answerVocab: 'water', isCorrect: true},
                {answerVocab: 'soap' , isCorrect: false},
                {answerVocab: 'shower' , isCorrect: false},
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
            questionVocab: 'kaffe',
            answerOptions: [
                {answerVocab: 'cafe' , isCorrect: false},
                {answerVocab: 'cafeteria', isCorrect: false},
                {answerVocab: 'car' , isCorrect: false},
                {answerVocab: 'coffee' , isCorrect: true},
            ],
        },
        {
            questionVocab: 'fika',
            answerOptions: [
                {answerVocab: 'fiction' , isCorrect: false},
                {answerVocab: 'coffee time', isCorrect: true},
                {answerVocab: 'cake' , isCorrect: false},
                {answerVocab: 'fist' , isCorrect: false},
            ],
        },
        {
            questionVocab: 'ost',
            answerOptions: [
                {answerVocab: 'cheese' , isCorrect: true},
                {answerVocab: 'Austria', isCorrect: false},
                {answerVocab: 'host' , isCorrect: false},
                {answerVocab: 'milk' , isCorrect: false},
            ],
        }
    ];

    //value that hold the question we are on. Starts with 0 as array starts with 0.
    //instead of staying in the same question array of [0] and add +1 later for dynamic + incrementation
    const [currentQuestion, setCurrentQuestion] = useState(0);
    //stateobject to collect score. Below showScore is a turnery in return so when true-shows 'score-section'
    //when remain false, shows the message from'question-section'
    //remains true if nextQuestion is more than questions.length with below answerButtonC func.
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    //if clickon button clicked and isCorrect option from the array is clicked (isCorrect = true), score variable will increment by 1
    const answerButtonClick = (isCorrect) => {
        if(isCorrect === true){
            setScore(score +1);
        }
    //change the current question by one everytime button is clicked
    //add if/else so it won't break when coming to the last question
        const nextQuestion = currentQuestion +1;
        //if the next question is less than the total number of q, go to nextq
        //if more than total number of q, show the else
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setShowScore(true);
        }
    }

    return(
        <div className="container-quiz">
        <div className='app'>
            
			{/* change the hard coded messages into dynamic (const variables) once logic and function added */}
			{showScore ? (
				<>
                <div className='score-section'>You scored {score} out of {questions.length}
                    <Button><Link to="/levels">Go Back</Link></Button>
                </div>
        </>
			) : (
              
				<>
					<div className='question-section'>
						<div className='question-count'>
                            {/*question number cannot be hardcoded, need to be incremented so currentQuestion variable +1*/}
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
                        {/* question-text displays the questions array,displays variable of current Q- and shows the questionVocab based 
                        on which questions  */}
						<div className='question-text'>{questions[currentQuestion].questionVocab}</div>
					</div>
					<div className='answer-section'>
                        {/*use map function to reiterate the answerOptions on screen*/}
						{questions[currentQuestion].answerOptions.map((answerOption) => 
                    <button className='quiz-btn' 
                        onClick={() => answerButtonClick(answerOption.isCorrect)}>
                        {answerOption.answerVocab}</button>)}
                        {/*each button displays the answerVocabs from answerOptions array. 
                        onClick- when clicked, use the answerBC function which collects 
                        the score if isCorrect is clicked */}
                    </div>
				</>
			)}
		</div>

        </div>
	);
}


export default Quiz;