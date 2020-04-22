import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function BarGraph({ scores, tracks, top, setTrack }) {
  console.log({ scores });
  return (
    <div className="h-full w:full lg:w-4/5 lg:m-10">
      <div className="flex h-64 lg:h-56 justify-around w-full">
          {Object.entries(scores).map((e, i) => (
            <div className="flex flex-col w-full">
              <p className="text-center pb-6">{`${Math.round(e[1] * 2)}%`}</p>
              <div
                key={e[0]}
                className="flex flex-col-reverse items-center justify-start w-full h-full m-auto rounded-lg "
              >
                {console.log(`bar-${tracks[i].name}`)}
                
                <div

                  className="flex flex-col-reverse w-1/2 h-full text-center justify-baseline"
                  cy={`bar-${tracks[i].name}`}
                  onClick={() => setTrack(tracks[i])}
                >
                  <p className="pt-1 questrial whitespace-no-wrap">
                    {tracks[i].name ==="Full Stack"?"Web":tracks[i].name}
                  </p>
              <div
                className={`h-56 border-solid border-primary rounded-lg duration-1000 w-full ease-in-out flex justify-center ${
                  top.id === JSON.parse(e[0]) + 1 ? "bg-primary" : "bg-purple-100"
                  }`}
                style={{
                  height: `${e[1] * 2 === 0 ? 3 : e[1] * 2}%`,
                }}
              />
            </div>
          </div>
        </div>
      ))}
      </div>
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