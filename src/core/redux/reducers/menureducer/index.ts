import { MUDAR_VISIBILIDADE_MENU } from "../../types";
import { IMenuReducer } from "../../../interfaces";

const initialState: IMenuReducer = {
  visibilidade_menu: true,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case MUDAR_VISIBILIDADE_MENU:
      return {
        ...state,
        visibilidade_menu: action.payload,
      };
    default:
      return state;
  }
};
