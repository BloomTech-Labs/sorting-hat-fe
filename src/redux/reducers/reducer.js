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
} from '../constants';

const initialState = {
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
	scores: {
		1: 5,
		2: 38,
		3: 9,
	},
	error: false,
};

//If axios calls state is a success/failure updates state to match
export default (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case QUESTION_GET_START:
			return {...state, isFetching: true, error: false};
		case QUESTION_GET_SUCCESS:
			return {...state, isFetching: false, questions: payload};
		case QUESTION_GET_FAIL:
			return {...state, isFetching: false, error: payload};

		case ANSWER_GET_START:
			return {...state, isFetching: true, error: false};
		case ANSWER_GET_SUCCESS:
			return {...state, isFetching: false, answers: payload};
		case ANSWER_GET_FAIL:
			return {...state, isFetching: false, error: payload};

		case TRACKS_GET_START:
			return {...state, isFetching: true, error: false};
		case TRACKS_GET_SUCCESS:
			return {...state, isFetching: false, tracks: payload};
		case TRACKS_GET_FAIL:
			return {...state, isFetching: false, error: payload};

		case POINTS_GET_START:
			return {...state, isFetching: true, error: false};
		case POINTS_GET_SUCCESS:
			return {...state, isFetching: false, points: payload};
		case POINTS_GET_FAIL:
			return {...state, isFetching: false, error: payload};

		case SCORE:
			return {
				...state,
				scores: payload,
			};
		default:
			return state;
	}
};
