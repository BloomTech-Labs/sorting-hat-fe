import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

// SVG Images
import ArrowPurpleL from "../img/ArrowPurpleL.svg";
import ArrowWhiteR from "../img/ArrowWhiteR.svg";
import { ViewCoursesBtn, TakeQuizBtn } from "./buttons/styledButtons";
import AboutImage1 from "../img/AboutImage1.svg";
import AboutImage2 from "../img/AboutImage2.svg";
import AboutImage3 from "../img/AboutImage3.svg";

const About = (props) => {
  //Tailwind styles for containers at texttop
  const textCont = "w-full lg:w-1/2";
  const imgStyles = "hidden lg:block lg:w-1/2";

  const { history } = props;
  return (
    <div>
      {history.location.pathname !== "/" ? <Header /> : <></>}
      <div className="flex items-center justify-center mr-8 ml-8 mt-20">
        <div className="flex flex-col m-4 mt-10 max-w-3xl">
          <section className=" mt-4 mb-4 flex">
            <div className={textCont}>
              <h2 className="mb-1 text-2xl lg:text-5xl font-bold text-black border-b-2 open-sans">
                About
            </h2>
              {/* There needs to be more text here below! */}
              <p className="flex-col items-center justify-center text-base lg:text-lg mt-4 pb-24 leading-loose protoGray open-sans">
                Tech Sorting Hat was inspired and built by tech students. We aim
                to have a fun and informative quiz to help potential tech students
                make a decision about their future careers.
            </p>
            </div>
            <img className={imgStyles} src={AboutImage1} />
          </section>

          <section className="flex">
            <img className={imgStyles} src={AboutImage2} />
            <div className={textCont}>
              <h2 className="mb-1 text-2xl lg:text-5xl text-black border-b-2 fira-sans  ">
                Philosophy
            </h2>
              <p className="flex-col items-center justify-center text-base lg:text-lg mt-4 pb-24 leading-loose protoGray open-sans">
                We wanted to showcase the different industries in the tech field
                for people who are seeking an informed decision on which
                subsection to choose. We threw away technical jargon in order to
                show empathy to those outside the industry, and to quiz them based
                on their personality, their technical capabilities. All people are
                capable of pursuing a career in the tech field, and it is our job
                to help find their niche based on their personality.
            </p>
            </div>
          </section>

          <section className=" flex container mt-5 ">
            <div className={textCont}>
              <h2 className="mb-1 text-2xl lg:text-5xl text-black border-b-2 fira-sans  ">
                How
              </h2>
              <p className="flex-col items-center justify-center text-base lg:text-lg mt-4 leading-loose protoGray open-sans">
                We surveyed 70 current tech students, interviewed 13 tech
                students, and 2 tech instructors. We discovered that all tracks in
                the tech field are extremely similar, but subtle differences
                between each emerged from analyzing the data. We created questions
                that do not deal with tech, but relate to how people in different
                tech fields think. Keep in mind, anyone has the capability to
                succeed in any career, and this quiz should not hinder someones
                passion for a particular tech field.
              </p>
            </div>
            <img className={imgStyles} src={AboutImage3} />
          </section>

          <section className="flex flex-row justify-between  pt- 16 lg:pt-32">
            <div className="flex justify-start py-1 pt-2 pr-1 my-8 mr-5 ">
              <button
                onClick={() => history.push("/quiz")}
                //className={`border-2 border-purple-100 hover:border-primary flex p-2 px-6 rounded-lg justify-center items-center`}
                cy="retakeBtn"
                style={TakeQuizBtn}
              >
                {/* class="flex align-baseline justify-between bg-primary hover:bg-purple-100 text-white py-0.5 px-4 border border-primary rounded-lg */}
                <img
                  src={ArrowPurpleL}
                  alt="leftArrow"
                  size="1.3rem"
                  className="pr-4 m-1"
                />
                <span className="text-purple-100 open-sans text-sm lg:text-lg">
                  Take Quiz
                </span>
              </button>
            </div>

            {/* <ViewCourses /> */}
            <div className="flex justify-end py-1 pt-2 pl-1 my-8 ml-5 hidden">
              <button
                onClick={() => history.push("/courses")}
                // className="flex align-baseline justify-between bg-primary hover:bg-purple-100 text-white py-0.5 px-4 border border-primary rounded-lg "
                cy="coursesBtnB"
                style={ViewCoursesBtn}
              >
                <span className="flex items-center justify-end open-sans text-sm lg:text-lg">
                  View Courses
                </span>
                <img
                  src={ArrowWhiteR}
                  alt="rightArrow"
                  size="1.3rem"
                  className="pl-4 m-1"
                />{" "}
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default withRouter(About);

{
  /* <div className="flex justify-start py-1 pt-2 pr-1 my-8 mr-5 ">
            <Link
              to="/quiz"
              className={`border-2 border-purple-100 hover:border-primary  flex p-2 px-8 rounded-lg justify-center items-center rounded-lg`}
            >
              <img
                src={ArrowPurpleL}
                alt="leftArrow"
                size="1.3rem"
                className="pr-4 m-1"
              />{" "}
              <span className="text-purple-100 open-sans">Take Quiz</span>
            </Link>
          </div>  */
}

{
  /* <div className="flex justify-end py-1 pt-2 pl-1 my-8 ml-5">
            <Link
              to="/courses"
              className="flex align-baseline justify-between bg-primary hover:bg-purple-100 text-white py-0.5 px-4 border border-primary rounded btnRound "
            >
              <span className="flex items-center justify-end open-sans">
                View Courses
              </span>
              <img
                src={ArrowWhiteR}
                alt="rightArrow"
                size="1.3rem"
                className="pl-4 m-1"
              />{" "}
            </Link>
          </div> */
}
