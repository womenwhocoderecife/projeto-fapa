import React from "react";
import Button from "react-bootstrap/Button";
import "./MissaoVisao.css";
import foguete from "../../assets/foguete.png";

function MissaoVisao() {
  return (
    <div className="MissaoVisao">
      <div className="container-fluid p-0 ">
        <div className="container">
          <div className="row justify-content-center d-flex missao-view">
            <div className="col-md-6">
              <img src={foguete} ClassName="foguete" alt="foguete" />
              <h3 className="titulo_card">Visão</h3>
              <p className="texto_card">
                Ser reconhecida como uma instituição íntegra, onde voluntários
                sintam-se seguros para destinar suas energias em prol de um bem
                comum.
              </p>
            </div>
            <div className="col-md-6">
              <img src={foguete} alt="foguete2" />
              <h3 className="titulo_card"> Missão</h3>
              <p className="texto_card">
                Desenvolver e apoiar ações para a defesa e elevação da qualidade
                de vida do ser humano.{" "}
              </p>
            </div>
          </div>
          <div className="row justify-content-center d-flex missao-view">
            <Button
              variant="outline-light"
              className="saiba-mais-button"
              href="/sobre-nos"
            >
              Saiba mais sobre nós
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissaoVisao;
