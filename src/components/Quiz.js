import React, { useState } from "react";
import { connect } from "react-redux";

function Quiz(props) {
  const { questions, history } = props;
  const [num, setNum] = useState(0);
  if (num === questions.length) {
    // alert("RESULTS PAGE");
    history.push("/results");
  }
  return (
    <div className="quiz-wrapper">
      <h1>Quiz</h1>
      <h2>{questions[num]}</h2>
      <button onClick={() => setNum(num + 1)}>Next</button>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};
export default connect(mapStateToProps, {})(Quiz);
