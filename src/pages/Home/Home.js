import React from 'react';
import './Home.css';
import AcoesPessoas from '../AcoesPessoas/AcoesPessoas';
import MissaoVisao from '../MissaoVisao/MissaoVisao';
import NavBarHome from '../../componentes/NavBar/NavBarHome/Nav'
import Header from '../../componentes/Header/Header'

function Home() {
  return (
    <div className="Home">
      <NavBarHome></NavBarHome>
      <Header></Header>
      <MissaoVisao></MissaoVisao>
      <AcoesPessoas/>
    </div>
  );
}

export default Home;
