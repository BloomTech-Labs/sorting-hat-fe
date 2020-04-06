import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function BarGraph({ scores, tracks, top }) {
  // console.log({ top });
  const data = [];
  tracks.map((track) => {
    data.push({ track: track.name, score: scores[track.id] });
  });

  // console.log({ scores });
  return (
    <div className="bargraph w-4/5 h-full m-10">
      <div className="flex h-56">
        <div className="flex w-full justify-around border border-red-400 border-solid ">
          {Object.entries(scores).map((e) => (
            <div
              key={e[0]}
              className=" w-full h-full rounded-lg m-auto border flex flex-col-reverse"
            >
              <div
                className="bg-blue h-full border-r border-solid border-pink rounded-lg duration-1000 ease-in-out flex justify-center"
                style={{
                  height: `${e[1] * 3}%`,
                  background: top.id == e[0] ? "lightblue" : "pink",
                }}
              >
                {`${Math.round(e[1] * 3)}%`}
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="x-axis flex justify-around border w-full pl-8 m-auto">
        {tracks.map((track) => (
          <p key={track.id} className={`w-1/${tracks.length} text-center`}>
            {track.name}
          </p>
        ))}
      </section>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    scores: state.scores,
    tracks: state.tracks,
  };
};
export default withRouter(connect(mapStateToProps, {})(BarGraph));
