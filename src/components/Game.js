import {questions} from '../clothes-questions'

function Game({ question, correct, onClickVariant }) {
  return (
    <div>
      <span className="cauntResult">
        {correct} / {questions.length}
      </span>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>{text}</li>))
        }
      </ul>
    </div>
  );
}

export default Game;