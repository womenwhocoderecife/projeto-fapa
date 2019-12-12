import React from 'react';
import './Home.css';
import LuanaCamila from '../LuanaCamila/LuanaCamila'
import IlzaKarol from '../IlzaKarol/IlzaKarol';
import MissaoVisao from '../MissaoVisao/MissaoVisao';


function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
      <MissaoVisao></MissaoVisao>
        <LuanaCamila></LuanaCamila>
        <IlzaKarol/>
        
      </header>
    </div>
  );
}

export default Home;
