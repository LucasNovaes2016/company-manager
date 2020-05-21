import React from "react";
import { logo } from "../../../core/data";

export default function SideMenu(): React.ReactElement {
  return (
    <div className="vertical-nav bg-white" id="sidebar">
      <div className="py-4 px-3 mb-4 menu-header">
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
          <a href="#" className="nav-link text-dark font-italic bg-light">
            <i className="fas fa-info-circle mr-3 text-secondary fa-fw"></i>
            Introdução
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fas fa-users mr-3 text-secondary fa-fw"></i>
            Funcionários
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fas fa-file-contract mr-3 text-secondary fa-fw"></i>
            Modelos Contratuais
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fas fa-clipboard-list mr-3 text-secondary fa-fw"></i>
            Cargos
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fas fa-bezier-curve mr-3 text-secondary fa-fw"></i>
            Departamentos
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fas fa-laptop-code mr-3 text-secondary fa-fw"></i>
            Projetos
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fas fa-clock mr-3 text-secondary fa-fw"></i>
            Horários
          </a>
        </li>
      </ul>
    </div>
  );
}
