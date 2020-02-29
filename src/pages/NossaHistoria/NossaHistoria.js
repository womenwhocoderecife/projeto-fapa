import React from "react";
import "./NossaHistoria.css";
import NavBar from "../../componentes/NavBar";
import Footer from "../../componentes/Footer/Footer";
import eduardo from "../../assets/nossa história.jpeg"

function NossaHistoria() {
  return (
    <div className="NossaHistoria">
      <NavBar class="w-100"></NavBar>
      <div className="row nav-bar-space"></div>
      <div className="container-fluid ">
        <div className="container">
          <div className="row">
            <h3 className="titulo">Nossa História</h3>
          </div>
          <div className="row">
            <div className="col-md-5 p-0">
              <p className="texto">
                Somos uma organização que desde 28 de agosto de 2016 vem agindo com o propósito de mobilização e articulação do voluntariado, buscando promover ações em prol da defesa e elevação da qualidade de vida e dos direitos do  ser humano.
              </p>
              <br></br>
              <p className="texto">
                A inquietude, a partir de uma consciência cívica existente, mas sub-utilizada, nos fez sair da inoperância e começar a FAZER ALGO POR ALGUÉM, algo para mudar uma situação adversa, algo que pudesse ser uma retribuição por tudo aquilo que recebemos para nos desenvolvermos, seja de iniciativa privada ou pública.
                Hoje atuamos com centenas de voluntários e ajudamos milhares de pessoas.
              </p>
              <br></br>
              <p className="texto">
                {" "}
                Sabemos que é muito pouco o que fazemos, mas com a ajuda de outros FAPEIROS, conseguiremos ampliar ainda nossa atuação, sempre com os pés no chão, cientes que nosso trabalho é, como disse Madre Teresa de Calcutá,  "UMA GOTA NO OCEANO, MAS QUE SEM ELA, O OCEANO NÃO SERIA DO TAMANHO QUE É."
                Que em todos os corações possam brotar a solidariedade e a certeza de que podemos ir além de nós mesmos.
              </p>
            </div>
            <div className="col-md-7 view-image">
              <img className="image square-green" src={eduardo} alt="Eduardo" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default NossaHistoria;
