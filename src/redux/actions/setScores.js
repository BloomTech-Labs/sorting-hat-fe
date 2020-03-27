import {SCORE} from '../constants';

export const setScores = scores => dispatch => {
	dispatch({type: SCORE, payload: scores});
};
