import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
//* Redux
import { connect } from "react-redux";
import { setScores } from "../redux/actions/setScores";
//* Components
import ProgressBar from "./ProgressBar";
// import AnswerButton from './Button';
//* Checkbox Images
import Checkbox from "../img/Checkbox.svg";
import UnCheckbox from "../img/UnCheckbox.svg";
//Arrow Images
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import arrowPurple from "../img/arrowPurple.svg";
import ArrowWhite from "../img/ArrowWhite.svg";

function Quiz(props) {
  //Setting State
  const { setScores, questions, answers, scores, points } = props;

  //State of the Quiz
  const [num, setNum] = useState(0);
  const [pointHistory] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selectedAnsId, setSelectedAnsId] = useState({});
  const [selectedAnsHistory] = useState([]);
  const [btnColor, setBtnColor] = useState("purple-400");

  //Running Actions
  useEffect(() => {
    setScores({});
  }, []);

  if (!questions.length) {
    return <Redirect to="/" />;
  } else if (num === questions.length) {
    //If the quiz if finished it will redirect Results component
    return <Redirect to="/results" />;
  }

  //Scores are being updated based off of user selections

  const updatePoints = () => {
    //This action updates the score based on points associated with the tracks

    if (selected.length) {
      //button background settings
      setBtnColor("purple-400");
      if (selected === pointHistory[num - 1]) {
        return null;
      }
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
      selectedAnsHistory.push(selectedAnsId);
    }
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
    setSelectedAnsId(selectedAnsHistory.pop());
  };
  //* renders buttons for each answer
  //Checkbox and index define relationship with the button and image
  const answerButton = (answer, index) => (
    <div
      key={`div-${index}`}
      className="flex items-center justify-start w-full mt-1 fira-sans"
    >
      {/* Changes based off of whether it is selected or not. 
			Checkbox contains the id of the current selected answer.
			If the current question matches the id stored as checkbox, a 
			checkbox is displayed.
			*/}
      <img
        src={selectedAnsId === index + 1 ? Checkbox : UnCheckbox}
        alt="checkbox"
      />
      <button
        key={index}
        onClick={() => {
          setSelected(points.filter((point) => point.answer_id === answer.id));
          setSelectedAnsId(answer.id);
          // console.log(index, answers[index].id);
          setBtnColor("purple-900");
        }}
        className={`fira-sans mark w-full p-1 ml-2 text-left hover:bg-purple-100 bg-${
          selectedAnsId === answer.id ? "purple-100" : "white"
        }`}
      >
        {answer.choice}
      </button>
    </div>
  );

  return (
    <div className="w-1/2 h-screen p-1 m-auto mt-3">
      <h1 className="pt-4 mt-2 text-xl text-3xl fira-sans">
        Question {num + 1}
      </h1>
      <ProgressBar progress={questions[num].id / questions.length} />
      <h1 className="mt-2 protoGray fira-sans">{questions[num].question}</h1>
      <div className="flex flex-col w-full mt-4 mb-2">
        {answers.map(
          (answer, index) =>
            answer.question_id === questions[num].id &&
            answerButton(answer, index)
        )}
      </div>
      <div className="flex items-center justify-between m-auto mt-8 questrial actions">
        {num > 0 ? (
          <button
            onClick={backScore}
            className={`questrial flex text-purple-700 border-2 border-purple-200 text-white p-2 rounded-lg`}
          >
            <img src={arrowPurple} alt="leftArrow" size="1.3rem" /> Back
          </button>
        ) : (
          <button
            onClick={() => props.history.push("/")}
            className={`questrial halfOpacityPurple border-2 border-purple-200 flex p-2 rounded-lg justify-center items-center`}
          >
            <img
              src={arrowPurple}
              alt="leftArrow"
              size="1.3rem"
              className="m-1"
            />{" "}
            <span className="halfOpacityPurple">Home</span>
          </button>
        )}
        <span className="text-gray-600">{`${questions[num].id}/${questions.length}`}</span>

        <button
          onClick={updatePoints}
          className={`questrial flex bg-${btnColor} text-white p-2 rounded-lg`}
        >
          Next <GoTriangleRight size="1.3rem" />
        </button>
      </div>
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

export default connect(mapStateToProps, { setScores })(Quiz);
