import { combineReducers } from "redux";
import menuReducer from "./menureducer";
import empresaReducer from "./empresareducer";

export default combineReducers({
  menu: menuReducer,
  empresa: empresaReducer,
});
