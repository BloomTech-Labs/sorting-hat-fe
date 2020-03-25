import React from "react";
import { connect } from "react-redux";
import BarGraph from "./BarGraph";

function Results({ scores }) {
  return (
    <div className="results-wrapper">
      <BarGraph />
    </div>
  );
}
const mapStateToProps = state => {
  return { scores: state.scores };
};
export default connect(mapStateToProps, {})(Results);
