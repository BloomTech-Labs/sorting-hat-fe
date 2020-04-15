import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

//* Redux
import { connect } from "react-redux";
import { setScores } from "../redux/actions/setScores";
import { setSelectedAnswers } from "../redux/actions/setSelectedAnswers";

//* Components
import ProgressBar from "./ProgressBar";
import Header from "./Header";

//* Checkbox Images
import Checkbox from "../img/Checkbox.svg";
import UnCheckbox from "../img/UnCheckbox.svg";

//SVG Images
import ArrowPurpleL from "../img/ArrowPurpleL.svg";
import ArrowWhiteR from "../img/ArrowWhiteR.svg";

function Quiz(props) {
  //Setting State
  const {
    setScores,
    questions,
    answers,
    points,
    setSelectedAnswers,
    questionAnswers,
  } = props;

  //State of the Quiz
  const [curQuesIndex, setCurQuesIndex] = useState(0);
  const [selAnswer, setSelAnswer] = useState(false);
  const [btnColor, setBtnColor] = useState("purple-400");

  //May need to create a cap on this later if too many questions
  //are added to the back end.
  const totalNumQues = 1;
  //   questions.length; slot this in to fix quiz instead of 1

  /* why not initiate setScore with {} instead of this useEffect?? */
  useEffect(() => {
    setScores({});
  }, []);

  if (!totalNumQues) {
    return <Redirect to="/" />;
  } else if (curQuesIndex === totalNumQues) {
    // totalNumQues
    //If the quiz is finished it will redirect Results component

    let totalScores = {};
    questionAnswers.forEach((answer) => {
      const currentPoints = points.filter(
        (point) => point.answer_id === answer.id
      );
      for (const key in currentPoints) {
        const ansTrackPoint = JSON.parse(currentPoints[key].points);
        if (!totalScores[key]) {
          totalScores[key] = 0;
        }
        totalScores = {
          ...totalScores,
          [key]: totalScores[key] + ansTrackPoint,
        };
      }
    });
    setScores(totalScores);
    return <Redirect to="/results" />;
  }

  //Scores are being updated based off of user selections

  const updateSelAnswers = () => {
    //This action updates the score based on points associated with the tracks
    const existingNextAns = questionAnswers.find(
      (answer) => answer.question_id === questions[curQuesIndex].id + 1
    );
    console.log({ selAnswer });
    setSelAnswer(existingNextAns ? existingNextAns : false);
    // setBtnColor("purple-400");
    if (selAnswer) {
      //button background settings
      setBtnColor("purple-900");
      // Adds the selected answer points object to history
      setCurQuesIndex(curQuesIndex + 1);

      const existingAnsIndex = questionAnswers.findIndex(
        (answer) => answer.question_id === selAnswer.question_id
      );
      if (existingAnsIndex !== -1) {
        questionAnswers.splice(existingAnsIndex, 1);
      }
      setSelectedAnswers([
        ...questionAnswers,
        {
          question_id: selAnswer.question_id,
          id: selAnswer.id,
        },
      ]);
    }
  };

  function handleBack() {
    setCurQuesIndex(curQuesIndex - 1);
    setBtnColor("purple-900");
    setSelAnswer(
      questionAnswers.find(
        (answer) => answer.question_id + 1 === questions[curQuesIndex].id
      )
    );
  }
  //todo use like a useEffect, (not reRendering component)
  function highlightButton(answerBtn) {
    if (selAnswer && answerBtn && selAnswer.id === answerBtn.id) {
      return "purple-100";
    } else {
      return "white";
    }
  }

  //todo use like a useEffect, (not reRendering component)
  function checkBoxButton(answerBtn, index) {
    if (
      (selAnswer && answerBtn && selAnswer.id === answerBtn.id) ||
      selAnswer.id === index + 1
    ) {
      return Checkbox;
    } else {
      return UnCheckbox;
    }
  }

  //* renders buttons for each answer
  //Checkbox and index define relationship with the button and image
  const answerButton = (answer, index) => (
    <div
      key={`div-${index}`}
      className="flex items-center justify-start w-full mt-1 fira-sans mb-5"
    >
      {/* Changes based off of whether it is selected or not. 
			Checkbox contains the id of the current selected answer.
			If the current question matches the id stored as checkbox, a 
			checkbox is displayed.
			*/}
      <img src={checkBoxButton(answer, index)} alt="checkbox" />
      <button
        key={index}
        onClick={() => {
          setSelAnswer(answer);
          setBtnColor("purple-900");
        }}
        className={`fira-sans mark w-full p-1 ml-2 text-left hover:bg-purple-100 bg-${highlightButton(
          answer,
          index
        )}`}
      >
        {answer.choice}
      </button>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center max-h-screen h-screen">
      <Header />
      {/* <div className="lg:w-1/2 p-2 m-auto  lg:mt-40"> */}

      <div className="lg:w-1/2 p-2">
        {/*Current Question number*/}
        <h1 className="pt-4 mt-2 text-xl text-4xl fira-sans text-gray-700 lg:text-black">
          Question {curQuesIndex + 1}
        </h1>
        <ProgressBar progress={questions[curQuesIndex].id / totalNumQues} />

        {/*Question Text*/}
        <h1 className="mt-2 text-black lg:text-gray-700 fira-sans text-2xl">
          {questions[curQuesIndex].question}
        </h1>
        <p className="text-xs text-gray-700 italic">Select one</p>

        {/*Answers to the Questions*/}
        <div className="flex flex-col w-full mt-4 mb-2 text-lg py-5">
          {answers.map(
            (answer, index) =>
              answer.question_id === questions[curQuesIndex].id &&
              answerButton(answer, index)
          )}
        </div>
        <div className="flex items-center justify-between m-auto mt-10 mb-16 questrial actions">
          {/*Back Button
        
          If it isn't the first question, the back button says back and updates history.
          If it is the first question it redirects the user to landing page
          */}
          {curQuesIndex > 0 ? (
            <button
              onClick={handleBack}
              className={`questrial border-2 hover:bg-purple-100 p-2 px-4 border-purple-100 flex rounded-lg items-center`}
            >
              <img
                src={ArrowPurpleL}
                alt="leftArrow"
                size="1.3rem"
                className="pr-4"
              />
              <span className="text-purple-100 text-lg">Back</span>
            </button>
          ) : (
            <button
              onClick={() => props.history.push("/")}
              className={`questrial border-2 hover:bg-purple-100 p-2 px-4 border-purple-100 flex rounded-lg items-center`}
            >
              <img
                src={ArrowPurpleL}
                alt="leftArrow"
                size="1.3rem"
                className="pr-4 "
              />
              <span className="text-purple-100 text-lg">Home</span>
            </button>
          )}
          <span className="text-gray-700 text-lg">{`${questions[curQuesIndex].id}/${totalNumQues}`}</span>

          {/*Next Button*/}
          <button
            onClick={updateSelAnswers}
            className={`questrial flex bg-${btnColor} hover:bg-purple-100  p-2 px-4 rounded-lg items-center`}
          >
            <span className="pr-4 text-white text-lg">Next</span>
            <img src={ArrowWhiteR} alt="rightArrow" size="1.3rem" />
          </button>
        </div>
      </div>
    </div>
  );
}

//Redux interface

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    answers: state.answers,
    questionAnswers: state.questionAnswers,
    points: state.points,
  };
};

export default connect(mapStateToProps, { setScores, setSelectedAnswers })(
  Quiz
);
