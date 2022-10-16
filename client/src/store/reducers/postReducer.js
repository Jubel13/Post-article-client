import { FETCH_POST } from "../actionTypes";

const initialState = {
  posts: [],
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}

export default postReducer;
