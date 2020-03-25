import React from "react";
import { connect } from "react-redux";
import BarGraph from "./BarGraph";
import Tracks from "./results/Tracks";

function Results(props) {
  return (
    <div className="flex">
      <BarGraph />
      <Tracks />
    </div>
  );
}
const mapStateToProps = state => {
  return { scores: state.scores };
};
export default connect(mapStateToProps, {})(Results);
