import React from "react";
import { Link } from "react-router-dom";

export default function Introducao(): React.ReactElement {
  return (
    <>
      <h1 className="display-4">Introdução</h1>
      <hr className="my-2" />
      <p>
        Company Manager é um sistema web que simula o gerenciamento de uma
        empresa. Nele, você poderá cadastrar funcionários, cargos,
        departamentos, horários e projetos a sua empresa, bem como vincular
        colaboradores a mentores ou mentorados, além de definir os reponsáveis
        pela liderança de projetos. Para começar a usá-lo, escolha alguma das
        outras opções do Menu.
      </p>
      <p>
        Este projeto é exclusivamente front-end e todos os cadastros e
        visualizações de dados foram feitos com o auxílio do Redux (ferramenta
        de gerenciamento de estado comummente utilizada em projetos feitos em
        React). Isto significa que, caso a página seja atualizada, todos os
        dados gerados serão perdidos.
        <Link to="/funcionarios">
          {" "}
          Clique para começar a utilizar as funcionalidades deste sistema!
        </Link>
      </p>
      <h6>Mais sobre o autor:</h6>
      <a
        href="https://github.com/LucasNovaes2016?tab=repositories"
        target="_blank"
      >
        Meus repositórios no Github
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/lucas-novaes-7ab408176/"
        target="_blank"
      >
        Meu Linkedin
      </a>
      <br />{" "}
    </>
  );
}
