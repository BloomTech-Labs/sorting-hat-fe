import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import BarGraph from "./BarGraph";
//We need to have the endpoints from the backend

function Results({ scores, tracks }) {
  const [selectedTrack, setSelectedTrack] = useState({});
  useEffect(() => {
    let highest = { track: null, score: 0 };
    for (let score in scores) {
      if (scores[score] > highest.score) {
        highest = { track: score, score: scores[score] };
      }
    }
    setSelectedTrack(tracks.find(track => track.id == highest.track));
  }, []);
  // id: 4
  // name: "IOS"
  // description: "iOS Developers"
  // shortDesc: "Develop mobile apps for iOS"
  // link: "https://lambdaschool.com/courses/ios-development"
  // strengths: "quality following beautiful design characteristics."
  // toggle: true
  if (!selectedTrack) {
    return <Redirect to="/quiz" />;
  }
  return (
    <>
      <div className="flex px-1 py-1 my-8 items-start mx-5 pt-2">
        <Link
          to="/quiz"
          className="bg-red-600 hover:bg-red-500 text-white mr-5 py-0.5 px-10 border border-red-700 rounded"
        >
          <i className="material-icons">arrow_left</i>
          <span>Retake Quiz</span>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <section className="flex-column m-10 border-black max-w-5xl">
          <h2 className="font-bold text-3xl text-black border-b-2 p-3">
            Results
          </h2>
          <div className="flex justify-center flex-column">
            <BarGraph top={selectedTrack} />
          </div>
          <div className="container mt-5">
            <h2 className="font-bold text-xl p-3 border-b-2">
              You are {"  "} {selectedTrack.name}
            </h2>
            <p className="py-3">{selectedTrack.strengths}</p>
          </div>
          <div className="flex-col justify-center items-center">
            <h2 className="font-bold text-xl self-start p-3">Learn More</h2>
            <div className="flex justify-center py-2">
              {selectedTrack.link}
              {/* {selectedTrack. ? trackInfo.trackVideo : } */}
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl text-black border-b-2 p-3 mb-1">
              Discover Other Tracks
            </h2>
            {/*I need to axios all this info*/}
            {tracks.map(el => {
              if (el.id != selectedTrack.id) {
                return (
                  <div
                    className="font-bold py-1"
                    onClick={() => setSelectedTrack(el)}
                  >
                    {el.name}
                    <span className="text-gray-800 font-normal">
                      {" "}
                      - {el.shortDesc}
                    </span>
                  </div>
                );
              }
            })}
          </div>
        </section>
      </div>

      <div className="flex justify-center px-1 py-1 my-8 mx-5 pt-2">
        <Link
          to="/quiz"
          className="bg-red-600 hover:bg-red-500 text-white mr-5 py-0.5 px-10 border border-red-700 rounded align-baseline"
        >
          <i className="material-icons">arrow_left</i>
          <span>Retake Quiz</span>
        </Link>
      </div>
    </>
  );
}

//Redux Interface
const mapStateToProps = state => {
  return {
    scores: state.scores,
    tracks: state.tracks
  };
};
export default connect(mapStateToProps, {})(Results);
