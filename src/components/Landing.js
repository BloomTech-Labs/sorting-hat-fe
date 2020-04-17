import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../redux/actions/getQuestions";
import { getAnswers } from "../redux/actions/getAnswers";
import { getPoints } from "../redux/actions/getPoints";
import { getTracks } from "../redux/actions/getTracks";
import { Link, Redirect } from "react-router-dom";
import ParticleTesting from "./ParticleTesting";

import Header from "./Header";

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
    <div className="max-h-screen pt-10 mx-6">
      <Header />
      <ParticleTesting />
      {/* // md:justify-center */}
      {/* Make left aligned */}
      {/*Make Hamburger aligned with button edge and line on mobile */}
      {/*Make line height smaller on Landing for header*/}
      <section className="flex flex-col flex-wrap justify-between p-4 sm:m-auto lg:m-auto sm:mt-40 lg:w-1/4 sm:w-1/3 mt-20">
        <h2 className="z-10 pt-2 pb-2 mb-1 text-4xl font-bold border-b-4 border-purple-200 lg:text-5xl fira sans">
          Discover the Tech Career for You
        </h2>
        <p className="hidden sm:block">Small Page Active</p>
        <p className="hidden md:block"> Md Page Active</p>
        <p className="hidden lg:block"> Lg Page Active</p>
        <p className="mt-5 mb-5 text:xl lg:text-2xl fira-sans">
          Take our 5 minute survey to discover which tech field would be right
          for you. Discover the opportunity at your fingertips.
        </p>
        <Link
          to="/quiz"
          className="rounded-lg z-10 w-full px-20 py-2 self-end text-center lg:auto text-white bg-purple-900 border border-purple-900 pointer-events-auto fira-sans hover:bg-purple-700"
        >
          Start Quiz
        </Link>
      </section>
      {/* <About /> */}
    </div>
  );
}

export default connect(null, {
  getQuestions,
  getAnswers,
  getTracks,
  getPoints,
})(Landing);
