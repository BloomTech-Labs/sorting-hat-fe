import React from "react";
import { connect } from "react-redux";
import BarGraph from "./BarGraph";

function Results({ scores }) {
  return (
    <div className="flex">
      <BarGraph />
    </div>
  );
}
const mapStateToProps = state => {
  return { scores: state.scores };
};
export default connect(mapStateToProps, {})(Results);
