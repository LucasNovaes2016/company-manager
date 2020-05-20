import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Introducao, NaoEcontrado } from "./components";

function App() {
  React.useEffect(() => {
    console.log("entrei no app. Colocar Javascript aqui");
  }, []);

  return (
    <Router>
      <div> Ola </div>
      <Switch>
        <Route exact path="/" component={Introducao} />
        <Route exact path="/introducao" component={Introducao} />
        <Route component={NaoEcontrado} />
      </Switch>
    </Router>
  );
}

export default App;
