import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../redux/actions/getQuestions";
import { getAnswers } from "../redux/actions/getAnswers";
import { setScores } from "../redux/actions/setScores";
import { getTracks } from "../redux/actions/getTracks";
import { Redirect } from "react-router-dom";
import ProgressBar from "./ProgressBar";

function Quiz(props) {
  const {
    getQuestions,
    getAnswers,
    setScores,
    getTracks,
    questions,
    answers,
    tracks
  } = props;

  const [num, setNum] = useState(0);

  const [currentPoints, setCurrentPoints] = useState({
    fullstack: 0,
    ios: 0,
    android: 0,
    ux: 0,
    ds: 0
  });

  useEffect(() => {
    getQuestions();
    getAnswers();
    getTracks();
  }, []);

  if (num === questions.length) {
    setScores(currentPoints);
    return <Redirect to="/results" />;
  }
  const updatePoints = point => {
    setCurrentPoints({
      ...currentPoints,
      fullstack: currentPoints.fullstack + parseFloat(point.fullstack),
      ios: currentPoints.ios + parseFloat(point.iOS),
      android: currentPoints.android + parseFloat(point.android),
      ux: currentPoints.ux + parseFloat(point.UX),
      ds: currentPoints.ds + parseFloat(point.DS)
    });
  };
  return (
    <div className="quiz-wrapper">
      <h1>Quiz</h1>
      <h2>{questions[num].question}</h2>

      <div className="flex flex-col m-4">
        {answers.map(answer => {
          if (answer.question_id === questions[num].id) {
            return (
              <button
                key={answer.id}
                onClick={() => {
                  const point = tracks.find(
                    track => track.answer_id === answer.id
                  );
                  setNum(num + 1);
                  updatePoints(point);
                }}
                className="bg-gray-200 hover:bg-red-500 w-1/4 p-1 m-auto"
              >
                {answer.choice}
              </button>
            );
          }
        })}
      </div>
      <ProgressBar progress={`${questions[num].id}/${questions.length}`} />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    questions: state.questions,
    answers: state.answers,
    tracks: state.tracks
  };
};

export default connect(mapStateToProps, {
  getQuestions,
  getAnswers,
  setScores,
  getTracks
})(Quiz);
