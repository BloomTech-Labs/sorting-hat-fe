import React from "react";
import { connect } from "react-redux";

function Results({ scores }) {
  return (
    <div className="results-wrapper">
      <h2>Results</h2>
      <h1>fullstack: {scores["fullstack"]}</h1>
      <h1>ios: {scores["ios"]}</h1>
      <h1>android: {scores["android"]}</h1>
      <h1>ux: {scores["ux"]}</h1>
      <h1>ds: {scores["ds"]}</h1>
    </div>
  );
}
const mapStateToProps = state => {
  return { scores: state.scores };
};
export default connect(mapStateToProps, {})(Results);
