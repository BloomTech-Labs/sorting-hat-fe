import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import "../styles/landing.css";

const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

function Landing() {
  return (
    <div>
      <div className="particle-wrapper">
        <Particles params={particleOpt} />
      </div>
      <div className="landing-wrapper">
        <section className="flex flex-wrap w-3/6 m-auto mt-20 ">
          <div className="flex flex-wrap">
            <div className="relative w-full p-10 rounded shadow mb- bg-gray">
              <span className="absolute text-6xl italic text-gray-300 right-10"></span>
              <h2 className="absolute relative z-10 text-2xl text-gray-900">
                Discover the Tech Career for You
              </h2>
              <p className="text-gray-700">
                Take our 5 minute survey to discover which tech field would be
                right for you. Discover the opportunity at your fingertips.
              </p>
            </div>
          </div>
        </section>

        <div className="flex px-1 py-1 justify-center">
          <Link
            to="/quiz"
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-20 border border-red-700 rounded"
          >
            Start Quiz
          </Link>
        </div>
        {/* flex flex-wrap w-3/6 m-auto mt-20 bg-blue-500relative w-full p-10 rounded
      shadow mb- bg-grayabsolute text-6xl italic text-gray-300 right-10absolute
      relative z-10 text-2xl text-gray-900block h-0 mt-5 mb-6 border-t-2
      border-red-500 w-{" "} */}
      </div>
    </div>
  );
}
export default Landing;
// export default connect(null, {})(Landing);
