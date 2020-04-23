import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as rtl from "@testing-library/react";

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
    POINTS_GET_START,
    POINTS_GET_SUCCESS,
    POINTS_GET_FAIL,
    SCORE,
    SELECTED_ANSWER,
} from "../src/redux/constants";

//* REDUX MIDDLEWARE
import thunk from "redux-thunk";
// import logger from "redux-logger";

const middleware = [thunk];

afterEach(rtl.cleanup);

const startingState = {
    isFetching: false,
    questions: [],
    answers: [],
    tracks: [],
    points: [
        {
            points: 0,
            answer_id: 1,
            track_id: 1,
        },
    ],
    scores: [
        {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
        },
    ],
    questionAnswers: [],
    error: false,
};

function reducer(state = startingState, action) {
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

        case POINTS_GET_START:
            return { ...state, isFetching: true, error: false };
        case POINTS_GET_SUCCESS:
            return { ...state, isFetching: false, points: payload };
        case POINTS_GET_FAIL:
            return { ...state, isFetching: false, error: payload };
        case SELECTED_ANSWER:
            return {
                ...state,
                questionAnswers: payload,
            };
        case SCORE:
            return {
                ...state,
                scores: payload,
            };
        default:
            return state;
    }
}

export function renderWithRedux(
    component,
    { initialState, store = createStore(reducer, initialState, applyMiddleware(...middleware)) } = {}
) {
    return {
        ...rtl.render(<Provider store={store}>{component}</Provider>)
    };
}
