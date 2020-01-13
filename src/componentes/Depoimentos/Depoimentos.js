import React from 'react';
import './Depoimentos.css';

import depoente1 from '../../assets/fapa-depoente-homem-negro.jpg';
import depoente2 from '../../assets/fapa-depoente-mulher.jpg';
import depoente3 from '../../assets/fapa-depoente-homem-branco.jpg';

function Depoimentos() {
  return (
    
    <section className="container">
        <div className = "card margin-card">
          <div className = "images"> 
            <div className = "imgs-container">
              <img className = "depoiment-img top-img" src = {depoente1} alt = "primeiro depoente"/>
              <div className = "retangulo-amarelo retangulo"> </div>
            </div>
          </div>
          <div className = "card-body margin-body">
            <h5 className = "card-title left"> "Mudou minha vida” </h5>
            <p className = "card-text left"> Ser reconhecida como uma instituição íntegra, onde voluntários sintam-se seguros para destinar suas energias em prol de um bem comum. </p>
          </div>
        </div>

        <div className = "card middle-card">
        <div className = "card-body middle-body">
            <h5 className = "card-title right"> "Mudou minha vida” </h5>
            <p className = "card-text right"> Ser reconhecida como uma instituição íntegra, onde voluntários sintam-se seguros para destinar suas energias em prol de um bem comum. </p>
          </div>
          <div className = "images">
            <div className = "imgs-container"> 
              <img className = "depoiment-img middle-img" src = {depoente2} alt = "segundo depoente"/>
              <div className = "retangulo-verde retangulo"> </div>
            </div>
        </div>
        </div>

        <div className = "card margin-card">
          <div className = "images"> 
            <div className = "imgs-container">
              <img className = "depoiment-img bottom-img" src = {depoente3} alt = "terceiro depoente"/>
              <div className = "retangulo-laranja retangulo"> </div>
            </div>
          </div>
          <div className = "card-body margin-body">
            <h5 className = "card-title left"> "Mudou minha vida” </h5>
            <p className = "card-text left"> Ser reconhecida como uma instituição íntegra, onde voluntários sintam-se seguros para destinar suas energias em prol de um bem comum. </p>
          </div>
        </div>
    </section>
  );
}

export default Depoimentos;