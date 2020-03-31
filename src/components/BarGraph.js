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

function BarGraph({ scores, tracks }) {
  const data = [];
  tracks.map(track => {
    data.push({ track: track.name, score: scores[track.id] });
  });

  //todo have multiple data arrays for each track, each bars
  console.log({ scores });
  return (
    <div className="bargraph w-4/5 h-full m-10">
      <div className="flex h-full">
        <section className="y-axis flex-col-reverse w-auto border h-full">
          <p>50</p>
          <p>40</p>
          <p>30</p>
          <p>20</p>
          <p>10</p>
          <p>0</p>
        </section>
        <div className="flex w-full justify-around border border-red-400 border-solid ">
          {Object.values(scores).map(e => (
            <div className=" w-full h-full rounded-lg m-auto border flex flex-col-reverse">
              <div
                className="bg-blue h-full border-r border-solid border-pink rounded-lg duration-1000 ease-in-out"
                style={{ height: `${e * 2}%`, background: "pink" }}
              />
            </div>
          ))}
        </div>
      </div>
      <section className="x-axis flex justify-between border w-full pl-8">
        {tracks.map(track => (
          <p>{track.name}</p>
        ))}
      </section>
    </div>
    // <BarChart
    //   width={1000}
    //   height={300}
    //   data={data}
    //   margin={{
    //     top: 5,
    //     right: 30,
    //     left: 20,
    //     bottom: 5
    //   }}
    // >
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="track" />
    //   <YAxis />
    //   <Tooltip />
    //   <Legend />
    //   <Bar
    //     dataKey="score"
    //     fill="#f56565"
    //     // onClick={evt => history.push(`/quiz/${evt.track}`)}
    //   />
    // </BarChart>
  );
}
const mapStateToProps = state => {
  return {
    scores: state.scores,
    tracks: state.tracks
  };
};
export default withRouter(connect(mapStateToProps, {})(BarGraph));
