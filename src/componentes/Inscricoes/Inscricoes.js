import React from 'react';
import './Inscricoes.css';
import voluntario1 from '../../assets/fapa-depoente-homem-negro.jpg';
import voluntario2 from '../../assets/fapa-depoente-mulher.jpg';
import voluntario3 from '../../assets/fapa-depoente-homem-branco.jpg';

function Inscricoes() {
  return (
    <section className="container">
        <div className = "card">
            <div className = "images">
                <div className = "imgs-container">
                    <img className = "inscription-img" src = {voluntario1} alt = "inscricao1"/>
                    <div className = "retangulo-amarelo retangulo"> </div>
                    <h1 className = "card-title txt">Voluntário Anjo</h1>
                </div>
            </div>
            <p className = "texto-inscricao txt">
                Texto de Inscricoes
            </p>
            <button className = "btn-inscription"> Botão </button>
        </div>

        <div className = "card">
            <div className = "images">
                <div className = "imgs-container">
                    <img className = "inscription-img" src = {voluntario2} alt = "inscricao2"/>
                    <div className = "retangulo-laranja retangulo"> </div>
                    <h1 className = "card-title txt">Voluntário Anjo</h1>
                </div>
            </div>
            <p className = "texto-inscricao txt">
                Texto de Inscricoes
            </p>
            <button className = "btn-inscription"> Botão </button>
        </div>

        <div className = "card">
            <div className = "images">
                <div className = "imgs-container">
                    <img className = "inscription-img" src = {voluntario3} alt = "inscricao1"/>
                    <div className = "retangulo-verde retangulo"> </div>
                </div>
                <h1 className = "card-title txt">Voluntário Anjo</h1>
            </div>
            <p className = "texto-inscricao txt">
                Texto de Inscricoes
            </p>
            <button className = "btn-inscription"> Botão </button>
        </div>

    </section>
  );
}

export default Inscricoes;