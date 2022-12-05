import React from "react";
import {Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Quizzical</h1>
      <p className="home-description">Trivial MCQ Quiz</p>
      <Link to='quizpage'><button className="start-btn">Start Quiz</button></Link>
    </div>
  );
}

export default Home;
