import {
  GET_VIDEOS,
  GET_VIDEO,
  VIDEO_LOADING,
  GET_COMMENTS
} from "../actions/types";

const initialState = {
  videos: [],
  comments: [],
  video: {},
  loading: false
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loading: false
      };
    case GET_VIDEO:
      return {
        ...state,
        video: action.payload,
        loading: false
      };
    case VIDEO_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default videoReducer;
