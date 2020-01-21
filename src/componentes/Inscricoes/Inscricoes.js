import React from "react";
import "./Inscricoes.css";
import voluntario1 from "../../assets/fapa-depoente-homem-negro.jpg";
import voluntario2 from "../../assets/fapa-depoente-mulher.jpg";
import voluntario3 from "../../assets/fapa-depoente-homem-branco.jpg";
import Button from "react-bootstrap/Button";

function Inscricoes() {
  return (
    <div className="Inscricoes">
      <div className="container-fluid ">
        <div className="container">
          <div className="row justify-content-center d-flex inscricoes-view">
            <div className="col-md-3 view">
              <div className="square yellow margin-left"></div>
              <img className="image" src={voluntario1} alt="" />
              <h1 className="titulo">Voluntário Anjo</h1>
              <p className="texto">
                Desenvolver e apoiar ações para a defesa e elevação da qualidade
                de vida do ser humano.
              </p>
              <Button variant="outline-light" className="voluntario-button">
                Seja um Voluntário Anjo
              </Button>
            </div>
            <div className="col-md-3 view">
              <div className="square green margin-left"></div>
              <img className="image" src={voluntario2} alt="" />
              <h1 className="titulo">Voluntário Anjo</h1>
              <p className="texto">
                Desenvolver e apoiar ações para a defesa e elevação da qualidade
                de vida do ser humano.
              </p>
              <Button variant="outline-light" className="voluntario-button">
                Seja um Voluntário Anjo
              </Button>
            </div>
            <div className="col-md-3 view">
              <div className="square orange margin-left"></div>
              <img className="image" src={voluntario3} alt="" />
              <h1 className="titulo">Voluntário Anjo</h1>
              <p className="texto">
                Desenvolver e apoiar ações para a defesa e elevação da qualidade
                de vida do ser humano.
              </p>
              <Button variant="outline-light" className="voluntario-button">
                Seja um Voluntário Anjo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscricoes;
