import React from "react";
// import Header from "./Header";
import { Link } from "react-router-dom";
import ArrowWhiteR from "../img/ArrowWhiteR.svg";
import ArrowPurpleL from "../img/ArrowPurpleL.svg";
import styled from "styled-components";

// This hover color needs to be worked on to apply to the whole button in the same manner as quiz
const ViewCoursesBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: questrial;
  background: #7a11ff;
  border: 1px solid;
  border-radius: 10px;
  width: 167px;
  height: 36px;
  color: white;
  &:hover {
    color: #bd88ff;
    text-decoration: none;
  }
`;

// This hover color needs to be worked on to apply to the whole button in the same manner as quiz
const TakeQuizBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: questrial;
  background: white;
  border: 1px solid;
  border-radius: 10px;
  width: 141px;
  height: 36px;
  color: #bd88ff;
  &:hover {
    color: #7a11ff;
    text-decoration: none;
  }
`;

// const SelectedNextBtn = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// font-family: questrial;
// background: #7A11FF;
// border: 1px solid;
// border-radius: 10px;
// width: 96px;
// height: 36px;
// color: white;
// &:hover {
//   color: #BD88FF;
//   text-decoration: none;
// }
// `;

// This background needs to be 50% transparency
// const GrayedNextBtn = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// font-family: questrial;
// background: #7A11FF;
// border: 1px solid;
// border-radius: 10px;
// width: 96px;
// height: 36px;
// color: white;
// &:hover {
//   color: #BD88FF;
//   text-decoration: none;
// }
// `;

// const BackBtn = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// font-family: questrial;
// background: white;
// border: 1px solid;
// border-radius: 10px;
// width: 96px;
// height: 36px;
// color: #BD88FF;
// &:hover {
//   color: #7A11FF;
//   text-decoration: none;
// }
// `;

const Courses = () => {
  return (
    <div>
      <h1 className=" protoGray fira-sans">
        Work in progress come back later ♥
      </h1>

      {/* This is where i chop the button like it's a stolen escalade  */}
      <Link to="/">
        <ViewCoursesBtn>
          <span>View Courses</span>
          <img
            src={ArrowWhiteR}
            alt="rightArrow"
            size="1.3rem"
            className="ml-4"
          />
        </ViewCoursesBtn>
      </Link>

      <Link to="/">
        <TakeQuizBtn>
          <img
            src={ArrowPurpleL}
            alt="leftArrow"
            size="1.3rem"
            className="pr-5"
          />
          <span>Take Quiz</span>
        </TakeQuizBtn>
      </Link>

      <Link to="/">
        <TakeQuizBtn>
          <img
            src={ArrowPurpleL}
            alt="leftArrow"
            size="1.3rem"
            className="pr-4"
          />
          <span>Retake Quiz</span>
        </TakeQuizBtn>
      </Link>

      {/* <Link to="/">
        <SelectedNextBtn>
          <span>Next</span>
          <img
            src={ArrowWhiteR}
            alt="rightArrow"
            size="1.3rem"
            className="ml-4"
          />
        </SelectedNextBtn>
      </Link>

      <Link to="/">
        <BackBtn>
          <span>Next</span>
          <img
            src={ArrowWhiteR}
            alt="rightArrow"
            size="1.3rem"
            className="ml-4"
          />
        </BackBtn>
      </Link> */}
    </div>
  );
};

export default Courses;
