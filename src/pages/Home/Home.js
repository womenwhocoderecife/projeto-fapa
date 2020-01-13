import React from 'react';
import './Home.css';
import AcoesPessoas from '../AcoesPessoas/AcoesPessoas';
import MissaoVisao from '../MissaoVisao/MissaoVisao';
<<<<<<< HEAD
import NavBarHome from '../../componentes/NavBar/NavBarHome/Nav'
import Header from '../../componentes/Header/Header'
=======
import NavBarHome from '../../componentes/NavBar/NavBarHome/Nav';
import Depoimentos from '../../componentes/Depoimentos/Depoimentos';
>>>>>>> c5b660f69f745cdfa13cdd32aeeee4e94b3b3772

function Home() {
  return (
    <div className="Home">
      <NavBarHome></NavBarHome>
      <Header></Header>
      <MissaoVisao></MissaoVisao>
      <AcoesPessoas/>
<<<<<<< HEAD
=======
      <Depoimentos></Depoimentos>
      </header>
>>>>>>> c5b660f69f745cdfa13cdd32aeeee4e94b3b3772
    </div>
  );
}

export default Home;
