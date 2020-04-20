import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header";

// Redux
import { connect } from "react-redux";

//SVG Images
import ArrowWhiteR from "../img/ArrowWhiteR.svg";
import ArrowPurpleL from "../img/ArrowPurpleL.svg";

// BarGraph
import BarGraph from "./BarGraph";
import { setSelectedAnswers } from "../redux/actions/setSelectedAnswers";
//We need to have the endpoints from the backend

function Results({ scores, tracks, setSelectedAnswers }) {
  const [selectedTrack, setSelectedTrack] = useState({});

  useEffect(() => {
    let highest = { track: null, score: 0 };
    for (let score in scores) {
      if (scores[score] > highest.score) {
        highest = { track: score, score: scores[score] };
      }
    }
    setSelectedTrack(
      tracks.find((track) => track.id === JSON.parse(highest.track) + 1)
    );
    setSelectedAnswers([]);
  }, []);

  if (!tracks.length) {
    return <Redirect to="/" />;
  }
  return (
    <div className="mr-8 ml-8 mt-32 text-xs sm:text-sm md:text-lg lg:text-2xl">
      <Header />
      {/*Results Body*/}
      <div className="flex items-center justify-center noto-sans">
        <section className="max-w-3xl m-10 border-black noto-sans flex-column">
          <h2 className="pb-1 font-bold text-black border-b-2 lg:text-3xl ">
            Results
          </h2>
          <div>
            <p className="py-3 protoGray noto-sans mb-6">
              We sorted you into these categories with your primary strengths in
              <span className="font-bold">
                {"  "} {selectedTrack.name}
              </span>
              . Take this into consideration all tracks and percentages, and
              remember this is just a quiz. Follow your heart.
            </p>
          </div>
          <div className="flex justify-center text-lg questrial flex-column mb-16">
            <BarGraph top={selectedTrack} setTrack={setSelectedTrack} />
          </div>
          <div>
            <h2 className="pb-1 border-b-2 fira-sans lg:lg:text-3xl">
              {selectedTrack.name}
            </h2>
            <p className="py-3 protoGray noto-sans mb-20">
              {selectedTrack.description}
            </p>
          </div>

          {/* Selected Track Name Traits */}
          <div className="container mt-5">
            <h2 className="pb-1 border-b-2 fira-sans lg:text-3xl">
              {"  "} {selectedTrack.name} Traits
            </h2>
            {/* This View Courses button needs to be inline with the H2 above ↑ */}

            <p className="py-3 protoGray noto-sans mb-20">
              {selectedTrack.strengths}
            </p>
          </div>
          <div className="flex-col items-center justify-center noto-sans mb-10">
            <h2 className="pb-1 self-start fira-sans text-3xl">Learn More</h2>
            <div className="flex justify-center py-2 mb-20">
              <iframe
                width="100%"
                height="315"
                src={selectedTrack.link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* {selectedTrack. ? trackInfo.trackVideo : } */}
            </div>
          </div>
          <div>
            <h2 className="pb-1 mb-2 text-black border-b-2 fira-sans text-3xl">
              Discover Other Tracks
            </h2>
            {/*I need to axios all this info*/}
            {tracks.map((el) => {
              if (el.id != selectedTrack.id) {
                return (
                  <div
                    key={el.id}
                    className="hover:underline py-3 newBorderColor no-underline "
                    onClick={() => setSelectedTrack(el)}
                    cy="trackLink"
                  >
                    {el.name}
                    <span className="hover:underline noto-sans cursor-pointer newBorderColor no-underline">
                      {" "}
                      - {el.shortDesc}
                    </span>
                  </div>
                );
              }
            })}
          </div>

          {/* Bottom Buttons Section ↓ */}

          <section className="flex flex-row justify-between mt-20">
            <div className="flex justify-start py-1 pt-2 pr-1 my-8 mr-5 ">
              <Link
                to="/quiz"
                className={`border-2 border-purple-100 hover:border-purple-900 flex p-2 px-8 rounded-lg justify-center items-center`}
              >
                <img
                  src={ArrowPurpleL}
                  alt="leftArrow"
                  size="1.3rem"
                  className="pr-4 m-1"
                />
                <span className="text-purple-100 questrial">Retake Quiz</span>
              </Link>
            </div>
            <div className="flex justify-end py-1 pt-2 pl-1 my-8 ml-5">
              <Link
                to="/courses"
                className="flex align-baseline justify-between bg-purple-900 hover:bg-purple-100 text-white py-0.5 px-4 border border-purple-900 rounded-lg "
              >
                <span className="flex items-center justify-end questrial">
                  View Courses
                </span>
                <img
                  src={ArrowWhiteR}
                  alt="rightArrow"
                  size="1.3rem"
                  className="pl-4 m-1"
                />{" "}
              </Link>
            </div>
          </section>
        </section>
      </div>
      {/*Bottom Nav Bar */}
    </div>
  );
}

//Redux Interface
const mapStateToProps = (state) => {
  return {
    scores: state.scores,
    tracks: state.tracks,
  };
};
export default connect(mapStateToProps, { setSelectedAnswers })(Results);
