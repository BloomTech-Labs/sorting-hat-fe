import {
  QUESTION_GET_START,
  QUESTION_GET_SUCCESS,
  QUESTION_GET_FAIL
} from "../constants";

const initialState = {
  isFetching: false,
  questions: ["question1", "question2", "question3"],
  error: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case QUESTION_GET_START:
      return { ...state, isFetching: true, error: false };
    case QUESTION_GET_SUCCESS:
      return { ...state, isFetching: false, questions: payload };
    case QUESTION_GET_FAIL:
      return { ...state, isFetching: false, error: payload };

    default:
      return state;
  }
};
