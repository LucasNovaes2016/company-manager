import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Introducao, NaoEcontrado, SideMenu } from "./components";

function App() {
  React.useEffect(() => {
    console.log("entrei no app. Colocar Javascript aqui");
  }, []);

  return (
    <Router>
      <SideMenu />
      <Switch>
        <Route exact path="/" component={Introducao} />
        <Route exact path="/introducao" component={Introducao} />
        <Route component={NaoEcontrado} />
      </Switch>
    </Router>
  );
}

export default App;
