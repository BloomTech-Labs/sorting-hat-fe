import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-wrapper">
      <h2>Landing</h2>
      <Link to="/quiz">Start Quiz</Link>
    </div>
  );
}

export default connect(null, {})(Landing);
