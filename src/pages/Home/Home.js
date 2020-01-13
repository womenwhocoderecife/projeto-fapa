import React from 'react';
import './Home.css';
import AcoesPessoas from '../AcoesPessoas/AcoesPessoas';
import MissaoVisao from '../MissaoVisao/MissaoVisao';
import NavBarHome from '../../componentes/NavBar/NavBarHome/Nav'

function Home() {
  return (
    <div className="Home">
      <NavBarHome></NavBarHome>
      <header className="Home-header">
      <MissaoVisao></MissaoVisao>
      <AcoesPessoas/>
      </header>
    </div>
  );
}

export default Home;
