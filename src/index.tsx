import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@progress/kendo-theme-default/dist/all.css";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./core/redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
