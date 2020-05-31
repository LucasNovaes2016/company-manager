import { MUDAR_VISIBILIDADE_MENU } from "../types";

// Chante Menu Visibility
export const changeMenuVisibility = (visibilidade_menu: boolean) => {
  return {
    type: MUDAR_VISIBILIDADE_MENU,
    payload: visibilidade_menu,
  };
};
