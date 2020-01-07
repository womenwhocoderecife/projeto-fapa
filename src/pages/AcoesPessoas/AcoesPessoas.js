import React from 'react';
import './AcoesPessoas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import faparoda from '../../assets/fapa-roda.jpg';
import idoso from '../../assets/fapa-idoso.jpg';
import lindu from '../../assets/fapa-lindu.jpg';

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
      className="d-block w-100"
      src={faparoda}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={idoso}
      alt="Third slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={lindu}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        <p class="conheca">Conheça nossas ações</p>
    </div>
  );
}

export default AcoesPessoas;
