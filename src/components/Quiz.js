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
    getTracks,
    setScores,
    questions,
    answers,
    tracks,
    scores
  } = props;

  const [num, setNum] = useState(0);

  useEffect(() => {
    getQuestions();
    getAnswers();
    getTracks();
  }, []);

  if (num === questions.length) {
    return <Redirect to="/results" />;
  }

  const updatePoints = point => {
    setScores({
      ...scores,
      fullstack: scores.fullstack + parseFloat(point.fullstack),
      ios: scores.ios + parseFloat(point.iOS),
      android: scores.android + parseFloat(point.android),
      ux: scores.ux + parseFloat(point.UX),
      ds: scores.ds + parseFloat(point.DS)
    });
  };

  return (
    <div className="w-4/5 m-auto">
      <h1 mt-2>Question {num + 1}</h1>
      <h2>{questions[num].question}</h2>

      <div className="flex flex-col m-4">
        {answers.map(answer => {
          if (answer.question_id === questions[num].id) {
            return (
              // todo create form to replace button
              // todo add state for back button
              // <div className="hover:bg-red-500  w-1/2 p-1 m-auto text-left">
              //  <input type="checkbox" props={...props} name="checkbox" />
              <button
                key={answer.id}
                onClick={() => {
                  const point = tracks.find(
                    track => track.answer_id === answer.id
                  );
                  setNum(num + 1);
                  updatePoints(point);
                }}
                className="hover:bg-red-500  w-1/2 p-1 m-auto text-left"
                // hover:border-4 hover:border-solid hover:border-black hover:rounded-md
              >
                {answer.choice}
              </button>
              // </div>
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
    tracks: state.tracks,
    scores: state.scores
  };
};

export default connect(mapStateToProps, {
  getQuestions,
  getAnswers,
  setScores,
  getTracks
})(Quiz);
