import React from "react";
import "./AcoesPessoas.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import um from "../../assets/1.jpg";
import dois from "../../assets/2.jpg";
import tres from "../../assets/3.jpg"
import cinco from "../../assets/5.jpg"
import seis from "../../assets/6.jpg"
import sete from "../../assets/7.jpg"
import oito from "../../assets/8.jpg"
import Button from "react-bootstrap/Button";

function AcoesPessoas() {
  return (
    <div className="container-alcance">
      <div className="container-numero">
          <div className="acoes">
            <h2 className="numero">+60</h2>
            <p className="sub-num">ações realizadas</p>
          </div>
          <div className="acoes">
            <h2 className="numero">+20k</h2>
            <p className="sub-num">pessoas impactadas diretamente</p>
          </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img className="d-block" src={um} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={dois} alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={tres} alt="Third slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={cinco} alt="Fifth slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={seis} alt="Sixth slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={sete} alt="Seventh slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={oito} alt="Eighth slide"/>
        </Carousel.Item>
      </Carousel>
      <Button variant="outline-light" className="nossas-acoes-button" href="/nossas-acoes">
        Conheça nossas ações
      </Button>
    </div>
  );
}

export default AcoesPessoas;
