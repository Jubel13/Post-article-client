import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loggerMiddleware from "./middlewares/logger";

import postReducer from "./reducers/postReducer";

const rootReducer = combineReducers({
  postReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

export default store;
