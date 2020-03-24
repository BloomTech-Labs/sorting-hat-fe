import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../redux/actions/getQuestions";
import { getAnswers } from "../redux/actions/getAnswers";
import { setScores } from "../redux/actions/setScores";
import { Redirect } from "react-router-dom";
import ProgressBar from "./ProgressBar";

function Quiz(props) {
  const { getQuestions, getAnswers, setScores, questions, answers } = props;
  const [num, setNum] = useState(0);
  const [currentScores, setCurrentScores] = useState({
    fullstack: 0,
    ios: 0,
    android: 0,
    ux: 0,
    ds: 0
  });

  useEffect(() => {
    getQuestions();
    getAnswers();
  }, []);

  if (num === questions.length) {
    setScores(currentScores);
    return <Redirect to="/results" />;
  }
  return (
    <div className="quiz-wrapper">
      <h1>Quiz</h1>
      <h2>{questions[num].question}</h2>
      {/* //todo change list style  */}
      <ol className="list-decimal">
        {answers.map(answer => {
          if (answer.question_id === questions[num].id) {
            return <li key={answer.id}>{answer.choice}</li>;
          }
        })}
      </ol>
      <button onClick={() => setNum(num + 1)}>Next</button>
      <ProgressBar progress={`${questions[num].id}/${questions.length}`} />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    questions: state.questions,
    answers: state.answers
  };
};

export default connect(mapStateToProps, {
  getQuestions,
  getAnswers,
  setScores
})(Quiz);
