import React from 'react';
import './Home.css';
import AcoesPessoas from '../AcoesPessoas/AcoesPessoas';
import MissaoVisao from '../MissaoVisao/MissaoVisao';


function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
      <MissaoVisao></MissaoVisao>
      <AcoesPessoas/>
      </header>
    </div>
  );
}

export default Home;
