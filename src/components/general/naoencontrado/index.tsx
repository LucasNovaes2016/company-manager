import React from "react";
import { Link } from "react-router-dom";

export default function NaoEcontrado(): React.ReactElement {
  return (
    <>
      <div className="error-template">
        <h2>Página não encontrada :(</h2>
        <hr className="my-2" />
        <div className="error-details">
          Você tentou acessar uma rota inexistente no Company Manager.
        </div>
        <div className="error-actions mt-2">
          <Link to="/funcionarios" className="btn btn btn-primary">
            <i className="fas fa-home mr-2"></i>
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </>
  );
}
