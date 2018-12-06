import { ADD_CLICKED, GET_CLICKED } from "../actions/types";

const initialState = {
  clicked: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CLICKED:
      return {
        ...state,
        clicked: [action.payload, ...state.clicked]
      };
    case GET_CLICKED:
      return {
        ...state,
        clicked: action.payload
      };

    default:
      return state;
  }
}
