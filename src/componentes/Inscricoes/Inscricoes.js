import React from 'react';
import './Inscricoes.css';
import voluntario1 from '../../assets/fapa-depoente-homem-negro.jpg';
import voluntario2 from '../../assets/fapa-depoente-mulher.jpg';
import voluntario3 from '../../assets/fapa-depoente-homem-branco.jpg';
import Button from 'react-bootstrap/Button'

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
            Desenvolver e apoiar ações para a defesa e elevação da qualidade de vida do ser humano.
            </p>
            <Button variant="outline-light" className = "colaborar-button">Seja um Voluntário Anjo</Button>
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
            Desenvolver e apoiar ações para a defesa e elevação da qualidade de vida do ser humano.
            </p>
            <Button variant="outline-light" className = "colaborar-button">Seja um Voluntário Anjo</Button>
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
                Desenvolver e apoiar ações para a defesa e elevação da qualidade de vida do ser humano.
            </p>
            <Button variant="outline-light" className = "colaborar-button">Seja um Voluntário Anjo</Button>
        </div>

    </section>
  );
}

export default Inscricoes;