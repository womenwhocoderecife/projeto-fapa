import React from 'react';
import './Home.css';
import AcoesPessoas from '../AcoesPessoas/AcoesPessoas';
import MissaoVisao from '../MissaoVisao/MissaoVisao';
import NavBarHome from '../../componentes/NavBar/NavBarHome/Nav';
import Depoimentos from '../../componentes/Depoimentos/Depoimentos';

function Home() {
  return (
    <div className="Home">
      <NavBarHome></NavBarHome>
      <header className="Home-header">
      <MissaoVisao></MissaoVisao>
      <AcoesPessoas/>
      <Depoimentos></Depoimentos>
      </header>
    </div>
  );
}

export default Home;
