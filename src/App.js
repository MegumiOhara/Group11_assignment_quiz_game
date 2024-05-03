import React from 'react'
import './index.css';
import Button from './components/Button/Button'
import Result from './components/Result';
import Game from './components/Game';
import { useState } from 'react'
import {questions} from './clothes-questions'

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

 const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
 }

  return (
    <div className="container">
      <div className="App">
        {
          step !== questions.length ? (
          <Game  question={question} onClickVariant={onClickVariant}/>
          ) : (
          <Result correct={correct}/>
          )}
      </div>
    </div>
    );
}

export default App;
