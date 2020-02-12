import React from "react";
import "./AcoesPessoas.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import faparoda from "../../assets/fapa-roda.jpg";
import idoso from "../../assets/fapa-idoso.jpg";
import lindu from "../../assets/fapa-lindu.jpg";
import Button from "react-bootstrap/Button";

function AcoesPessoas() {
  return (
    <div className="container-alcance">
      <div class="container-numero">
        <div class="row">
          <div class="acoes">
            <h2 class="numero">+40</h2>
            <p class="sub-num">ações realizadas</p>
          </div>
          <div class="acoes">
            <h2 class="numero">+10k</h2>
            <p class="sub-num">pessoas impactadas diretamente</p>
          </div>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={faparoda}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={idoso} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={lindu} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="row d-flex justify-content-center">
        <Button
          variant="outline-light"
          className="nossas-acoes-button"
          href="/nossas-acoes"
        >
          Conheça nossas ações
        </Button>
      </div>
    </div>
  );
}

export default AcoesPessoas;
