import React from "react";
import "./Depoimentos.css";

import depoente1 from "../../assets/fapa-depoente-homem-negro.jpg";
import depoente2 from "../../assets/fapa-depoente-mulher.jpg";
import depoente3 from "../../assets/fapa-depoente-homem-branco.jpg";

function Depoimentos() {
  return (
    <div className="Depoimentos">
      <div className="container-fluid ">
        <div className="container">
          <div className="row justify-content-center d-flex depoimentos-view">
            <div className="col-md-4 view-image">
              <div className="square yellow"></div>
              <img
                className="image margin-left"
                src={depoente1}
                alt="primeiro depoente"
              />
            </div>

            <div className="col-md-6 view-texto">
              <h5 className="titulo"> "Mudou minha vida” </h5>
              <p className="texto">
                " Ser reconhecida como uma instituição íntegra, onde voluntários
                sintam-se seguros para destinar suas energias em prol de um bem
                comum."
              </p>
            </div>
          </div>
          <div className="row justify-content-center d-flex depoimentos-view reverse">
            <div className="col-md-4 view-image">
              <div className="square green margin-left"></div>
              <img className="image" src={depoente2} alt="primeiro depoente" />
            </div>

            <div className="col-md-6 view-texto align-right">
              <h5 className="titulo"> "Mudou minha vida” </h5>
              <p className="texto">
                " Ser reconhecida como uma instituição íntegra, onde voluntários
                sintam-se seguros para destinar suas energias em prol de um bem
                comum."
              </p>
            </div>
          </div>
          <div className="row justify-content-center d-flex depoimentos-view">
            <div className="col-md-4 view-image">
              <div className="square orange margin-left"></div>
              <img className="image" src={depoente3} alt="primeiro depoente" />
            </div>

            <div className="col-md-6 view-texto">
              <h5 className="titulo"> "Mudou minha vida” </h5>
              <p className="texto">
                " Ser reconhecida como uma instituição íntegra, onde voluntários
                sintam-se seguros para destinar suas energias em prol de um bem
                comum."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Depoimentos;
