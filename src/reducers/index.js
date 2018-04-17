import { combineReducers } from "redux";
import {responsiveStateReducer} from "redux-responsive";
import { routerReducer } from "react-router-redux";
import appState from "./appState";

export default combineReducers({
  browser: responsiveStateReducer,
  routing: routerReducer,
  appState,
});
