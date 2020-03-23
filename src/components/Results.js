import React from "react";
import { connect } from "react-redux";

function Results() {
  return (
    <div className="results-wrapper">
      <h2>Results</h2>
    </div>
  );
}
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {})(Results);
