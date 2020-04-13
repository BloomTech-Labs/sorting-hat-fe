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
import ArrowPurpleL from "../img/ArrowPurpleL.svg";
import ArrowWhiteL from "../img/ArrowWhiteL.svg";
import ArrowWhiteR from "../img/ArrowWhiteR.svg";

function Quiz(props) {
  //Setting State
  const { setScores, questions, answers, scores, points } = props;

  //State of the Quiz
  const [curQuesIndex, setCurQuesIndex] = useState(0);
  const [pointHistory] = useState([]);
  const [selAnsPoints, setSelAnsPoints] = useState([]);
  const [selAnsId, setSelAnsId] = useState({});
  const [selAnsHistory] = useState([]);
  const [btnColor, setBtnColor] = useState("purple-400");

  //May need to create a cap on this later if too many questions
  //are added to the back end.
  //const totalNumQues = questions.length;
  const totalNumQues = 1;

  /* why not initiate setScore with {} instead of this useEffect?? */
  useEffect(() => {
    setScores({});
  }, []);

  if (!totalNumQues) {
    return <Redirect to="/" />;
  } else if (curQuesIndex === totalNumQues) {
    //If the quiz is finished it will redirect Results component
    return <Redirect to="/results" />;
  }

  //Scores are being updated based off of user selections

  const updatePoints = () => {
    //This action updates the score based on points associated with the tracks

    if (selAnsPoints.length) {
      //button background settings
      setBtnColor("purple-400");
      /*Adds the selected answer points object to history
      Currently there is an err where you lose changes if you 
      don't select everything. Also looses history if you change ans*/
      if (selAnsPoints === pointHistory[curQuesIndex - 1]) {
        return null;
      }
      setCurQuesIndex(curQuesIndex + 1);
      let newScores = {};
      selAnsPoints.forEach((point) => {
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
      pointHistory.push(selAnsPoints);
      selAnsHistory.push(selAnsId);
    }
  };

  /*Backscore updates the index of current question
  when clicked to render the previous question.
  It removes the latest points so the score is accurate */
  const backScore = () => {
    setCurQuesIndex(curQuesIndex - 1);
    let newScores = {};
    console.log("pointHistory", pointHistory);
    //LOGIC IS CONFUSING
    pointHistory[curQuesIndex - 1].forEach((point) => {
      console.log("point", point);
      console.log("scores", scores);
      let current = scores[point.track_id];
      const newPoint = JSON.parse(point.points);
      newScores = {
        ...newScores,
        [point.track_id]: current - newPoint,
      };
      setScores(newScores);
    });
    pointHistory.pop();
    setSelAnsId(selAnsHistory.pop());
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
        src={selAnsId === index + 1 ? Checkbox : UnCheckbox}
        alt="checkbox"
      />
      <button
        key={index}
        onClick={() => {
          setSelAnsPoints(
            points.filter((point) => point.answer_id === answer.id)
          );
          setSelAnsId(answer.id);
          // console.log(index, answers[index].id);
          setBtnColor("purple-900");
        }}
        className={`fira-sans mark w-full p-1 ml-2 text-left hover:bg-purple-100 bg-${
          selAnsId === answer.id ? "purple-100" : "white"
        }`}
      >
        {answer.choice}
      </button>
    </div>
  );

  return (
    <div className="w-1/2 h-screen p-1 m-auto mt-3">
      {/*Current Question number*/}
      <h1 className="pt-4 mt-2 text-xl text-3xl fira-sans">
        Question {curQuesIndex + 1}
      </h1>

      <ProgressBar progress={questions[curQuesIndex].id / totalNumQues} />
      {/*Question Text*/}
      <h1 className="mt-2 protoGray fira-sans">
        {questions[curQuesIndex].question}
      </h1>
      {/*Answers to the Questions*/}
      <div className="flex flex-col w-full mt-4 mb-2">
        {answers.map(
          (answer, index) =>
            answer.question_id === questions[curQuesIndex].id &&
            answerButton(answer, index)
        )}
      </div>
      <div className="flex items-center justify-between m-auto mt-8 questrial actions">
        {/*Back Button
        
          If it isn't the first question, the back button says back and updates history.
           If it is the first question it redirects the user to landing page
        */}
        {curQuesIndex > 0 ? (
          <button
            onClick={backScore}
            className={`questrial halfOpacityPurple border-2 hover:bg-purple-100 px-8 border-purple-200 flex p-2 rounded-lg justify-center items-center`}
          >
            <img
              src={ArrowPurpleL}
              alt="leftArrow"
              size="1.3rem"
              className="m-1"
            />{" "}
            <span className="text-purple-200">Back</span>
          </button>
        ) : (
          <button
            onClick={() => props.history.push("/")}
            className={`questrial halfOpacityPurple border-2 hover:bg-purple-100 px-8 border-purple-200 flex p-2 rounded-lg justify-center items-center`}
          >
            <img
              src={ArrowPurpleL}
              alt="leftArrow"
              size="1.3rem"
              className="m-1"
            />{" "}
            <span className="text-purple-200">Home</span>
          </button>
        )}
        <span className="text-gray-600">{`${questions[curQuesIndex].id}/${totalNumQues}`}</span>

        {/*Next Button*/}
        <button
          onClick={updatePoints}
          className={`questrial flex bg-${btnColor} hover:bg-purple-100  p-2 px-4 rounded-lg justify-start items-center`}
        >
          <span className="pr-4 text-white">Next</span>
          <img src={ArrowWhiteR} alt="leftArrow" size="1.3rem" />
          {/* <span>Next</span> <ArrowWhiteR /> */}
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
