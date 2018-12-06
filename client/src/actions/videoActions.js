import { GET_VIDEOS, GET_VIDEO, VIDEO_LOADING, GET_COMMENTS } from "./types";
import axios from "axios";


const myKey = process.env.REACT_APP_KEY_YOUTUBE;

export const getVideos = params => dispatch => {
  dispatch(videoLoading());
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=${myKey}&q=${params}`
    )
    .then(res => {
      dispatch({
        type: GET_VIDEOS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_VIDEOS,
        payload: null
      })
    );
};
export const getVideo = id => dispatch => {
  dispatch(videoLoading());
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${myKey}`
    )
    .then(res => {
      dispatch({
        type: GET_VIDEO,
        payload: res.data
      });
      // console.log(res.data);
    })
    .catch(err =>
      dispatch({
        type: GET_VIDEO,
        payload: null
      })
    );
};
export const getComments = id => dispatch => {
  dispatch(videoLoading());
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=${myKey}&textFormat=plainText&part=snippet&videoId=${id}&maxResults=5`
    )
    .then(res => {
      dispatch({
        type: GET_COMMENTS,
        payload: res.data
      });
      // console.log(res.data);
    })
    .catch(err =>
      dispatch({
        type: GET_COMMENTS,
        payload: null
      })
    );
};
export const videoLoading = () => {
  return {
    type: VIDEO_LOADING
  };
};
