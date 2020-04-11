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
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	},
	jakeQuestionAnswers:{},
	error: false,
};
/*
{points: "3.10", answer_id: 1, track_id: 1, id: 1}
1: {points: "2.70", answer_id: 1, track_id: 2, id: 2}
2: {points: "1.90", answer_id: 1, track_id: 3, id: 3}
3: {points: "2.50", answer_id: 1, track_id: 4, id: 4}
4: {points: "3.70", answer_id: 1, track_id: 5, id: 5}
5: {points: "4.80", answer_id: 2, track_id: 1, id: 6}
6: {points: "4.20", answer_id: 2, track_id: 2, id: 7}
7: {points: "4.50", answer_id: 2, track_id: 3, id: 8}
8: {points: "4.50", answer_id: 2, track_id: 4, id: 9}
9: {points: "2.50", answer_id: 2, track_id: 5, id: 10}
*/
/*Jake question answers example structure
jakeQuestionAnswers
questionid:{
	question: "Which describes your preferred work environment?"
	id: 1
	answers:{
	answerid:{
		choice: "Interacting with people, primarily with people that use your product",
		points:{
			points_id:{points: "3.10", track_id: 1, },
			{points: "2.70", track_id: 2, id: 2},
			{points: "1.90", track_id: 3, id: 3},
			{points: "2.50", track_id: 4, id: 4},
			{points: "3.70",  track_id: 5, id: 5}
		},
		selected:false
	},}
}
}*/
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
