import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

//* Redux
import { connect } from "react-redux";
import { setScores } from "../redux/actions/setScores";
import { setSelectedAnswers } from "../redux/actions/setSelectedAnswers";

//* Components
import ProgressBar from "./ProgressBar";
import Header from "./Header";
import styled from "styled-components";
// Styled Buttons Components
import { GrayedNextBtn, BackBtn, SelectedNextBtn } from "./buttons/styledButtons";


//Styled Button Components
// import SelectedNextBtn from "../components/buttons/styledButtons";
// import GrayedNextBtn from "../components/buttons/styledButtons";
// import BackBtn from "../components/buttons/styledButtons";


//* Checkbox Images
import Frame from "../img/Frame.svg";
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
  const [selAnswer, setSelAnswer] = useState(false); //Is True if the user has selected an answer. Do you confuse with setSelectedAnswer from state
  const [btnColor, setBtnColor] = useState("purple-400");

  //May need to create a cap on this later if too many questions
  //are added to the back end.
  const totalNumQues = questions.length;
  //  1 questions.length ; slot this in to fix quiz instead of 1

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

  window.document.addEventListener("keydown", function (e) {
    // console.log('e.key:', e);
    // shortcut is implemented for enter and tab key
    if (e.keyCode === 9 || 13 || 32) {
      updateSelAnswers();
    }
  });

  //Scores are being updated based off of user selections

  const updateSelAnswers = () => {
    //This action updates the score based on points associated with the tracks
    const existingNextAns = questionAnswers.find(
      (answer) => answer.question_id === questions[curQuesIndex].id + 1
    );
    setSelAnswer(existingNextAns ? existingNextAns : false);
    // setBtnColor("purple-400");
    if (selAnswer) {
      //button background settings
      setBtnColor("primary");
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
    setBtnColor("primary");
    setSelAnswer(
      questionAnswers.find(
        (answer) => answer.question_id + 1 === questions[curQuesIndex].id
      )
    );
  }
  //todo use like a useEffect, (not reRendering component)
  // function highlightButton(answerBtn) {
  //   if (selAnswer && answerBtn && selAnswer.id === answerBtn.id) {
  //     return "purple-100";
  //   } else {
  //     return "white";
  //   }
  // }

  //todo use like a useEffect, (not reRendering component)
  function checkBoxButton(answerBtn, index) {
    if (
      (selAnswer && answerBtn && selAnswer.id === answerBtn.id) ||
      selAnswer.id === index + 1
    ) {
      return Checkbox;
    } else if (!selAnswer) {
      return Frame;
    } else {
      return UnCheckbox;
    }
  }

  //* renders buttons for each answer
  //Checkbox and index define relationship with the button and image
  const answerButton = (answer, index) => (
    <button
      key={`div-${index}`}
      className="ansBtn flex items-center justify-start w-full mt-1 fira-sans mb-5 hover:bg-complimentary"
      cy={`answer-${index}`}
      onClick={() => {
        setSelAnswer(answer);
        setBtnColor("primary");
      }}
    >
      {/* Changes based off of whether it is selected or not. 
			Checkbox contains the id of the current selected answer.
			If the current question matches the id stored as checkbox, a 
			checkbox is displayed.
			*/}
      <img src={checkBoxButton(answer, index)} alt="checkbox" />
      <div
        key={index}
        className={`fira-sans mark w-full p-1 ml-2 text-left`}
      // className={`fira-sans mark w-full p-1 ml-2 text-left hover:bg-purple-100 bg-${highlightButton(
      //   answer,
      //   index
      // )}`}
      >
        {answer.choice}
      </div>
    </button>
  );
  return (

    <div className="mr-8 ml-8">
      <div className="flex flex-col justify-center items-center md:max-h-screen md:h-screen mt-20 md:m-auto text-sm lg:text-2xl">
        <Header />
        {/* <div className="lg:w-1/2 p-2 m-auto  lg:mt-40"> */}

        <div className="lg:w-1/2 p-2 mt-10 w-full">
          {/*Current Question number*/}
          <h1 className="pt-4 mt-2 fira-sans text-gray-700 text-2xl md:text-3xl lg:text-protoGray">
            Question {curQuesIndex + 1}
          </h1>
          <ProgressBar progress={questions[curQuesIndex].id / totalNumQues} />

          {/*Question Text*/}
          <h1 className="mt-2 text-black lg:text-black fira-sans" cy="question">
            {questions[curQuesIndex].question}
          </h1>
          <p className="text-xs text-gray-700 italic">Select one</p>

          {/*Answers to the Questions*/}
          <div className="flex flex-col w-full mt-4 mb-2 py-5 text-sm lg:text-lg">
            {answers.map(
              (answer, index) =>
                answer.question_id === questions[curQuesIndex].id &&
                answerButton(answer, index)
            )}
          </div>
          {/*  */}
          <div className="flex items-center justify-between m-auto mt-10 mb-16 questrial actions">
            {/*Back Button
              If it isn't the first question, the back button says back and updates history.
              If it is the first question it redirects the user to landing page*/}
            <button
              onClick={() => curQuesIndex > 0 ? handleBack() : props.history.push("/")}
              style={BackBtn}
            >
              <img
                src={ArrowPurpleL}
                alt="leftArrow"
                size="1.3rem"
                className="pr-4"
              />
              <span className="text-purple-100 text-lg">{curQuesIndex > 0 ? "Back" : "Home"}</span>
            </button>
            <span className="text-gray-700 text-lg">{`${questions[curQuesIndex].id}/${totalNumQues}`}</span>

            {/*Next Button*/}

            <button
              onClick={updateSelAnswers}
              cy="nextBtn"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "questrial",
                border: "1px solid",
                borderRadius: "10px",
                width: "96px",
                height: "36px",
                color: "white",
                background: `${selAnswer ? "#7a11ff" : "#bd88ff"}`
              }}
            >
              <span className="text-white text-lg">Next</span>
              <img className="pl-4" src={ArrowWhiteR} alt="rightArrow" size="1.3rem" />
            </button>
          </div>
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
