import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import BarGraph from "./BarGraph";
import ArrowWhiteR from "../img/ArrowWhiteR.svg";
import ArrowPurpleL from "../img/ArrowPurpleL.svg";

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
    setSelectedTrack(tracks.find((track) => track.id == highest.track));
  }, []);

  if (!tracks.length) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {/*Retake Quiz Button*/}
      <div className="noto-sans justify-center p-1 my-8 mx-5 pt-2 max-w-sm">
        <div className="flex justify-start py-1 pt-2 pr-1 my-8 mr-5 ">
          <Link
            to="/quiz"
            className={`questrial halfOpacityPurple border-2 border-purple-200 flex p-2 px-12 rounded justify-center items-center`}
          >
            <img
              src={ArrowPurpleL}
              alt="leftArrow"
              size="1.3rem"
              className="m-1"
            />{" "}
            <span className="text-purple-200">Retake Quiz</span>
          </Link>
        </div>
      </div>

      {/*Results Body*/}
      <div className="flex items-center justify-center noto-sans">
        <section className="max-w-5xl m-10 border-black noto-sans flex-column">
          <h2 className="text-5xl font-bold text-black border-b-2 ">Results</h2>
          <div className="flex justify-center text-lg questrial flex-column">
            <BarGraph top={selectedTrack} setTrack={setSelectedTrack} />
          </div>

          <div className="container mt-5">
            <h2 className="text-5xl font-bold border-b-2 fira-sans">
              {"  "} {selectedTrack.name} Traits
            </h2>
            {/* This View Courses button needs to be inline with the H2 above ↑ */}
            {/* <div className="inline-flex px-1 py-1 pt-2 mx-5 my-8">
							<Link
								to="/courses"
								className="flex bg-purple-900 hover:bg-purple-100 text-white mr-5 py-0.5 px-10 border border-purple-900 rounded align-baseline"
							>
								<i className="material-icons">arrow_left</i>
								<span className="questrial">View Courses</span>
							</Link>
						</div> */}

            <p className="py-3 protoGray noto-sans">
              {selectedTrack.strengths}
            </p>
          </div>
          <div className="flex-col items-center justify-center noto-sans">
            <h2 className="self-start text-5xl font-bold fira-sans">
              Learn More
            </h2>
            <div className="flex justify-center py-2">
              <iframe
                width="560"
                height="315"
                src={selectedTrack.link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* {selectedTrack. ? trackInfo.trackVideo : } */}
            </div>
          </div>
          <div>
            <h2 className="mb-1 text-5xl font-bold text-black border-b-2 fira-sans">
              Discover Other Tracks
            </h2>
            {/*I need to axios all this info*/}
            {tracks.map((el) => {
              if (el.id != selectedTrack.id) {
                return (
                  <div
                    key={el.id}
                    className="py-1 font-bold resultsLinkColor"
                    onClick={() => setSelectedTrack(el)}
                  >
                    {el.name}
                    <span className="font-normal resultsLinkColor">
                      {" "}
                      - {el.shortDesc}
                    </span>
                  </div>
                );
              }
            })}
          </div>

          {/* Bottom Buttons Section ↓ */}

          <section className="flex flex-row justify-between">
            <div className="flex justify-start py-1 pt-2 pr-1 my-8 mr-5 ">
              <Link
                to="/quiz"
                className={`questrial halfOpacityPurple border-2 border-purple-200 flex p-2 px-12 rounded justify-center items-center`}
              >
                <img
                  src={ArrowPurpleL}
                  alt="leftArrow"
                  size="1.3rem"
                  className="m-1"
                />{" "}
                <span className="text-purple-200">Retake Quiz</span>
              </Link>
            </div>
            <div className="flex justify-end py-1 pt-2 pl-1 my-8 ml-5">
              <Link
                to="/courses"
                className="flex bg-purple-900 hover:bg-purple-100 text-white py-0.5 px-10 border border-purple-900 rounded align-baseline"
              >
                <span className="flex items-center justify-end questrial">
                  View Courses
                </span>
                <img
                  src={ArrowWhiteR}
                  alt="rightArrow"
                  size="1.3rem"
                  className="m-1"
                />{" "}
              </Link>
            </div>
          </section>
        </section>
      </div>
      {/*Bottom Nav Bar */}
    </>
  );
}

//Redux Interface
const mapStateToProps = (state) => {
  return {
    scores: state.scores,
    tracks: state.tracks,
  };
};
export default connect(mapStateToProps, {})(Results);
