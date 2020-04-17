import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function BarGraph({ scores, tracks, top, setTrack }) {
  return (
    <div className="w-4/5 h-full m-10">
      <div className="flex h-56">
        <div className="flex justify-around w-full h-full">
          {Object.entries(scores).map((e, i) => (
            <div
              key={e[0]}
              className="flex flex-col-reverse items-center justify-start w-full h-full m-auto rounded-lg"
            >
              <div
                className="flex flex-col-reverse w-1/2 h-full text-center justify-baseline"
                onClick={() => setTrack(tracks[i])}
              >
                {tracks[i].name === "Full Stack" ? (
                  <p className="pt-1 questrial">Web</p>
                ) : (
                  <p className="pt-1 questrial">{tracks[i].name}</p>
                )}
                {/* <p className="pt-1 questrial">{tracks[i].name}</p> */}
                <div
                  className={`h-56 border-solid border-purple-900 rounded-lg duration-1000 w-full ease-in-out flex justify-center 
                  bg-purple-100`}
                  style={{
                    height: `${e[1] * 2 === 0 ? 3 : e[1] * 2}%`,
                  }}
                />
                <div className="flex justify-around w-full m-auto text-center x-axis">
                  <p className="text-center">{`${Math.round(e[1] * 2)}%`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
	return {
		scores: state.scores,
		tracks: state.tracks
	};
};
export default withRouter(connect(mapStateToProps, {})(BarGraph));
