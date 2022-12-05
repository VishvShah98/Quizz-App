import React from "react";
import { Link } from "react-router-dom";

export default function Quizpage(props) {
  
  const [inputs, setInputs] = React.useState({});
  const [score, updateScore] = React.useState(0);
  const [showScore, show] = React.useState(false);
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateScore(inputs);
    show(!showScore);
  };

  function calculateScore(answers) {
    let sc = 0;
    for (let i = 0; i < props.data.length; i++) {
      if (props.data[i].correct_answer == answers[`options${i}`]) {
        sc = sc + 1;
        console.log(sc);
      }
    }
    updateScore(sc);
  }

  const Quest = props.data.map((item, index) => (
    <>
      <p>{item.question}</p>

      <div className="radio-toolbar">
        {item.incorrect_answers.map((ans) => (
          <>
            <input
              type="radio"
              id={ans}
              name={`options${index}`}
              value={ans}
              onChange={handleChange}
            ></input>
            <label htmlFor={`options${index}`}>{ans}</label>
          </>
        ))}

        <input
          type="radio"
          id={item.correct_answer}
          name={`options${index}`}
          value={item.correct_answer}
          onChange={handleChange}
        ></input>
        <label htmlFor={`options${index}`}>{item.correct_answer} </label>
      </div>
    </>
  ));

  return (
    <>
      <form onSubmit={handleSubmit} className="quiz-page">
        {Quest}
        {!showScore && <input type="submit" />}
        {showScore && (
          <label className="score" readOnly>
            Score : {score}
          </label>
        )}
        <br></br>
        {showScore && (
          <Link to="/">
            <button>Play Again</button>
          </Link>
        )}
      </form>
    </>
  );
}
