import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function BarGraph({ scores, history, tracks }) {
  const data = [];
  tracks.map(track => {
    data.push({ track: track.name, score: scores[track.id] });
  });

  //todo have multiple data arrays for each track, each bars

  return (
    <BarChart
      width={1000}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="track" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="score"
        fill="#f56565"
        // onClick={evt => history.push(`/quiz/${evt.track}`)}
      />
    </BarChart>
  );
}
const mapStateToProps = state => {
  return {
    scores: state.scores,
    tracks: state.tracks
  };
};
export default withRouter(connect(mapStateToProps, {})(BarGraph));
