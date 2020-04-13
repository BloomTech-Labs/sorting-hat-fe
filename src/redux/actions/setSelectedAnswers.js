import {SELECTED_ANSWER} from '../constants';
export const setSelectedAnswers = (answer) => (dispatch) =>
	dispatch({type: SELECTED_ANSWER, payload: answer});
