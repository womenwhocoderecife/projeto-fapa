import React from "react";
import "./JunteSe.css";

import NavBar from "../../componentes/NavBar";
import Inscricoes from "../../componentes/Inscricoes/Inscricoes";

function JunteSe() {
  return (
    <div className="Junte-se">
      <NavBar class="nav-bar w-100"></NavBar>
      <div className="row nav-bar-space"></div>
      <Inscricoes></Inscricoes>
    </div>
  );
}

export default JunteSe;
