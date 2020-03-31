import { SCORE } from "../constants";

export const setScores = scores => dispatch => {
  console.log("SCORE");
  dispatch({ type: SCORE, payload: scores });
};
