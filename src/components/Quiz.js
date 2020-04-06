import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
//* Redux
import { connect } from "react-redux";
import { getQuestions } from "../redux/actions/getQuestions";
import { getAnswers } from "../redux/actions/getAnswers";
import { setScores } from "../redux/actions/setScores";
import { getPoints } from "../redux/actions/getPoints";
import { getTracks } from "../redux/actions/getTracks";
//* Components
import ProgressBar from "./ProgressBar";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";

function Quiz(props) {
  //Setting State
  const {
    getQuestions,
    getAnswers,
    getTracks,
    setScores,
    getPoints,
    questions,
    answers,
    scores,
    points,
  } = props;

  const [num, setNum] = useState(0);
  const [pointHistory] = useState([]);
  const [selected, setSelected] = useState([]);

  //Running Actions
  useEffect(() => {
    getQuestions();
    getAnswers();
    getTracks();
    getPoints();
    setScores({});
  }, []);

  //If the quiz if finished it will redirect to main page
  if (num === questions.length) {
    return <Redirect to="/results" />;
  }

  //Scores are being updated based off of user selections

  const updatePoints = () => {
    //This action updates the score based on points associated with the tracks
    setNum(num + 1);
    let newScores = {};
    selected.forEach((point) => {
      let current = scores[point.track_id];
      const newPoint = JSON.parse(point.points);
      if (!current) {
        current = 0;
      }
      newScores = {
        ...newScores,
        [point.track_id]: current + newPoint,
      };
      setScores(newScores);
    });
    pointHistory.push(selected);
  };

  const backScore = () => {
    setNum(num - 1);
    let newScores = {};
    pointHistory[num - 1].forEach((point) => {
      let current = scores[point.track_id];
      const newPoint = JSON.parse(point.points);
      newScores = {
        ...newScores,
        [point.track_id]: current - newPoint,
      };
      setScores(newScores);
    });
    pointHistory.pop();
  };

  return (
    <div className="w-4/5 m-auto">
      <h1 className="mt-2">Question {num + 1}</h1>
      <h2>{questions[num].question}</h2>
      <div className="flex flex-col m-4">
        {answers.map(
          (answer) =>
            answer.question_id === questions[num].id && (
              <button
                key={answer.id}
                onClick={() => {
                  setSelected(
                    points.filter((point) => point.answer_id === answer.id)
                  );
                  // const point = points.filter(
                  //   (point) => point.answer_id === answer.id
                  // );
                  // updatePoints(point);
                }}
                className="hover:bg-red-500  w-1/2 p-1 m-auto text-left"
                // hover:border-4 hover:border-solid hover:border-black hover:rounded-md
              >
                {answer.choice}
              </button>
            )
        )}

        {num > 0 && (
          // <p className="flex justify-center">
          <TiArrowBackOutline onClick={backScore} color="purple" />
          // </p>
        )}
        <IoIosArrowForward onClick={updatePoints} color="purple" />
      </div>
      <ProgressBar progress={questions[num].id / questions.length} />
    </div>
  );
}

//Redux interface

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    answers: state.answers,
    scores: state.scores,
    points: state.points,
  };
};

export default connect(mapStateToProps, {
  getQuestions,
  getAnswers,
  setScores,
  getTracks,
  getPoints,
})(Quiz);
