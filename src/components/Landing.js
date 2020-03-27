import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import Header from "../components/Header";
const particleOpt = {
  particles: {
    move: {
      speed: 0.8
    },
    color: {
      value: "#FF0000"
    },
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  line_linked: {
    enable: true,
    distance: 120,
    color: "#00FFFF",
    width: 1
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0
        }
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      bubble: {
        distance: 100,
        size: 10
      }
    }
  },
  retina_detect: true
};

function Landing() {
  return (
    <div>
      <Header />
      <div className="particle-wrapper">
        <Particles params={particleOpt} />
      </div>
      <section className="flex flex-wrap w-3/6 m-auto mt-20 ">
        <div className="flex flex-wrap">
          <div className="relative w-full p-10">
            <span className="text-6xl italic text-white right-10"></span>
            <h2 className=" z-10 text-2xl text-white text-center">
              Discover the Tech Career for You
            </h2>
            <p className="text-white playfair-font text-center">
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
  );
}
export default Landing;
// export default connect(null, {})(Landing);
