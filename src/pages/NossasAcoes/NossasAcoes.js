import React from "react";
import "./NossasAcoes.css";
import NavBar from "../../componentes/NavBar";
import Acoes from "../../componentes/Acoes";
function NossasAcoes() {
  return (
    <div className="NossasAcoes">
      <NavBar class="nav-bar w-100"></NavBar>
      <div className="row nav-bar-space"></div>
      <div className="container-fluid p-0 ">
        <div className="container">
          <h3 className="titulo">O ano inteiro semeando amor</h3>
        </div>
        <div className="row background-yellow justify-content-center d-flex">
          <h4 className="subtitulo">Veja nosso calendário fixo de ações:</h4>

          <Acoes />
        </div>
      </div>
    </div>
  );
}

export default NossasAcoes;
