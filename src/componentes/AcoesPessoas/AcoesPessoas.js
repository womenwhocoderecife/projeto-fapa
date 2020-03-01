import React from "react";
import "./AcoesPessoas.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import faparoda from "../../assets/fapa-roda.jpg";
import idoso from "../../assets/fapa-idoso.jpg";
import lindu from "../../assets/fapa-lindu.jpg";
import abraco from "../../assets/abraco.jpg"
import Button from "react-bootstrap/Button";

function AcoesPessoas() {
  return (
    <div className="container-alcance">
      <div className="container-numero">
        <div className="row">
          <div className="acoes">
            <h2 className="numero">+40</h2>
            <p className="sub-num">ações realizadas</p>
          </div>
          <div className="acoes">
            <h2 className="numero">+10k</h2>
            <p className="sub-num">pessoas impactadas diretamente</p>
          </div>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={abraco} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={idoso} alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={lindu} alt="Third slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={faparoda} alt="Fourth slide"/>
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
