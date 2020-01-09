import React from "react";
import "./NossasAcoes.css";
import NavBar from "../../componentes/NavBar";

function NossasAcoes() {
  const ingredients = [   
    { "id":1, "titulo":"1", "icon":"" },
    { "id":2, "titulo":"2", "icon":"" },
    { "id":3, "titulo":"3", "icon":"" }
      
]
  return (
    <div className="NossasAcoes">
      <NavBar class="nav-bar w-100"></NavBar>
      <div className="row nav-bar-space"></div>
      <div className="container-fluid p-0 ">
        <div className="container">
          <div className="row">
            <h3 className="titulo">O ano inteiro semeando amor</h3>
          </div>
        </div>

        <div className="row background-yellow justify-content-center">
          <h4 className="subtitulo">Veja nosso calendário fixo de ações:</h4>
          <div className="col-md-2 p-0" v-for="(ingredient, index) in ingredients" >
            <div className="acoes">
              <div className="icon"></div>
              <span className="s">Doação de Sangue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NossasAcoes;
