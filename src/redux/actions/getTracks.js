import axios from "axios";
import {
  TRACKS_GET_START,
  TRACKS_GET_SUCCESS,
  TRACKS_GET_FAIL
} from "../constants";

export const getTracks = () => dispatch => {
  dispatch({ type: TRACKS_GET_START });
  axios
    .get("https://tech-sorting-hat.herokuapp.com/api/tracks")
    .then(res => {
      // console.log("This is Track Axios", res.data);
      dispatch({ type: TRACKS_GET_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: TRACKS_GET_FAIL, payload: err }));
};

//? WHERE DO WE GET THE TRACK NAMES?
