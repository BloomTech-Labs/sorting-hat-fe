import React, { useState } from "react";
import { connect } from "react-redux";
import data from "./trackData";

function Tracks({ scores }) {
  const [selectedTrack, setSelectedTrack] = useState("fullstack");
  return (
    <div className="flex w-1/3 border">
      <ul>
        {Object.keys(scores).map(track => (
          <li onClick={() => setSelectedTrack(track)}>{track}</li>
        ))}
      </ul>
      <div className="m-auto">
        <h2>Track: {data[selectedTrack].name}</h2>
        <h3>Score: {scores[selectedTrack]}</h3>
        <p>Description: </p>
        <p>
          {/* {//todo open new tab} */}
          Link:{" "}
          <a href={`${data[selectedTrack].link}`} target="_blank">
            CLICK ME
          </a>
        </p>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    scores: state.scores
  };
};
export default connect(mapStateToProps, {})(Tracks);
