import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../redux/actions/getQuestions";
import { getAnswers } from "../redux/actions/getAnswers";
import { getPoints } from "../redux/actions/getPoints";
import { getTracks } from "../redux/actions/getTracks";
import { Link, Redirect } from "react-router-dom";
import ParticleTesting from "./ParticleTesting";

// import Header from "../components/Header";

function Landing(props) {
  const { getQuestions, getAnswers, getTracks, getPoints } = props;

  useEffect(() => {
    getQuestions();
    getAnswers();
    getTracks();
    getPoints();
  }, []);
  if (props.location.state) {
    return <Redirect to="/quiz" />;
  }
  return (
    <>
      <ParticleTesting className="fixed top-0 left-0 w-full h-full particle-wrapper" />

      <section className="flex flex-col flex-wrap lg:justify-center p-4 m-auto mt-40 lg:w-1/4 ">
        <h2 className="z-10 pt-2 pb-2 mb-1 text-4xl font-bold text-center border-b-4 border-purple-200 lg:text-5xl fira sans">
          Discover the Tech Career for You
        </h2>
        <p className="mt-5 mb-5 text:xl lg:text-2xl fira-sans">
          Take our 5 minute survey to discover which tech field would be right
          for you. Discover the opportunity at your fingertips.
        </p>
        <Link
          to="/quiz"
          className="z-10 w-full px-20 py-2 mt-4 text-center self-end lg:auto text-white bg-purple-900 border border-purple-900 rounded pointer-events-auto fira-sans hover:bg-purple-700"
        >
          Start Quiz
        </Link>
      </section>
      {/* <About /> */}
    </>
  );
}

export default connect(null, {
  getQuestions,
  getAnswers,
  getTracks,
  getPoints,
})(Landing);
