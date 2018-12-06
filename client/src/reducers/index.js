import { combineReducers } from "redux";

import videoReducer from "./videoReducer";
import clickedReducer from "./clickedReducer";

export default combineReducers({
  video: videoReducer,
  clicked: clickedReducer
});
