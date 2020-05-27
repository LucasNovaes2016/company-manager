import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Introducao,
  NaoEcontrado,
  SideMenu,
  ToggleMenu,
  CargosConsulta,
  DepartamentosConsulta,
  FuncionariosConsulta,
  HorariosConsulta,
  ModelosContratuaisConsulta,
  ProjetosConsulta,
} from "./components";
import { useSelector } from "react-redux";

function App() {
  const menu_visibility = useSelector(
    (state: any) => state.menu.menu_visibility
  );

  return (
    <Router>
      <SideMenu />
      <div
        className={`menu-item-content p-5 ${menu_visibility ? "" : "active"}`}
        id="content"
      >
        <ToggleMenu />
        <Switch>
          <Route exact path="/" component={Introducao} />
          <Route exact path="/introducao" component={Introducao} />
          <Route exact path="/funcionarios" component={FuncionariosConsulta} />
          <Route
            exact
            path="/modelos_contratuais"
            component={ModelosContratuaisConsulta}
          />
          <Route exact path="/cargos" component={CargosConsulta} />
          <Route
            exact
            path="/departamentos"
            component={DepartamentosConsulta}
          />
          <Route exact path="/projetos" component={ProjetosConsulta} />
          <Route exact path="/horarios" component={HorariosConsulta} />
          <Route component={NaoEcontrado} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
