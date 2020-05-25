import { combineReducers } from "redux";
import menuReducer from "./menureducer";

export default combineReducers({
  menu: menuReducer,
});
