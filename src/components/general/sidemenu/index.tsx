import React from "react";
import { logo } from "../../../core/data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SideMenu(): React.ReactElement {
  const visibilidade_menu = useSelector(
    (state: any) => state.menu.visibilidade_menu
  );

  return (
    <div
      className={`side-menu bg-white ${visibilidade_menu ? "" : "active"}`}
      id="sidebar"
    >
      <div className="py-4 px-3 mb-4 side-menu-header">
        <div className="media d-flex align-items-center">
          <img
            src="http://getdrawings.com/free-icon-bw/generic-user-icon-9.png"
            alt="Ícone do usuário de teste"
            title="Usuário de teste"
            width="65"
            className="mr-3 rounded-circle img-thumbnail shadow-sm"
          />
          <div className="media-body">
            <h4 className="m-0">Usuário Teste</h4>
            <p className="font-weight-light text-muted mb-0">Gerente</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <img
          src={logo}
          title="Company Manager"
          alt="logo da Company Manager"
          width="140"
          height="140"
        />
      </div>

      <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
        Menu
      </p>

      <ul className="nav flex-column mb-0">
        <li className="nav-item">
          <Link to="/" className="nav-link text-dark font-italic">
            <i className="fas fa-info-circle mr-3 text-secondary fa-fw"></i>
            Introdução
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/funcionarios" className="nav-link text-dark font-italic">
            <i className="fas fa-users mr-3 text-secondary fa-fw"></i>
            Funcionários
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/modelos_contratuais"
            className="nav-link text-dark font-italic"
          >
            <i className="fas fa-file-contract mr-3 text-secondary fa-fw"></i>
            Modelos Contratuais
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cargos" className="nav-link text-dark font-italic">
            <i className="fas fa-clipboard-list mr-3 text-secondary fa-fw"></i>
            Cargos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/departamentos" className="nav-link text-dark font-italic">
            <i className="fas fa-bezier-curve mr-3 text-secondary fa-fw"></i>
            Departamentos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projetos" className="nav-link text-dark font-italic">
            <i className="fas fa-laptop-code mr-3 text-secondary fa-fw"></i>
            Projetos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/horarios" className="nav-link text-dark font-italic">
            <i className="fas fa-clock mr-3 text-secondary fa-fw"></i>
            Horários
          </Link>
        </li>
      </ul>
    </div>
  );
}
