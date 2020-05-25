import { CHANGE_MENU_VISIBILITY } from "../types";

// Chante Menu Visibility
export const changeMenuVisibility = (menu_visibility: boolean) => {
  return {
    type: CHANGE_MENU_VISIBILITY,
    payload: menu_visibility,
  };
};
