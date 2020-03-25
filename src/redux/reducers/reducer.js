import {
  QUESTION_GET_START,
  QUESTION_GET_SUCCESS,
  QUESTION_GET_FAIL,
  ANSWER_GET_START,
  ANSWER_GET_SUCCESS,
  ANSWER_GET_FAIL,
  TRACKS_GET_START,
  TRACKS_GET_SUCCESS,
  TRACKS_GET_FAIL,
  SCORE
} from "../constants";

const initialState = {
  isFetching: false,
  questions: [
    { question: "question1", id: 1 },
    { question: "question2", id: 2 }
  ],
  answers: [
    { choice: "Nulla et pellentesque, facilisis pede", id: 1, question_id: 1 },
    { choice: "This is an answer to the question", id: 2, question_id: 1 },
    { choice: "Nonummy ante pulvinar", id: 3, question_id: 1 },
    { choice: "Lectus leo", id: 4, question_id: 1 },
    { choice: "This is an answer to the question", id: 5, question_id: 2 },
    { choice: "Amet hendrerit amet, diam arcu et", id: 6, question_id: 2 },
    {
      choice: "Cras eleifend litora, pellentesque donec mus, volutpat libero",
      id: 7,
      question_id: 2
    },
    { choice: "Elit wisi, et senectus etiam", id: 8, question_id: 2 }
  ],
  tracks: [],
  scores: {
    fullstack: 0,
    ios: 0,
    android: 0,
    ux: 0,
    ds: 0
  },
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

    case TRACKS_GET_START:
      return { ...state, isFetching: true, error: false };
    case TRACKS_GET_SUCCESS:
      return { ...state, isFetching: false, tracks: payload };
    case TRACKS_GET_FAIL:
      return { ...state, isFetching: false, error: payload };

    case SCORE:
      return {
        ...state,
        scores: payload
      };
    default:
      return state;
  }
};
