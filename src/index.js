import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import SobreNos from "./pages/SobreNos/SobreNos";
import NossasAcoes from "./pages/NossasAcoes/NossasAcoes";
//import EmConstrucao from "./pages/EmConstrucao/EmConstrucao";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import JunteSe from "./pages/JunteSe/JunteSe";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/sobre-nos" component={SobreNos} />
      <Route path="/nossas-acoes" component={NossasAcoes} />
      <Route path="/junte-se" component={JunteSe} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
