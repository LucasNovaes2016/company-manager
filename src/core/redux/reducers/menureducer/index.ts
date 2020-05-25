import { CHANGE_MENU_VISIBILITY } from "../../types";
import { IMenuReducer } from "../../../interfaces";

const initialState = {
  menu_visibility: true,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_MENU_VISIBILITY:
      return {
        ...state,
        menu_visibility: action.payload,
      };
    default:
      return state;
  }
};
