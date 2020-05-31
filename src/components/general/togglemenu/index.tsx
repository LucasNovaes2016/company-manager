import React from "react";
import { useDispatch } from "react-redux";
import { MUDAR_VISIBILIDADE_MENU } from "../../../core/redux/types";

export default function ToggleMenu(): React.ReactElement {
  const [menuOpen, setMenuOpen] = React.useState(true);

  const dispatch = useDispatch();

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    dispatch({ type: MUDAR_VISIBILIDADE_MENU, payload: !menuOpen });
  };

  return (
    <button
      id="sidebarCollapse"
      type="button"
      className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
      onClick={handleClick}
    >
      <i className={`far fa-${menuOpen ? "plus" : "minus"}-square mr-2`}></i>
      <small className="text-uppercase font-weight-bold">Menu</small>
    </button>
  );
}
