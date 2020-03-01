import React from "react";
import "./TodasAcoes.css";
import Acoes from "../Acoes";
import DetalhesAcoes from "../DetalhesAcoes";
import Acompanhe from "../Acompanhe";
function TodasAcoes() {
  return (
    <div className="TodasAcoes">
      <div className="container-fluid ">
        <div className="container">
          <div className="row">
          

          <h3 className="titulo">O ano inteiro semeando amor</h3>
          
            
          </div>
          
        </div>
     
    
        
      </div>

      <div className="container-fluid background-yellow">
      <h4 className="subtitulo">Veja nosso calendário fixo de ações:</h4>
      <Acoes/>
      </div>
      <div className="container-fluid">
      <h4 className="subtitulo">
          Descubra mais sobre nossas ações durante o ano
        </h4>
        <DetalhesAcoes />
      </div>
      <Acompanhe/>

   
    </div>
  );
}

export default TodasAcoes;
