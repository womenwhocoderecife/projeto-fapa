import React from 'react';
import './Home.css';
import LuanaCamila from '../LuanaCamila/LuanaCamila'
import IlzaKarol from '../IlzaKarol/IlzaKarol';


function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <LuanaCamila></LuanaCamila>
        <IlzaKarol/>
      </header>
    </div>
  );
}

export default Home;
