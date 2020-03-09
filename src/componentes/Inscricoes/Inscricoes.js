import React from "react";
import "./Inscricoes.css";
import voluntario1 from "../../assets/Edilma.jpg";
import voluntario2 from "../../assets/Luciene.jpg";
import voluntario4 from "../../assets/Poliana Afonso.jpg";
import voluntario3 from "../../assets/Felipe.jpg";
import Button from "react-bootstrap/Button";

function Inscricoes() {
  return (
    <div className="Inscricoes">

          <div className="container-fluid ">
        <div className="container">
          <div className="row justify-content-center d-flex">
            <div className="col-md-3 view yellow">
              <h1 className="titulo">Voluntário Semeador</h1>
              <p className="texto">
                Desenvolver e apoiar ações para a defesa e elevação da qualidade
                de vida do ser humano.
              </p>
              <a href='https://forms.gle/8MkFTmwSRMpJf9fo8'>
              <Button variant="outline-light" className="voluntario-button">
                Inscreva-se
              </Button>
            </a>
            </div>
            <div className="col-md-3 view orange">
              <h1 className="titulo">Voluntário Mão na Massa</h1>
              <p className="texto">Voluntário que está presente no dia da ação, aquele que doa o trabalho braçal e gotas de suor.</p>
              <a href='https://forms.gle/EKcTwRJhZvBb6tU57'>
              <Button variant="outline-light" className="voluntario-button">
                Inscreva-se
            </Button>
              </a>
            </div>
            </div>

            <div className="row justify-content-center d-flex">
            <div className="col-md-3 view orange">
              <h1 className="titulo">Voluntário Financiador</h1>
              <p className="texto">
              Voluntário que contribui com recursos materiais. Sem eles não acontecem as ações, não se causa impacto efetivo.
              </p>
              <a href='https://forms.gle/N3TF7JTFAgdEHzaV7'>
              <Button variant="outline-light" className="voluntario-button">
                Inscreva-se
              </Button>
            </a>
            </div>
            <div className="col-md-3 view green">
              <h1 className="titulo">Voluntário Missionário</h1>
              <p className="texto">
              Voluntário que vive dia e noite pensando e agindo nos projetos desenvolvidos pela ONG.
              </p>
              <a href='https://forms.gle/Y3eDx9SNc7DEQNRU7'>
              <Button variant="outline-light" className="voluntario-button">
                Inscreva-se
              </Button>
            </a>
            </div>
            </div>
          </div>



        </div>
    </div>
  );
}

export default Inscricoes;
