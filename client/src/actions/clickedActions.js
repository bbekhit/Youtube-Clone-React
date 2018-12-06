import { ADD_CLICKED, GET_CLICKED } from "./types";
import axios from "axios";

export const addClicked = clickedData => dispatch => {
  axios.post("/api/clicked/add-clicked", clickedData).then(res =>
    dispatch({
      type: ADD_CLICKED,
      payload: res.data
    })
  );
};
export const getClicked = () => dispatch => {
  axios
    .get("/api/clicked")
    .then(res => {
      dispatch({
        type: GET_CLICKED,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_CLICKED,
        payload: null
      })
    );
};
