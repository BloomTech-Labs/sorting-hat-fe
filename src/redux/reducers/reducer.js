import {
  QUESTION_GET_START,
  QUESTION_GET_SUCCESS,
  QUESTION_GET_FAIL,
  ANSWER_GET_START,
  ANSWER_GET_SUCCESS,
  ANSWER_GET_FAIL
} from "../constants";

const initialState = {
  isFetching: false,
  questions: [
    { question: "question1" },
    { question: "question2" },
    { question: "question3" }
  ],
  answers: [],
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

    case ANSWER_GET_START:
      return { ...state, isFetching: true, error: false };
    case ANSWER_GET_SUCCESS:
      return { ...state, isFetching: false, answers: payload };
    case ANSWER_GET_FAIL:
      return { ...state, isFetching: false, error: payload };

    default:
      return state;
  }
};
