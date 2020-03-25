import React from "react";
import { connect } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function BarGraph({ scores }) {
  const data = [];

  for (const track in scores) {
    data.push({ track: track, score: scores[track] });
  }

  return (
    <BarChart
      width={500}
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
      <Bar dataKey="score" fill="#f56565" />
    </BarChart>
  );
}
const mapStateToProps = state => {
  return {
    scores: state.scores
  };
};
export default connect(mapStateToProps, {})(BarGraph);
