import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Header from "./Header";

// Redux
import { connect } from "react-redux";

//SVG Images
import ArrowWhiteR from "../img/ArrowWhiteR.svg";
import ArrowPurpleL from "../img/ArrowPurpleL.svg";
import { ViewCoursesBtn, TakeQuizBtn } from "./buttons/styledButtons";

// BarGraph
import BarGraph from "./BarGraph";
import { setSelectedAnswers } from "../redux/actions/setSelectedAnswers";

//We need to have the endpoints from the backend

function Results({ scores, tracks, setSelectedAnswers }) {
  const [selectedTrack, setSelectedTrack] = useState({});

  let history = useHistory();
  const sectHeadStyle = " fira-sans text-2xl lg:text-3xl ";
  const sectBodyStyle =
    " py-3 protoGray open-sans text-base lg:text-lg leading-loose ";
  const sectDivider = " border-b-2 pb-1";
  const linkedStyle =
    " hover:underline newBorderColor no-underline text-sm lg:text-lg open-sans ";

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
    <div className="mr-8 ml-8 mt-20 lg:mt-32 text-xs md:text-lg lg:text-2xl">
      <Header />
      {/*Results Body*/}
      <div className="flex items-center justify-center open-sans">
        <section className="max-w-3xl mt-20 lg:m-10 border-black flex-column">
          <h2
            className={
              "open-sans font-bold text-black text-2xl lg:text-3xl text-left align-bottom" +
              sectDivider
            }
          >
            Results
          </h2>
          <div>
            <p className={sectBodyStyle + "pb-16"}>
              We sorted you into these categories with your primary strengths in
              <span className="font-bold">
                {"  "} {selectedTrack.name}
              </span>
              . Take this into consideration all tracks and percentages, and
              remember this is just a quiz. Follow your heart.
            </p>
          </div>
          <div className="flex justify-center text-lg questrial flex-column pb-16 lg:pb-32">
            <BarGraph top={selectedTrack} setTrack={setSelectedTrack} />
          </div>

          {/* Selected Track Name */}

          <div>
            <div className="flex border-b-2 justify-between align-baseline">
              <h2 className={sectHeadStyle}>{selectedTrack.name}</h2>
              <div>
                {/* <button
                  onClick={() => history.push("/courses")}
                  // className="flex align-baseline justify-between bg-primary hover:bg-purple-100 text-white py-0.5 px-4 border border-primary rounded-lg "
                  cy="coursesBtnB"
                  style={ViewCoursesBtn}
                >
                  <span className="hidden flex items-center justify-end questrial text-sm lg:text-lg">
                    View Courses
                  </span>
                  <img
                    src={ArrowWhiteR}
                    alt="rightArrow"
                    size="1.3rem"
                    className="pl-4 m-1"
                  />{" "}
                </button> */}

                {/* <Link to="/courses"
                  className="flex align-baseline justify-end">
                  <img
                    src={CoursesButton}
                    alt="testing"
                  />
                </Link> */}
              </div>
            </div>
            <p className={sectBodyStyle + "pb-24"}>
              {selectedTrack.description}
            </p>
          </div>

          {/* Selected Track Name Traits */}
          <div className="container mt-5">
            <h2 className={sectHeadStyle + sectDivider}>
              {"  "} {selectedTrack.name} Traits
            </h2>
            {/* This View Courses button needs to be inline with the H2 above ↑ */}

            <p className={sectBodyStyle + "pb-24"}>{selectedTrack.strengths}</p>
          </div>
          <div className="flex-col items-center justify-center open-sans">
            <h2 className={sectHeadStyle}>Learn More</h2>
            <div className="flex justify-center py-2 pb-24">
              {/* <img src={VideoPlaceholder} alt="course information video" className="w-full" /> */}
              {/* <VideoPlaceholder /> */}
              <iframe
                title="Relevant course information"
                width="100%"
                height="420"
                alt="promotional video"
                src={selectedTrack.link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* <VideoPlaceholder /> */}
              {/* {selectedTrack. ? trackInfo.trackVideo : } */}
            </div>
          </div>
          <div>
            <h2 className={sectHeadStyle + sectDivider}>
              Discover Other Tracks
            </h2>
            {/*I need to axios all this info*/}
            {tracks.map((el) => {
              if (el.id != selectedTrack.id) {
                return (
                  <div
                    key={el.id}
                    className={"py-3 " + linkedStyle}
                    onClick={() => setSelectedTrack(el)}
                    cy={`trackLink-${el.name}`}
                  >
                    {el.name}
                    <span className={"cursor-pointer" + linkedStyle}>
                      {" "}
                      - {el.shortDesc}
                    </span>
                  </div>
                );
              }
            })}
          </div>

          {/* Bottom Buttons Section ↓ */}

          <section className="flex flex-row justify-between  pt- 16 lg:pt-32">
            <div className="flex justify-start py-1 pt-2 pr-1 my-8 mr-5 hidden">
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
                  Retake Quiz
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
                <span className=" hidden flex items-center justify-end open-sans text-sm lg:text-lg">
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
