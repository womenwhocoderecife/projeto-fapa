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
          <div className="row justify-content-center d-flex inscricoes-view">
            <div className="col-md-4 view-image">
              <img className="image shadow-left-yellow" src={depoente1} alt="primeiro depoente" />
            </div>

            <div className="col-md-6 view-texto align-left text-shadow-left">
              <h5 className="titulo"> Karine Lima </h5>
              <p className="texto">
               "A Fapa pra mim representa a vontade de fazer o bem sem olhar a quem! É ter o prazer de ajudar o próximo e crescer como pessoa...É sentir o espírito ser elevado. Sou grata por fazer parte dessa família que tem como objetivo fazer desse mundo um lugar melhor."
              </p>
            </div>
          </div>
          <div className="row justify-content-center d-flex inscricoes-view reverse">
            <div className="col-md-4 view-image">
              <img className="image shadow-right-green" src={depoente2} alt="primeiro depoente" />
            </div>

            <div className="col-md-6 view-texto align-right text-shadow-right">
              <h5 className="titulo">Luciene Barros</h5>
              <p className="texto">
              "A FAPA pra mim é um sonho que se realiza nas ações. É doação. É amor. É certeza que podemos ir além de nós mesmos. O fato de poder mudar o momento, a situação do outro, de fazer a diferença na vida de alguém, me trás felicidade e faz meu coração se encher de esperança e certeza de que é possível mudar o mundo. Nem que seja o mundo de “um” alguém."
              </p>
            </div>
          </div>
          <div className="row justify-content-center d-flex inscricoes-view">
            <div className="col-md-4 view-image">
              <img className="image shadow-right-orange" src={depoente3} alt="primeiro depoente" />
            </div>

            <div className="col-md-6 view-texto align-left">
              <h5 className="titulo"> Edilma Frazão </h5>
              <p className="texto">
                "A fapa foi a porta que eu precisava, foi a partir dela  que tive a oportunidade de externar todo o meu amor e carinho, pra fazer o bem, não só para quem precisa, mas para mim também."
              </p>
            </div>
          </div>
          <div className="row justify-content-center d-flex inscricoes-view reverse">
            <div className="col-md-4 view-image">
              <img className="image shadow-right-yellow" src={depoente1} alt="primeiro depoente" />
            </div>

            <div className="col-md-6 view-texto align-left  align-right text-shadow-right">
              <h5 className="titulo"> Geruza Leite </h5>
              <p className="texto">
                "A Fapa pra mim é toda possibilidade de exercer minha melhor versão com alegria."
              </p>
            </div>
          </div>
          <div className="row justify-content-center d-flex inscricoes-view">
            <div className="col-md-4 view-image">
              <img className="image shadow-left-orange" src={depoente2} alt="segundo depoente" />
            </div>

            <div className="col-md-6 view-texto align-left text-shadow-left">
              <h5 className="titulo"> Felipe Júnior </h5>
              <p className="texto">
                "A FAPA é algo que transcende o entendimento lógico-racional. Todos nós nascemos com ela no coração, pois ser Fapeiro é sinônimo de ser do bem para fazer o bem."
              </p>
            </div>
          </div>
          <div className="row justify-content-center d-flex inscricoes-view reverse">
            <div className="col-md-4 view-image">
              <img className="image shadow-right-green" src={depoente3} alt="terceiro depoente" />
            </div>

            <div className="col-md-6 view-texto align-right text-shadow-right">
              <h5 className="titulo"> Poliana Afonso </h5>
              <p className="texto">
                "Há coisas no mundo que me emocionam bastante, trabalho voluntário é uma delas. Encontrei na FAPA acolhimento e espaço para doar meu amor, sorriso e tempo para alegrar o próximo, até mesmo amenizar a sua dor. Sinto-me grata, o coração transborda ao final de cada ato, cada ação."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Depoimentos;
