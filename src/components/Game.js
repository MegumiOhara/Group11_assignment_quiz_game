function Game({ question, onClickVariant }) {
  return (
    <div>
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