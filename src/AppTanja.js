import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom';
import './indexTanja.css';
import Result from './components/Result';
import Game from './components/Level-2-page/Game';
import { useState } from 'react'
import {questions} from './components/Level-2-page/clothes-questions'
import Levels from './components/Levels-page/Levels';

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
      <Levels />
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
