import React from 'react';
import './IlzaKarol.css';
import faparoda from '../../assets/fapa-roda.jpg';
import idoso from '../../assets/fapa-idoso.jpg';
import lindu from '../../assets/fapa-lindu.jpg';

function IlzaKarol() {
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
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={faparoda} alt="First slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={idoso} alt="Second slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={lindu} alt="Third slide"></img>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
        <p class="conheca">Conheça nossas ações</p>
    </div>



  );
}

export default IlzaKarol;