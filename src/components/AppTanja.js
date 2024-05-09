import React from 'react'
import '../indexTanja.css';
import Result from './Result';
import Game from './Level-2-page/Game';
import { useState } from 'react'
import {questions} from './Level-2-page/clothes-questions'

function AppTanja() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
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

export default AppTanja;